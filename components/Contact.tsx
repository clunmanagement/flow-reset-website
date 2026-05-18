"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { tx } = useLang();

  const info = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3"/></svg>,
      label: tx.contact.studio,
      value: tx.contact.studioValue,
      href: undefined,
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: tx.contact.whatsapp,
      value: "+1 (786) 614-3749",
      href: "https://wa.me/17866143749",
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      label: tx.contact.email,
      value: "flowxreset@gmail.com",
      href: "mailto:flowxreset@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B4C1E]/50 mb-4">{tx.contact.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#6B4C1E]">
            {tx.contact.heading} <span className="italic">{tx.contact.headingItalic}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {info.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12 }} className="bg-[#F5F0EB] rounded-[1.5rem] p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F9C0C0] flex items-center justify-center text-[#6B4C1E]">{item.icon}</div>
              <p className="text-xs tracking-widest uppercase text-[#6B4C1E]/50">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-sm font-light text-[#6B4C1E] hover:text-[#8B6A3A] transition-colors">{item.value}</a>
              ) : (
                <p className="text-sm font-light text-[#6B4C1E]">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center gap-6 mt-12">
          {[
            { label: "Instagram", href: "#" },
            { label: "WhatsApp", href: "https://wa.me/17866143749" },
          ].map((social) => (
            <a key={social.label} href={social.href} className="text-xs tracking-widest uppercase text-[#6B4C1E]/50 hover:text-[#6B4C1E] transition-colors">
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
