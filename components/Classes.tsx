"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const colors = ["#FDE8E8", "#F5F0EB"];

export default function Classes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { tx } = useLang();

  return (
    <section id="classes" className="py-28 bg-[#F5F0EB]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B4C1E]/50 mb-4">{tx.classes.eyebrow}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#6B4C1E]">
            {tx.classes.heading} <span className="italic">{tx.classes.headingItalic}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tx.classes.items.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="rounded-[2rem] p-10 flex flex-col gap-5 cursor-default"
              style={{ backgroundColor: colors[i] }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest uppercase text-[#6B4C1E]/50 bg-white/60 px-3 py-1 rounded-full">{cls.level}</span>
                <span className="text-xs text-[#6B4C1E]/50">{cls.duration}</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#6B4C1E]">{cls.name}</h3>
              <p className="text-sm font-light text-[#6B4C1E]/70 leading-relaxed flex-1">{cls.description}</p>
              <a href="#booking" className="text-xs tracking-widest uppercase text-[#6B4C1E] border-b-2 border-[#6B4C1E]/30 pb-0.5 hover:border-[#6B4C1E] transition-colors w-fit">
                {tx.classes.reserve}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
