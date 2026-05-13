"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, tx } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: tx.nav.about, href: "#about" },
    { label: tx.nav.classes, href: "#classes" },
    { label: tx.nav.pricing, href: "#pricing" },
    { label: tx.nav.contact, href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0 leading-none">
          <span className="font-serif text-4xl font-bold text-[#3D2010]" style={{ letterSpacing: "-1px" }}>F</span>
          <span className="font-serif text-4xl italic text-[#F9C0C0]" style={{ marginLeft: "-4px" }}>w</span>
          <span className="text-[8px] tracking-[0.25em] uppercase text-[#6B4C1E]/60 self-end mb-1 ml-1">Pilates Studio</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm tracking-widest text-[#6B4C1E]/70 hover:text-[#6B4C1E] transition-colors uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Language toggle */}
          <li>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1 text-xs tracking-widest uppercase text-[#6B4C1E]/50 hover:text-[#6B4C1E] transition-colors border border-[#6B4C1E]/20 rounded-full px-3 py-1.5 hover:border-[#6B4C1E]/50"
            >
              <span className={lang === "en" ? "text-[#6B4C1E] font-semibold" : ""}>EN</span>
              <span className="text-[#6B4C1E]/30">/</span>
              <span className={lang === "es" ? "text-[#6B4C1E] font-semibold" : ""}>ES</span>
            </button>
          </li>

          <li>
            <a
              href="#booking"
              className="text-sm tracking-widest uppercase px-5 py-2.5 bg-[#F9C0C0] text-[#6B4C1E] rounded-full hover:bg-[#F0A0A0] transition-colors"
            >
              {tx.nav.book}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-xs tracking-widest uppercase text-[#6B4C1E]/60 border border-[#6B4C1E]/20 rounded-full px-3 py-1.5"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            className="text-[#6B4C1E]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="21" y2="16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#EBEBEB] px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-widest uppercase text-[#6B4C1E]/70 hover:text-[#6B4C1E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block text-sm tracking-widest uppercase px-5 py-2.5 bg-[#F9C0C0] text-[#6B4C1E] rounded-full"
                >
                  {tx.nav.book}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
