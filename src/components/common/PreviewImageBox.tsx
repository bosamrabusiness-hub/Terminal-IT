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
        className={`group relative cursor-pointer ${containerClassName ?? ''}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`rounded-lg object-contain filter-custom-drop-shadow ${className ?? ''}`}
        />
        <span className="pointer-events-none absolute inset-0 hidden items-center justify-center font-bold text-[12px] md:flex">
          <span className="rounded-sm bg-[#bebeb0] p-1">VIEW</span>
        </span>
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 md:group-hover:opacity-100" />
      </div>
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  className="h-[70vh] w-[80vw] max-w-[1200px] rounded-lg bg-white shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width:800px) 80vw, 90vw"
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
