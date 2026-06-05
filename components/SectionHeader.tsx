interface SectionHeaderProps {
  title: string;
  subtext: string;
}

export default function SectionHeader({ title, subtext }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <div className="relative">
        <h2 className="font-sans font-bold text-2xl tracking-widest uppercase text-navy">
          {title}
        </h2>
        <span
          className="absolute left-0 -bottom-1 h-0.5 bg-accent"
          style={{ width: "100%" }}
        />
      </div>
      <p className="font-sans text-sm italic text-navy/50">{subtext}</p>
    </div>
  );
}
