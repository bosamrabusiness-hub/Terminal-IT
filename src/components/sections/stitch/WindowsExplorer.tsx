'use client';
import { useEffect, useMemo, useState } from 'react';
import AhmedSamirProfile from '../../../../assets/Ahmed-Samir-profile.jpg';
import MahmoudHegazyProfile from '../../../../assets/mahmoud-hegazy-profile.jpeg';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Image from 'next/image';

type ItemType = 'folder' | 'image' | 'file' | 'pdf';
type Item = {
  name: string;
  type: ItemType;
  size?: string;
  date?: string;
  imageSrc?: string;
  pdfSrc?: string;
  linkedinUrl?: string;
  email?: string;
};
type Dir = {
  name: string;
  path?: string;
  items: Item[];
  parent?: Dir | null;
};

export default function WindowsExplorer() {
  const formatSize = (bytes: number) => {
    if (!bytes || Number.isNaN(bytes)) return '-';
    const units = ['B', 'KB', 'MB', 'GB'];
    let i = 0;
    let val = bytes;
    while (val >= 1024 && i < units.length - 1) {
      val /= 1024;
      i++;
    }
    return `${val.toFixed(i === 0 ? 0 : 1)}${units[i]}`;
  };
  const recentsDir: Dir = useMemo(
    () => ({
      name: 'Recents',
      items: [
        { name: "Don't Open This Folder", type: 'folder', size: '-', date: 'Jan 05, 2026' },
      ],
    }),
    []
  );

  const dontOpenDir: Dir = useMemo(
    () => ({
      name: "Don't Open This Folder",
      path: 'C:\\Recents\\DontOpen\\',
      items: [{ name: 'Secrets', type: 'folder', size: '-', date: 'Jan 05, 2026' }],
      parent: recentsDir,
    }),
    [recentsDir]
  );

  const cRootDir: Dir = useMemo(
    () => ({
      name: 'Local Disk (C:)',
      path: 'C:\\',
      items: [
        {
          name: 'Meet Our Heros',
          type: 'folder',
          date: 'Jan 05, 2026',
        },
      ],
      parent: null,
    }),
    []
  );

  const meetDir: Dir = useMemo(
    () => ({
      name: 'Meet Our Heros',
      path: 'C:\\Meet Our Heros\\',
      items: [
        { name: 'Ahmed Samir', type: 'folder' },
        { name: 'Mahmoud Hegazy', type: 'folder' },
        { name: 'Mariam Khalid', type: 'folder' },
      ],
      parent: cRootDir,
    }),
    [cRootDir]
  );
  
  const ahmedDir: Dir = useMemo(
    () => ({
      name: 'Ahmed Samir',
      path: 'C:\\Meet Our Heros\\Ahmed Samir\\',
      items: [
        {
          name: 'Ahmed Samir',
          type: 'image',
          size: '1.4MB',
          date: 'Jan 05, 2026',
          imageSrc: AhmedSamirProfile.src,
          linkedinUrl: 'https://www.linkedin.com/in/bosamra53/',
          email: 'abosamrabusiness@gmail.com',
        },
        {
          name: 'Cv',
          type: 'pdf',
          size: '-',
          date: 'Jan 05, 2026',
          pdfSrc: '/assets/cv-ahmed-samir.pdf',
        },
      ],
      parent: meetDir,
    }),
    [meetDir]
  );

  const mahmoudDir: Dir = useMemo(
    () => ({
      name: 'Mahmoud Hegazy',
      path: 'C:\\Meet Our Heros\\Mahmoud Hegazy\\',
      items: [
        {
          name: 'Mahmoud Hegazy',
          type: 'image',
          size: '1.3MB',
          date: 'Jan 05, 2026',
          imageSrc: MahmoudHegazyProfile.src,
          linkedinUrl: 'https://www.linkedin.com/in/mahmoudalihegazy/',
          email: 'Mahmoud.hegazy694@gmail.com',
        },
        {
          name: 'Cv',
          type: 'pdf',
          size: '-',
          date: 'Jan 05, 2026',
          pdfSrc: '/assets/cv-mahmoud-hegazy.pdf',
        },
      ],
      parent: meetDir,
    }),
    [meetDir]
  );

  const mariamDir: Dir = useMemo(
    () => ({
      name: 'Mariam Khalid',
      path: 'C:\\Meet Our Heros\\Mariam Khalid\\',
      items: [],
      parent: meetDir,
    }),
    [meetDir]
  );

  const [currentDir, setCurrentDir] = useState<Dir>(recentsDir);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [ctxMenu, setCtxMenu] = useState<{ open: boolean; x: number; y: number; item: Item | null }>({
    open: false,
    x: 0,
    y: 0,
    item: null,
  });
  const [sizeCache, setSizeCache] = useState<Record<string, string>>({});
  const [bytesCache, setBytesCache] = useState<Record<string, number>>({});
  const [history, setHistory] = useState<Dir[]>([recentsDir]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = popupOpen ? 'hidden' : '';
    }
  }, [popupOpen]);
  const resolveDirForItem = (dir: Dir, item: Item): Dir | null => {
    if (item.type !== 'folder') return null;
    if (dir === recentsDir && item.name === "Don't Open This Folder") return dontOpenDir;
    if (dir === dontOpenDir && item.name === 'Secrets') return cRootDir;
    if (dir === cRootDir && item.name === 'Meet Our Heros') return meetDir;
    if (dir === meetDir && item.name === 'Ahmed Samir') return ahmedDir;
    if (dir === meetDir && item.name === 'Mahmoud Hegazy') return mahmoudDir;
    if (dir === meetDir && item.name === 'Mariam Khalid') return mariamDir;
    return null;
  };
  const collectFiles = (dir: Dir): Array<{ key: string; url: string }> => {
    const out: Array<{ key: string; url: string }> = [];
    for (const it of dir.items) {
      const key = `${dir.name}-${it.name}`;
      if (it.type === 'image' && it.imageSrc) out.push({ key, url: it.imageSrc });
      else if (it.type === 'pdf' && it.pdfSrc) out.push({ key, url: it.pdfSrc });
      else if (it.type === 'folder') {
        const sub = resolveDirForItem(dir, it);
        if (sub) out.push(...collectFiles(sub));
      }
    }
    return out;
  };
  const parseDate = (val?: string): number => {
    if (!val) return 0;
    const ts = Date.parse(val);
    return Number.isNaN(ts) ? 0 : ts;
  };
  const formatDateShort = (ts: number): string => {
    if (!ts) return '-';
    const d = new Date(ts);
    return d.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };
  const getDirLatestDateTs = (dir: Dir): number => {
    let max = 0;
    for (const it of dir.items) {
      if (it.type === 'folder') {
        const sub = resolveDirForItem(dir, it);
        if (sub) {
          const subTs = getDirLatestDateTs(sub);
          if (subTs > max) max = subTs;
        }
      } else {
        const ts = parseDate(it.date);
        if (ts > max) max = ts;
      }
    }
    return max;
  };
  const getDirLatestDateString = (dir: Dir): string => formatDateShort(getDirLatestDateTs(dir));
  const getDirSizeBytes = (dir: Dir): number => {
    let total = 0;
    for (const it of dir.items) {
      if (it.type === 'folder') {
        const sub = resolveDirForItem(dir, it);
        if (sub) total += getDirSizeBytes(sub);
      } else {
        const key = `${dir.name}-${it.name}`;
        const val = bytesCache[key];
        if (val) total += val;
      }
    }
    return total;
  };
  useEffect(() => {
    const run = async () => {
      const currentFiles = currentDir.items
        .filter((it) => (it.type === 'image' && it.imageSrc) || (it.type === 'pdf' && it.pdfSrc))
        .map((it) => ({ key: `${currentDir.name}-${it.name}`, url: it.type === 'image' ? it.imageSrc! : it.pdfSrc! }));
      const folderFiles = currentDir.items
        .filter((it) => it.type === 'folder')
        .map((it) => resolveDirForItem(currentDir, it))
        .filter(Boolean)
        .flatMap((d) => collectFiles(d as Dir));
      const all = [...currentFiles, ...folderFiles];
      const tasks = all.map(async ({ key, url }) => {
        if (bytesCache[key]) return;
        try {
          const res = await fetch(url, { method: 'HEAD' });
          const len = res.headers.get('content-length');
          if (len) {
            const n = parseInt(len, 10);
            setBytesCache((m) => ({ ...m, [key]: n }));
            setSizeCache((m) => ({ ...m, [key]: formatSize(n) }));
          }
        } catch {}
      });
      await Promise.allSettled(tasks);
    };
    run();
  }, [currentDir, bytesCache, sizeCache]);
  const breadcrumbs = useMemo(() => {
    if (currentDir === recentsDir) {
      return [{ label: 'Recents', dir: recentsDir }];
    }
    if (currentDir === cRootDir) {
      return [{ label: 'Local Disk (C:)', dir: cRootDir }];
    }
    if (currentDir === meetDir) {
      return [
        { label: 'Local Disk (C:)', dir: cRootDir },
        { label: 'Meet Our Heros', dir: meetDir },
      ];
    }
    if (currentDir === dontOpenDir) {
      return [
        { label: 'Recents', dir: recentsDir },
        { label: "Don't Open This Folder", dir: dontOpenDir },
      ];
    }
    if (currentDir === ahmedDir) {
      return [
        { label: 'Local Disk (C:)', dir: cRootDir },
        { label: 'Meet Our Heros', dir: meetDir },
        { label: 'Ahmed Samir', dir: ahmedDir },
      ];
    }
    if (currentDir === mahmoudDir) {
      return [
        { label: 'Local Disk (C:)', dir: cRootDir },
        { label: 'Meet Our Heros', dir: meetDir },
        { label: 'Mahmoud Hegazy', dir: mahmoudDir },
      ];
    }
    if (currentDir === mariamDir) {
      return [
        { label: 'Local Disk (C:)', dir: cRootDir },
        { label: 'Meet Our Heros', dir: meetDir },
        { label: 'Mariam Khalid', dir: mariamDir },
      ];
    }
    return [{ label: currentDir.name, dir: currentDir }];
  }, [currentDir, recentsDir, cRootDir, meetDir, ahmedDir, mahmoudDir, mariamDir]);

  const setDirNoHistory = (dir: Dir) => {
    setCurrentDir(dir);
    setSelectedItem(null);
  };

  const openDir = (dir: Dir) => {
    setCurrentDir(dir);
    setSelectedItem(null);
    setHistory((prev) => {
      const next = prev.slice(0, historyIndex + 1);
      next.push(dir);
      return next;
    });
    setHistoryIndex((i) => i + 1);
  };

  const openItem = (item: Item) => {
    if (item.type === 'folder') {
      if (currentDir === recentsDir && item.name === "Don't Open This Folder") {
        openDir(dontOpenDir);
        return;
      }
      if (currentDir === dontOpenDir && item.name === 'Secrets') {
        openDir(cRootDir);
        return;
      }
      if (currentDir === cRootDir && item.name === 'Meet Our Heros') {
        openDir(meetDir);
      } else if (currentDir === meetDir && item.name === 'Ahmed Samir') {
        openDir(ahmedDir);
      } else if (currentDir === meetDir && item.name === 'Mahmoud Hegazy') {
        openDir(mahmoudDir);
      } else if (currentDir === meetDir && item.name === 'Mariam Khalid') {
        openDir(mariamDir);
      }
      return;
    }
    if (item.type === 'image' || item.type === 'pdf') {
      setSelectedItem(item);
      setPopupOpen(true);
      return;
    }
  };

  const handleSidebarClick = (key: 'recents' | 'c') => {
    if (key === 'recents') openDir(recentsDir);
    if (key === 'c') openDir(cRootDir);
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const canGoUp = Boolean(currentDir.parent);
  const goUp = () => {
    if (currentDir.parent) openDir(currentDir.parent);
  };
  const canGoBack = historyIndex > 0;
  const canGoForward = historyIndex < history.length - 1;
  const goBack = () => {
    if (!canGoBack) return;
    const dir = history[historyIndex - 1];
    setHistoryIndex(historyIndex - 1);
    setDirNoHistory(dir);
  };
  const goForward = () => {
    if (!canGoForward) return;
    const dir = history[historyIndex + 1];
    setHistoryIndex(historyIndex + 1);
    setDirNoHistory(dir);
  };

  return (
    <div className="mx-auto flex h-[85svh] w-[90%] max-w-[1400px] flex-col overflow-hidden rounded-[12px] border border-white/5 bg-[#1F2125] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)]">
      <div className="flex h-10 select-none items-center justify-between px-4 pt-2">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-[#A7ACB8]">
            <span className="text-sm">Terminal</span>
            <span className="text-sm font-semibold text-white">
              {currentDir.name}
            </span>
          </div>
          
        </div>
        <div className="flex items-center space-x-2 text-[#A7ACB8]">
          <button className="flex h-8 w-8 items-center justify-center rounded transition-colors hover:bg-white/10">
            <span className="text-[16px]">−</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded transition-colors hover:bg-white/10">
            <span className="text-[14px]">□</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded transition-colors hover:bg-red-500 hover:text-white">
            <span className="text-[16px]">×</span>
          </button>
        </div>
      </div>

      <div className="flex h-14 items-center space-x-4 border-b border-white/10 bg-[#1F2125] px-4">
        <div className="flex items-center space-x-2">
          <button
            className="rounded-md p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10 disabled:opacity-40"
            onClick={goBack}
            disabled={!canGoBack}
          >
            ←
          </button>
          <button
            className="rounded-md p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10 disabled:opacity-40"
            onClick={goForward}
            disabled={!canGoForward}
          >
            →
          </button>
          <button
            className="rounded-md p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10 disabled:opacity-40"
            onClick={goUp}
            disabled={!canGoUp}
          >
            ↑
          </button>
        </div>
        <div className="flex h-9 flex-1 items-center rounded-md border border-transparent bg-[#2A2D33] px-3 text-sm">
          <span className="mr-2 text-[#A7ACB8]">🏠</span>
          <div className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map((b, i) => (
              <span key={b.label} className="flex items-center">
                <button
                  className="rounded px-1 text-[#E8EAF0] transition-colors hover:bg-white/10"
                  onClick={() => openDir(b.dir)}
                >
                  {b.label}
                </button>
                {i < breadcrumbs.length - 1 && (
                  <span className="mx-1 text-[#A7ACB8]">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-1 text-[#A7ACB8]">
          <button className="flex items-center rounded p-1.5 transition-colors hover:bg-white/10">
            ⇅
          </button>
          <button className="flex items-center rounded p-1.5 transition-colors hover:bg-white/10">
            ≣
          </button>
          <button className="flex items-center rounded p-1.5 transition-colors hover:bg-white/10">
            +
          </button>
          <button className="flex items-center rounded p-1.5 transition-colors hover:bg-white/10">
            …
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="glass-sidebar w-[260px] overflow-y-auto border-r border-white/10 bg-[rgba(26,28,31,0.95)] px-2 py-4 text-sm">
          <div className="mb-4 px-4">
            <h2 className="font-semibold text-[#E8EAF0] opacity-90">
              File Explorer
            </h2>
          </div>
          <div className="mb-2">
            <div className="group mb-1 flex cursor-pointer items-center justify-between rounded px-4 py-1 hover:bg-white/10">
              <span className="text-xs font-semibold text-[#A7ACB8] group-hover:text-[#E8EAF0]">
                Files
              </span>
              <span className="text-xs text-[#A7ACB8] group-hover:text-[#E8EAF0]">
                ▾
              </span>
            </div>
            <div className="space-y-0.5">
              <button
                className={`group relative flex w-full items-center rounded px-4 py-2 transition-colors ${
                  currentDir === recentsDir
                    ? 'bg-white/10 text-[#E8EAF0]'
                    : 'text-[#A7ACB8] hover:bg-white/10 hover:text-[#E8EAF0]'
                }`}
                onClick={() => handleSidebarClick('recents')}
              >
                {currentDir === recentsDir && (
                  <div className="absolute left-1 h-4 w-1 rounded-full bg-[#60CDFF]" />
                )}
                <span
                  className={`mr-3 ${
                    currentDir === recentsDir ? 'text-[#60CDFF]' : ''
                  }`}
                >
                  ⏱
                </span>
                <span>Recents</span>
              </button>
              <div className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]">
                <span className="mr-3">🖥</span>
                <span>Desktop</span>
              </div>
              <div className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]">
                <span className="mr-3">⬇️</span>
                <span>Downloads</span>
              </div>
              <div className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]">
                <span className="mr-3">📄</span>
                <span>Documents</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="group mb-1 flex cursor-pointer items-center justify-between rounded px-4 py-1 hover:bg-white/10">
              <span className="text-xs font-semibold text-[#A7ACB8] group-hover:text-[#E8EAF0]">
                Devices
              </span>
              <span className="text-xs text-[#A7ACB8] group-hover:text-[#E8EAF0]">
                ▾
              </span>
            </div>
            <div className="space-y-0.5">
              <button
                className={`flex w-full items-center rounded px-4 py-2 transition-colors ${
                  currentDir === cRootDir
                    ? 'bg-white/10 text-[#E8EAF0]'
                    : 'text-[#A7ACB8] hover:bg-white/10 hover:text-[#E8EAF0]'
                }`}
                onClick={() => handleSidebarClick('c')}
              >
                <span className="mr-3">💻</span>
                <span>Local Disk (C:)</span>
              </button>
              <div
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">☁️</span>
                <span>One Drive</span>
              </div>
              <div
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">🗃</span>
                <span>Dropbox</span>
              </div>
            </div>
          </div>

          <div className="mt-4 px-4">
            <div className="flex items-center justify-between py-2 text-[#A7ACB8] transition-colors hover:text-white">
              <span className="text-sm font-medium">One Drive</span>
              <span className="text-sm">›</span>
            </div>
            <div className="flex items-center justify-between py-2 text-[#A7ACB8] transition-colors hover:text-white">
              <span className="text-sm font-medium">Dropbox</span>
              <span className="text-sm">›</span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-1 flex-col bg-[#222428]"
          onContextMenu={(e) => {
            e.preventDefault();
            setCtxMenu({ open: true, x: e.clientX, y: e.clientY, item: null });
          }}
        >
          <div className="grid grid-cols-12 border-b border-white/10 px-6 py-3 text-xs font-medium text-[#A7ACB8]">
            <div className="col-span-5 cursor-pointer hover:text-white">Name</div>
            <div className="col-span-2 cursor-pointer hover:text-white pl-4">Type</div>
            <div className="col-span-2 cursor-pointer hover:text-white pl-4">Size</div>
            <div className="col-span-3 cursor-pointer text-right hover:text-white">
              Date Added
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {currentDir.items.map((item) => (
              <button
                key={`${currentDir.name}-${item.name}`}
                className={`group grid w-full cursor-pointer grid-cols-12 items-center rounded px-4 py-3 text-sm transition-colors hover:bg-white/10 ${
                  selectedItem?.name === item.name ? 'bg-white/10' : ''
                }`}
                onClick={() => handleItemClick(item)}
                onDoubleClick={() => openItem(item)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedItem(item);
                  setCtxMenu({ open: true, x: e.clientX, y: e.clientY, item });
                }}
              >
                <div className="col-span-5 flex items-center space-x-3 truncate pr-4 font-medium text-[#E8EAF0]">
                  {item.type === 'folder' ? (
                    <svg className="h-6 w-6 flex-shrink-0 fill-[#FBBF24]" viewBox="0 0 24 24">
                      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                    </svg>
                  ) : item.type === 'image' ? (
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-gradient-to-br from-blue-400 to-blue-600">
                      <span className="text-[14px] text-white">🖼</span>
                    </div>
                  ) : item.type === 'pdf' ? (
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-gradient-to-br from-red-500 to-red-700">
                      <span className="text-[14px] text-white">📄</span>
                    </div>
                  ) : (
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-white/10">
                      <span className="text-[14px]">�</span>
                    </div>
                  )}
                  <span className="truncate">{item.name}</span>
                </div>
                <div className="col-span-2 text-[#A7ACB8]">
                  {item.type === 'folder'
                    ? 'Folder'
                    : item.type === 'image'
                    ? 'JPEG'
                    : item.type === 'pdf'
                    ? 'PDF'
                    : 'File'}
                </div>
                <div className="col-span-2 text-[#A7ACB8]">
                  {item.type === 'folder'
                    ? (() => {
                        const d = resolveDirForItem(currentDir, item);
                        const b = d ? getDirSizeBytes(d) : 0;
                        return b ? formatSize(b) : '-';
                      })()
                    : sizeCache[`${currentDir.name}-${item.name}`] ?? item.size ?? '-'}
                </div>
                <div className="col-span-3 text-right text-[#A7ACB8]">
                  {item.type === 'folder'
                    ? (() => {
                        const d = resolveDirForItem(currentDir, item);
                        return d ? getDirLatestDateString(d) : item.date ?? '-';
                      })()
                    : item.date ?? '-'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedItem?.type === 'image' && (
          <div className="w-[320px] flex-shrink-0 border-l border-white/10 bg-[#1A1C1F]">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <span className="text-sm font-semibold text-[#E8EAF0]">Preview</span>
              <div className="flex space-x-2">
                <button
                  className="rounded p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    if (selectedItem?.type === 'image') setPopupOpen(true);
                  }}
                >
                  ↗
                </button>
                <button
                  className="rounded p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setSelectedItem(null)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto p-6">
              <div
                className="relative mb-6 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#121212] shadow-lg cursor-zoom-in"
                onClick={() => {
                  if (selectedItem?.type === 'image') setPopupOpen(true);
                }}
              >
                <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                {selectedItem?.imageSrc && (
                  <img src={selectedItem.imageSrc} alt="Preview" className="h-full w-full object-cover" />
                )}
              </div>
              <div className="mb-6 text-center">
                <h3 className="mb-1 text-lg font-semibold text-[#E8EAF0]">
                  {selectedItem?.name}
                </h3>
              </div>
              <div className="mb-6 flex items-center justify-center gap-3">
                {selectedItem?.linkedinUrl && (
                  <a
                    href={selectedItem.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded bg-[#0A66C2] py-2 px-4 text-white transition-colors hover:bg-[#0957a5]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-label="LinkedIn">
                      <path d="M22.225 0H1.771C.792 0 0 .774 0 1.728v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.225 0zM7.193 20.452H3.48V8.667h3.713v11.785zM5.337 7.433c-1.195 0-2.163-.971-2.163-2.169 0-1.198.968-2.169 2.163-2.169 1.196 0 2.164.971 2.164 2.169 0 1.198-.968 2.169-2.164 2.169zm15.11 13.019h-3.711v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.939v5.667H9.037V8.667h3.561v1.613h.051c.497-.943 1.709-1.939 3.515-1.939 3.757 0 4.451 2.474 4.451 5.689v6.422z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}
                {selectedItem?.email && (
                  <a
                    href={`mailto:${selectedItem.email}`}
                    className="flex items-center gap-2 rounded border border-white/10 bg-white/5 py-2 px-4 text-[#E8EAF0] transition-colors hover:bg-white/10"
                  >
                    <span className="material-icons-outlined text-[#E8EAF0] text-[20px]" aria-hidden="true">mail</span>
                    <span>Email</span>
                  </a>
                )}
              </div>
              
            </div>
          </div>
        )}
        <AnimatePresence>
          {popupOpen && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4"
              onClick={() => setPopupOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                className="h-[80vh] w-[85vw] max-w-[1200px] rounded-lg bg-[#0b0b0b] shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === 'image' && selectedItem.imageSrc ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={selectedItem.imageSrc}
                      alt={selectedItem.name}
                      fill
                      sizes="(min-width:800px) 80vw, 90vw"
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                  </div>
                ) : selectedItem.type === 'pdf' && selectedItem.pdfSrc ? (
                  <iframe
                    src={selectedItem.pdfSrc}
                    className="h-full w-full"
                    title={selectedItem.name}
                  />
                ) : null}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {ctxMenu.open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998]"
              onClick={() => setCtxMenu((m) => ({ ...m, open: false }))}
              onContextMenu={(e) => e.preventDefault()}
            >
              <div
                className="absolute min-w-[220px] rounded-lg border border-white/10 bg-[#1F2125] p-1 shadow-2xl"
                style={{ left: ctxMenu.x, top: ctxMenu.y }}
              >
                {ctxMenu.item && (
                  <button
                    className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10"
                    onClick={() => {
                      const item = ctxMenu.item;
                      if (!item) return;
                      openItem(item);
                      setCtxMenu((m) => ({ ...m, open: false, item: null }));
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-icons-outlined text-[18px]">open_in_new</span>
                      Open
                    </span>
                  </button>
                )}
                <button className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">visibility</span>
                    View
                  </span>
                  <span className="text-[#A7ACB8]">›</span>
                </button>
                <button className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">sort</span>
                    Sort by
                  </span>
                  <span className="text-[#A7ACB8]">›</span>
                </button>
                <button className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">group</span>
                    Group by
                  </span>
                  <span className="text-[#A7ACB8]">›</span>
                </button>
                <button className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">undo</span>
                    Undo Copy
                  </span>
                  <span className="text-[#A7ACB8] text-xs">Ctrl+Z</span>
                </button>
                <button className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">add</span>
                    New
                  </span>
                  <span className="text-[#A7ACB8]">›</span>
                </button>
                <button className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">info</span>
                    Properties
                  </span>
                  <span className="text-[#A7ACB8] text-xs">Alt+Enter</span>
                </button>
                <button className="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">terminal</span>
                    Open in Terminal
                  </span>
                </button>
                <button className="mt-1 flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-[#E8EAF0] hover:bg-white/10">
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-[18px]">more_horiz</span>
                    Show more options
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
