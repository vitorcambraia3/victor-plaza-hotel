"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, contactInfo, HOTEL_NAME } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-paper/85 backdrop-blur-md border-b border-line",
        )}
      >
        <nav className="container-x flex items-center justify-between h-14 md:h-16">
          <Link
            href="/"
            className={cn(
              "font-display text-lg font-semibold tracking-tight transition-colors",
              transparent ? "text-paper" : "text-ink",
            )}
          >
            {HOTEL_NAME}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm link-underline transition-colors",
                  transparent
                    ? "text-paper/90 hover:text-paper"
                    : "text-ink hover:text-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:inline-flex h-9 items-center rounded-full px-5 text-[13px] font-medium transition-all duration-300",
                transparent
                  ? "bg-paper text-ink hover:bg-paper/90"
                  : "bg-ink text-paper hover:bg-ink/90",
              )}
            >
              Reservar pelo WhatsApp
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={cn(
                "md:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                transparent ? "text-paper" : "text-ink",
              )}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 bg-paper flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between h-14 px-6">
              <span className="font-display text-lg font-semibold text-ink">
                {HOTEL_NAME}
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 font-display text-2xl font-semibold text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.05 }}
                className="mt-4"
              >
                <Link
                  href="/contato"
                  onClick={closeMenu}
                  className="block py-3 font-display text-2xl font-semibold text-ink"
                >
                  Contato
                </Link>
              </motion.div>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-ink text-paper text-sm font-medium"
              >
                Reservar pelo WhatsApp
              </a>
              <div className="mt-8 space-y-1 text-sm text-muted">
                <p>{contactInfo.address}</p>
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.instagramHandle}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
