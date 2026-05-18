"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { tx } = useLang();

  return (
    <section id="pricing" className="py-28 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B4C1E]/50 mb-4">{tx.pricing.eyebrow}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#6B4C1E]">
            {tx.pricing.heading} <span className="italic">{tx.pricing.headingItalic}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {tx.pricing.plans.map((plan, i) => {
            const highlight = i === 1;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`rounded-[2rem] p-8 flex flex-col gap-6 ${highlight ? "bg-[#6B4C1E] text-white scale-105 shadow-2xl shadow-[#6B4C1E]/30" : "bg-[#F5F0EB] text-[#6B4C1E]"}`}
              >
                {highlight && (
                  <span className="text-xs tracking-widest uppercase bg-[#F9C0C0] text-[#6B4C1E] px-4 py-1.5 rounded-full w-fit font-medium">
                    {tx.pricing.popular}
                  </span>
                )}
                <div>
                  <p className={`text-xs tracking-widest uppercase mb-2 ${highlight ? "text-white/60" : "text-[#6B4C1E]/50"}`}>{plan.name}</p>
                  <div className="flex items-end gap-1">
                    <span className="font-serif text-5xl font-bold">{plan.price}</span>
                    <span className={`text-sm mb-2 ${highlight ? "text-white/60" : "text-[#6B4C1E]/50"}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm font-light mt-2 ${highlight ? "text-white/70" : "text-[#6B4C1E]/70"}`}>{plan.description}</p>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-light">
                      <span className="w-5 h-5 rounded-full bg-[#F9C0C0] flex items-center justify-center flex-shrink-0">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#6B4C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className={highlight ? "text-white/80" : "text-[#6B4C1E]/70"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className={`text-center text-sm tracking-widest uppercase py-3.5 rounded-full transition duration-150 ease-out hover:scale-105 font-medium ${highlight ? "bg-[#F9C0C0] text-[#6B4C1E] hover:bg-[#F0A0A0]" : "bg-[#6B4C1E] text-white hover:bg-[#8B6A3A]"}`}>
                  {tx.pricing.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
