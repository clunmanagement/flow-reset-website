"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { tx } = useLang();

  return (
    <section id="booking" className="py-28 bg-[#F5F0EB]" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B4C1E]/50 mb-4">{tx.booking.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6B4C1E]">
            {tx.booking.heading} <span className="italic">{tx.booking.headingItalic}</span>
          </h2>
          <p className="text-[#6B4C1E]/60 font-light mt-4">{tx.booking.sub}</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-5 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#6B4C1E]/50">{tx.booking.firstName}</label>
              <input type="text" className="px-4 py-3 rounded-2xl bg-[#F5F0EB] text-[#6B4C1E] placeholder:text-[#6B4C1E]/30 text-sm font-light outline-none focus:ring-2 focus:ring-[#F9C0C0] transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#6B4C1E]/50">{tx.booking.lastName}</label>
              <input type="text" className="px-4 py-3 rounded-2xl bg-[#F5F0EB] text-[#6B4C1E] placeholder:text-[#6B4C1E]/30 text-sm font-light outline-none focus:ring-2 focus:ring-[#F9C0C0] transition-all" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#6B4C1E]/50">{tx.booking.email}</label>
            <input type="email" placeholder="flowxreset@gmail.com" className="px-4 py-3 rounded-2xl bg-[#F5F0EB] text-[#6B4C1E] placeholder:text-[#6B4C1E]/30 text-sm font-light outline-none focus:ring-2 focus:ring-[#F9C0C0] transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#6B4C1E]/50">{tx.booking.phone}</label>
            <input type="tel" placeholder="+1 (786) 614-3749" className="px-4 py-3 rounded-2xl bg-[#F5F0EB] text-[#6B4C1E] placeholder:text-[#6B4C1E]/30 text-sm font-light outline-none focus:ring-2 focus:ring-[#F9C0C0] transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#6B4C1E]/50">{tx.booking.interest}</label>
            <select className="px-4 py-3 rounded-2xl bg-[#F5F0EB] text-[#6B4C1E] text-sm font-light outline-none focus:ring-2 focus:ring-[#F9C0C0] transition-all appearance-none">
              {tx.booking.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#6B4C1E]/50">{tx.booking.message}</label>
            <textarea rows={3} placeholder={tx.booking.messagePlaceholder} className="px-4 py-3 rounded-2xl bg-[#F5F0EB] text-[#6B4C1E] placeholder:text-[#6B4C1E]/30 text-sm font-light outline-none focus:ring-2 focus:ring-[#F9C0C0] transition-all resize-none" />
          </div>
          <button type="submit" className="w-full py-4 bg-[#6B4C1E] text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#8B6A3A] transition duration-150 ease-out mt-2 font-medium">
            {tx.booking.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
