'use client';

export default function WindowsExplorer() {
  return (
    <div className="mx-auto flex h-[85svh] w-[90%] max-w-[1400px] flex-col overflow-hidden rounded-[12px] border border-white/5 bg-[#1F2125] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)]">
      <div className="flex h-10 select-none items-center justify-between px-4 pt-2">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-[#A7ACB8]">
            <span className="text-sm">schedule</span>
            <span className="text-sm font-semibold text-white">Recents</span>
          </div>
          <div className="flex items-center space-x-5 text-sm">
            <button className="text-[#A7ACB8] transition-colors hover:text-white">
              File
            </button>
            <button className="text-[#A7ACB8] transition-colors hover:text-white">
              Home
            </button>
            <button className="text-[#A7ACB8] transition-colors hover:text-white">
              Share
            </button>
            <button className="text-[#A7ACB8] transition-colors hover:text-white">
              View
            </button>
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
          <button className="rounded-md p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10">
            ←
          </button>
          <button className="rounded-md p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10">
            →
          </button>
          <button className="rounded-md p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10">
            ↑
          </button>
        </div>
        <div className="flex h-9 flex-1 items-center rounded-md border border-transparent bg-[#2A2D33] px-3 text-sm transition-colors focus-within:border-[#60CDFF] focus-within:bg-black">
          <span className="mr-2 text-lg text-[#A7ACB8]">🔎</span>
          <input
            type="text"
            placeholder="Type file path or search"
            className="w-full bg-transparent p-0 text-sm text-[#E8EAF0] outline-none placeholder:text-[#A7ACB8]"
          />
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
              <a
                href="#"
                className="group relative flex items-center rounded bg-white/10 px-4 py-2 text-[#E8EAF0]"
              >
                <div className="absolute left-1 h-4 w-1 rounded-full bg-[#60CDFF]" />
                <span className="mr-3 text-[#60CDFF]">⏱</span>
                <span>Recents</span>
              </a>
              <a
                href="#"
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">🖥</span>
                <span>Desktop</span>
              </a>
              <a
                href="#"
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">⬇️</span>
                <span>Downloads</span>
              </a>
              <a
                href="#"
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">📄</span>
                <span>Documents</span>
              </a>
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
              <a
                href="#"
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">💻</span>
                <span>Local Disk (C:)</span>
              </a>
              <a
                href="#"
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">☁️</span>
                <span>One Drive</span>
              </a>
              <a
                href="#"
                className="flex items-center rounded px-4 py-2 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-[#E8EAF0]"
              >
                <span className="mr-3">🗃</span>
                <span>Dropbox</span>
              </a>
            </div>
          </div>

          <div className="mt-4 px-4">
            <div className="flex cursor-pointer items-center justify-between py-2 text-[#A7ACB8] transition-colors hover:text-white">
              <span className="text-sm font-medium">One Drive</span>
              <span className="text-sm">›</span>
            </div>
            <div className="flex cursor-pointer items-center justify-between py-2 text-[#A7ACB8] transition-colors hover:text-white">
              <span className="text-sm font-medium">Dropbox</span>
              <span className="text-sm">›</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-[#222428]">
          <div className="grid grid-cols-12 border-b border-white/10 px-6 py-3 text-xs font-medium text-[#A7ACB8]">
            <div className="col-span-5 cursor-pointer hover:text-white">Name</div>
            <div className="col-span-2 cursor-pointer hover:text-white">Type</div>
            <div className="col-span-2 cursor-pointer hover:text-white">Size</div>
            <div className="col-span-3 cursor-pointer text-right hover:text-white">
              Date Added
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            <div className="group grid cursor-default grid-cols-12 items-center rounded px-4 py-3 text-sm transition-colors hover:bg-white/10">
              <div className="col-span-5 flex items-center space-x-3 truncate pr-4 font-medium text-[#E8EAF0]">
                <svg
                  className="h-6 w-6 flex-shrink-0 fill-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                </svg>
                <span className="truncate">Holographic Textures Free Download</span>
              </div>
              <div className="col-span-2 text-[#A7ACB8]">Folder</div>
              <div className="col-span-2 text-[#A7ACB8]">458MB</div>
              <div className="col-span-3 text-right text-[#A7ACB8]">
                Feb 28, 2021 at 12:40pm
              </div>
            </div>

            <div className="group grid cursor-default grid-cols-12 items-center rounded px-4 py-3 text-sm transition-colors hover:bg-white/10">
              <div className="col-span-5 flex items-center space-x-3 truncate pr-4 font-medium text-[#E8EAF0]">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-gradient-to-br from-blue-400 to-blue-600">
                  <span className="text-[14px] text-white">🖼</span>
                </div>
                <span className="truncate">894300.jpg</span>
              </div>
              <div className="col-span-2 text-[#A7ACB8]">JPEG</div>
              <div className="col-span-2 text-[#A7ACB8]">2.1MB</div>
              <div className="col-span-3 text-right text-[#A7ACB8]">
                Feb 16, 2021 at 5:23pm
              </div>
            </div>
          </div>
        </div>

        <div className="w-[320px] flex-shrink-0 border-l border-white/10 bg-[#1A1C1F]">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <span className="text-sm font-semibold text-[#E8EAF0]">Preview</span>
            <div className="flex space-x-2">
              <button className="rounded p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-white">
                ↗
              </button>
              <button className="rounded p-1.5 text-[#A7ACB8] transition-colors hover:bg-white/10 hover:text-white">
                ×
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto p-6">
            <div className="relative mb-6 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#121212] shadow-lg">
              <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhqxux5wqBos6EPWVydH90JIjnavhCvZQO0A7-uwz0NWpYF9-6h2OOhHo6LXq07sD49Ht9f4fSpjdBlGQA2EzlHlrSnMaHswGyc9UFkl9Z27bj2HikCOTp9R0JJrDRYEQaEDmHIzXfpHbFYOxKhQkguYFARtkE0aja_tA5OGwORzToyGcGQbJrQNYSCcV24zY2YfMcr1uiDVuIOnWCZVhVS01Mkau9X-7ctPUsGkRTX8Wq9ZqCIZxoFEsMbUYp0IpQrXYgUNuJhf8"
                alt="Preview"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mb-6 text-center">
              <h3 className="mb-1 text-lg font-semibold text-[#E8EAF0]">
                894300.jpg
              </h3>
              <p className="text-xs text-[#A7ACB8]">JPEG Image • 2.1 MB</p>
            </div>
            <div className="mb-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 rounded bg-[#60CDFF] py-2 px-4 text-black transition-colors hover:bg-blue-400">
                  <span>↗</span>
                  <span>Open</span>
                </button>
                <button className="flex items-center justify-center space-x-2 rounded border border-white/10 bg-white/5 py-2 px-4 text-[#E8EAF0] transition-colors hover:bg-white/10">
                  <span>⤴</span>
                  <span>Share</span>
                </button>
              </div>
            </div>
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div>
                <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-[#A7ACB8]">
                  Information
                </h4>
                <div className="grid grid-cols-[80px_1fr] gap-y-2 text-xs">
                  <div className="text-[#A7ACB8]">Dimensions</div>
                  <div className="text-[#E8EAF0]">3840 × 2160</div>
                  <div className="text-[#A7ACB8]">Date created</div>
                  <div className="text-[#E8EAF0]">Feb 16, 2021</div>
                  <div className="text-[#A7ACB8]">Modified</div>
                  <div className="text-[#E8EAF0]">Feb 16, 2021</div>
                  <div className="text-[#A7ACB8]">Path</div>
                  <div
                    className="truncate text-[#E8EAF0]"
                    title="C:\\Users\\Admin\\Downloads\\894300.jpg"
                  >
                    C:\Users\Admin\Downloads\...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

