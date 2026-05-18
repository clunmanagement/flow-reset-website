"use client";

import { motion } from "motion/react";
import { useLang } from "@/contexts/LanguageContext";

export default function Hero() {
  const { tx } = useLang();

  const words = [tx.hero.headline1, tx.hero.headline2, tx.hero.headline3];

  return (
    <section className="relative min-h-screen bg-[#F5F0EB] flex items-center justify-center overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="animate-blob absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#F9C0C0]/45 blur-[130px] pointer-events-none" />
      <div className="animate-blob-delay absolute bottom-[-10%] left-[-8%] w-[480px] h-[480px] rounded-full bg-[#F9C0C0]/28 blur-[110px] pointer-events-none" />
      <div className="animate-blob absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#F5F0EB]/60 blur-[80px] pointer-events-none" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xs tracking-[0.35em] uppercase text-[#6B4C1E]/50 mb-8"
        >
          {tx.hero.eyebrow}
        </motion.p>

        {/* Word-by-word headline reveal */}
        <h1 className="font-serif text-[clamp(3rem,12vw,8rem)] font-bold text-[#6B4C1E] leading-[1.05] tracking-tight mb-8">
          {words.map((word, i) => (
            <motion.span
              key={word}
              style={{ display: "block" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.18, ease: "easeOut" }}
              className={i === 1 ? "italic" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="text-base md:text-lg font-light text-[#6B4C1E]/65 max-w-md mx-auto leading-relaxed mb-12"
        >
          {tx.hero.sub}
        </motion.p>

        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.88, ease: "easeOut" }}
          className="inline-block px-10 py-4 bg-[#6B4C1E] text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#8B6A3A] hover:scale-105 transition duration-150 ease-out shadow-lg shadow-[#6B4C1E]/20"
        >
          {tx.hero.cta1}
        </motion.a>
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
