import type { LucideIcon } from "lucide-react";
import Section, { SectionHeading } from "./Section";

type Item = { title: string; body: React.ReactNode; icon: LucideIcon };

export default function ServiceList({
  id,
  index,
  heading,
  intro,
  items,
  tone = "gray",
}: {
  id: string;
  index?: string;
  heading: string;
  intro?: React.ReactNode;
  items: Item[];
  tone?: "white" | "gray";
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} index={index}>
        {heading}
      </SectionHeading>
      {intro && <div className="mt-5 max-w-[68ch] space-y-4">{intro}</div>}
      <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
        {items.map(({ title, body, icon: Icon }) => (
          <li key={title} className="flex gap-4 border-t border-line py-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-card bg-ink text-brand">
              <Icon aria-hidden="true" className="h-[22px] w-[22px]" strokeWidth={2} />
            </span>
            <div>
              <h3>{title}</h3>
              <p className="mt-2 text-text">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
