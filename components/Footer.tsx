export default function Footer() {
  return (
    <footer className="bg-[#6B4C1E] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-0 leading-none">
          <span className="font-serif text-4xl font-bold text-white">F</span>
          <span className="font-serif text-4xl italic text-[#F9C0C0]" style={{ marginLeft: "-4px" }}>w</span>
          <span className="text-[8px] tracking-[0.25em] uppercase text-white/50 self-end mb-1 ml-1">Pilates Studio</span>
        </a>
        <p className="text-white/40 text-xs tracking-widest text-center">
          Tu espacio para crecer, sanar y resetear.
        </p>
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Flow Reset Pilates. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
