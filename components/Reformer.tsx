"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const icons = [
  // Dumbbell / strength
  <svg key="strength" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5h11M6.5 17.5h11M4 9.5H2v5h2M20 9.5h2v5h-2M4 12h16"/>
    <rect x="4" y="9.5" width="2.5" height="5" rx="1"/>
    <rect x="17.5" y="9.5" width="2.5" height="5" rx="1"/>
  </svg>,
  // Leaf / low impact
  <svg key="leaf" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21c1-1 2-2 3-2 4 0 6-3 9-5 3-2 4-5 4-8 0 0-3 1-4.71 2z"/>
    <path d="M3.82 19.34C5.12 17 7 14 9 12"/>
  </svg>,
  // Body alignment
  <svg key="posture" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M8 6l4-4 4 4"/>
    <path d="M8 12H4l2 3-2 3h4"/>
    <path d="M16 12h4l-2 3 2 3h-4"/>
  </svg>,
  // Mind
  <svg key="mind" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 002 2h4a2 2 0 002-2v-2.26A7 7 0 0012 2z"/>
    <line x1="9" y1="21" x2="15" y2="21"/>
  </svg>,
];

export default function Reformer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { tx } = useLang();

  return (
    <section className="py-28 bg-[#F5F0EB]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B4C1E]/50 mb-4">{tx.reformer.eyebrow}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#6B4C1E] mb-6">
            {tx.reformer.heading} <span className="italic">{tx.reformer.headingItalic}</span>
          </h2>
          <p className="text-[#6B4C1E]/65 font-light leading-relaxed max-w-2xl mx-auto text-base">
            {tx.reformer.sub}
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tx.reformer.benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white rounded-[2rem] p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F9C0C0]/50 flex items-center justify-center">
                {icons[i]}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#6B4C1E]">{benefit.title}</h3>
              <p className="text-sm font-light text-[#6B4C1E]/65 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#6B4C1E] rounded-[2rem] px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="font-serif text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            Ready to experience the <span className="italic text-[#F9C0C0]">reformer?</span>
          </p>
          <a
            href="#booking"
            className="whitespace-nowrap px-8 py-4 bg-[#F9C0C0] text-[#6B4C1E] text-sm tracking-widest uppercase rounded-full hover:bg-[#F0A0A0] transition duration-150 ease-out hover:scale-105 font-medium"
          >
            {tx.reformer.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
