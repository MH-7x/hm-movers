import Section, { SectionHeading } from "./Section";
import StatStrip from "./StatStrip";

type Item = { title: string; body: React.ReactNode };

export default function FeatureGrid({
  id,
  index,
  heading,
  items,
  stats,
  tone = "white",
}: {
  id: string;
  index?: string;
  heading: string;
  items: Item[];
  stats?: { value: string; label: string }[];
  tone?: "white" | "gray";
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} index={index}>
        {heading}
      </SectionHeading>
      {stats && (
        <div className="mt-10" aria-hidden="true">
          <StatStrip items={stats} />
        </div>
      )}
      <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <li key={it.title} className="relative pt-6">
            <span aria-hidden="true" className="absolute left-0 top-0 h-[3px] w-12 bg-brand" />
            <span aria-hidden="true" className="font-head text-[14px] font-extrabold tracking-[0.12em] text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-text">
              <strong className="block font-head text-[20px] font-bold leading-snug text-ink">{it.title}</strong>{" "}
              <span className="mt-2 block">{it.body}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
