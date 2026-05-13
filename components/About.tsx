"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { tx } = useLang();

  const stats = [
    { value: "8", label: tx.about.stat1 },
    { value: "15", label: tx.about.stat2 },
    { value: "5★", label: tx.about.stat3 },
  ];

  return (
    <section id="about" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative bg-gradient-to-br from-[#FAF7F4] via-[#F5EEE8] to-[#F2D9D9]">
            {/* Ambient light blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-[#F9C0C0]/50 blur-[80px]" />
            <div className="absolute bottom-[10%] left-[-5%] w-48 h-48 rounded-full bg-[#E8C9A0]/40 blur-[60px]" />
            {/* Reformer machine line art */}
            <svg
              viewBox="0 0 320 400"
              className="absolute inset-0 w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shadow under frame */}
              <ellipse cx="160" cy="295" rx="130" ry="10" fill="#6B4C1E" opacity="0.06" />

              {/* Frame legs */}
              <rect x="52" y="265" width="12" height="28" rx="4" fill="#6B4C1E" opacity="0.18" />
              <rect x="256" y="265" width="12" height="28" rx="4" fill="#6B4C1E" opacity="0.18" />
              <rect x="88" y="268" width="10" height="24" rx="4" fill="#6B4C1E" opacity="0.14" />
              <rect x="222" y="268" width="10" height="24" rx="4" fill="#6B4C1E" opacity="0.14" />

              {/* Main frame rails */}
              <rect x="48" y="218" width="224" height="10" rx="5" fill="#6B4C1E" opacity="0.22" />
              <rect x="48" y="258" width="224" height="10" rx="5" fill="#6B4C1E" opacity="0.22" />

              {/* Frame end caps */}
              <rect x="48" y="216" width="14" height="54" rx="6" fill="#6B4C1E" opacity="0.20" />
              <rect x="258" y="216" width="14" height="54" rx="6" fill="#6B4C1E" opacity="0.20" />

              {/* Carriage (sliding platform) */}
              <rect x="82" y="212" width="88" height="62" rx="10" fill="#6B4C1E" opacity="0.12" />
              <rect x="86" y="216" width="80" height="54" rx="8" fill="#FAF7F4" opacity="0.70" />
              <rect x="90" y="220" width="72" height="46" rx="6" fill="#6B4C1E" opacity="0.06" />

              {/* Carriage headrest pad */}
              <rect x="90" y="213" width="48" height="14" rx="5" fill="#F9C0C0" opacity="0.55" />

              {/* Springs (4 spring lines) */}
              {[0, 10, 20, 30].map((offset) => (
                <path
                  key={offset}
                  d={`M170 ${228 + offset} Q185 ${224 + offset} 192 ${228 + offset} Q199 ${232 + offset} 206 ${228 + offset} Q213 ${224 + offset} 220 ${228 + offset} Q227 ${232 + offset} 234 ${228 + offset} Q241 ${224 + offset} 248 ${228 + offset} Q255 ${232 + offset} 260 ${228 + offset}`}
                  stroke="#6B4C1E"
                  strokeWidth="1.5"
                  opacity="0.20"
                />
              ))}

              {/* Footbar */}
              <rect x="255" y="208" width="8" height="68" rx="4" fill="#6B4C1E" opacity="0.28" />
              <rect x="248" y="208" width="22" height="8" rx="4" fill="#6B4C1E" opacity="0.22" />
              <rect x="248" y="268" width="22" height="8" rx="4" fill="#6B4C1E" opacity="0.22" />

              {/* Rope/strap handles */}
              <path d="M62 222 Q44 215 38 204" stroke="#6B4C1E" strokeWidth="2" opacity="0.18" strokeLinecap="round" />
              <path d="M62 266 Q44 273 38 284" stroke="#6B4C1E" strokeWidth="2" opacity="0.18" strokeLinecap="round" />
              <circle cx="38" cy="203" r="5" fill="#6B4C1E" opacity="0.18" />
              <circle cx="38" cy="285" r="5" fill="#6B4C1E" opacity="0.18" />

              {/* Decorative botanical accent — top right */}
              <path d="M240 80 Q252 60 265 75 Q252 70 245 88 Q260 68 272 80" stroke="#6B4C1E" strokeWidth="1.2" opacity="0.14" strokeLinecap="round" fill="none" />
              <path d="M255 90 Q268 72 278 84" stroke="#6B4C1E" strokeWidth="1" opacity="0.12" strokeLinecap="round" fill="none" />
              <line x1="255" y1="92" x2="255" y2="130" stroke="#6B4C1E" strokeWidth="1.2" opacity="0.12" strokeLinecap="round" />

              {/* Decorative botanical accent — bottom left */}
              <path d="M68 340 Q55 320 70 312 Q62 325 74 333 Q58 314 74 305" stroke="#6B4C1E" strokeWidth="1.2" opacity="0.12" strokeLinecap="round" fill="none" />
              <line x1="68" y1="342" x2="68" y2="360" stroke="#6B4C1E" strokeWidth="1.2" opacity="0.12" strokeLinecap="round" />

              {/* Subtle grid / floor lines */}
              <line x1="48" y1="295" x2="272" y2="295" stroke="#6B4C1E" strokeWidth="0.8" opacity="0.08" />
              <line x1="48" y1="320" x2="272" y2="320" stroke="#6B4C1E" strokeWidth="0.8" opacity="0.06" />
              <line x1="48" y1="345" x2="272" y2="345" stroke="#6B4C1E" strokeWidth="0.8" opacity="0.04" />
            </svg>

            {/* Brand label badge */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#6B4C1E]/40 font-medium">Flow Reset</span>
              <div className="w-8 h-px bg-[#6B4C1E]/20" />
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#6B4C1E]/30">Pilates Studio</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-52 h-52 rounded-[2rem] bg-[#F9C0C0]/30 -z-10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B4C1E]/50 mb-4">{tx.about.eyebrow}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#6B4C1E] leading-tight mb-6">
            {tx.about.heading} <span className="italic">{tx.about.headingItalic}</span>
          </h2>
          <p className="text-[#6B4C1E]/65 font-light leading-relaxed mb-5 text-base">{tx.about.p1}</p>
          <p className="text-[#6B4C1E]/65 font-light leading-relaxed mb-12 text-base">{tx.about.p2}</p>
          <div className="flex gap-10">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}>
                <div className="font-serif text-4xl font-bold text-[#6B4C1E]">{stat.value}</div>
                <div className="text-xs tracking-widest uppercase text-[#6B4C1E]/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
