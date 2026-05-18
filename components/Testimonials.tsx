"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { tx } = useLang();

  return (
    <section className="py-28 bg-[#6B4C1E]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">{tx.testimonials.eyebrow}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
            {tx.testimonials.heading} <span className="italic">{tx.testimonials.headingItalic}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tx.testimonials.items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-white/10 rounded-[2rem] p-8 flex flex-col gap-6 backdrop-blur-sm hover:bg-white/15 transition-colors">
              <span className="font-serif text-6xl font-bold text-[#F9C0C0] leading-none">&ldquo;</span>
              <p className="text-white/80 font-light leading-relaxed text-sm flex-1">{t.quote}</p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white font-medium tracking-wide">{t.name}</p>
                <p className="text-xs tracking-widest uppercase text-white/40 mt-1">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
