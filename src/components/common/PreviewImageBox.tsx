'use client';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function PreviewImageBox({
  src,
  alt,
  sizes,
  className,
  containerClassName,
}: {
  src: StaticImageData | string;
  alt: string;
  sizes?: string;
  className?: string;
  containerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }, [open]);

  return (
    <>
      <div
        className={`group relative cursor-pointer overflow-hidden ${containerClassName ?? ''}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] ${className ?? ''}`}
        />
        {/* Hover overlay */}
        <span className="pointer-events-none absolute inset-0 bg-hero-dark/0 transition-all duration-300 group-hover:bg-hero-dark/40 group-hover:backdrop-blur-[2px]" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-details-red px-3 py-1.5 font-jetbrains-mono text-[11px] font-medium tracking-wider text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            VIEW
          </span>
        </span>
      </div>
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative h-[75vh] w-[85vw] max-w-[1200px] overflow-hidden rounded-xl border border-white/10 bg-hero-dark shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Lightbox header */}
                  <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between border-b border-white/10 bg-hero-dark/90 backdrop-blur-sm px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="font-jetbrains-mono text-[10px] text-white/30 tracking-wider">{alt}</span>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-white/40 hover:text-white transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="relative h-full w-full pt-[38px]">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width:800px) 85vw, 90vw"
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
