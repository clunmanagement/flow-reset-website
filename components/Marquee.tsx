export default function Marquee() {
  const items = [
    "Reformer Pilates",
    "✦",
    "Mind & Body",
    "✦",
    "Reset Your Practice",
    "✦",
    "Boutique Studio",
    "✦",
    "Feel Stronger",
    "✦",
    "Move Beautifully",
    "✦",
    "Reformer Pilates",
    "✦",
    "Mind & Body",
    "✦",
    "Reset Your Practice",
    "✦",
    "Boutique Studio",
    "✦",
    "Feel Stronger",
    "✦",
    "Move Beautifully",
    "✦",
  ];

  return (
    <div className="bg-[#F9C0C0] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xs tracking-[0.25em] uppercase text-[#6B4C1E] font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
