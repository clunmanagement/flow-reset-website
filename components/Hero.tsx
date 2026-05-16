"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export default function Hero() {
  const { tx } = useLang();

  return (
    <section className="relative min-h-screen bg-[#F5F0EB] flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F9C0C0]/40 blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F9C0C0]/25 blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.35em] uppercase text-[#6B4C1E]/50 mb-8"
        >
          {tx.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-7xl md:text-9xl font-bold text-[#6B4C1E] leading-[1.05] tracking-tight mb-8"
        >
          {tx.hero.headline1}
          <br />
          <span className="italic">{tx.hero.headline2}</span>
          <br />
          {tx.hero.headline3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg font-light text-[#6B4C1E]/65 max-w-md mx-auto leading-relaxed mb-12"
        >
          {tx.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#booking" className="px-10 py-4 bg-[#6B4C1E] text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#8B6A3A] hover:scale-105 transition duration-150 ease-out shadow-lg shadow-[#6B4C1E]/20">
            {tx.hero.cta1}
          </a>
          <a href="#classes" className="px-10 py-4 border-2 border-[#6B4C1E]/25 text-[#6B4C1E] text-sm tracking-widest uppercase rounded-full hover:border-[#6B4C1E] hover:scale-105 transition duration-150 ease-out">
            {tx.hero.cta2}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-[#6B4C1E]/30">{tx.hero.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-gradient-to-b from-[#6B4C1E]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
