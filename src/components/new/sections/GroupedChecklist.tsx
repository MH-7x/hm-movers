import { Check } from "../ui/icons";
import Section, { SectionHeading } from "./Section";

export default function GroupedChecklist({
  id,
  index,
  heading,
  groups,
  tone = "white",
}: {
  id: string;
  index?: string;
  heading: string;
  groups: { title: string; items: React.ReactNode[] }[];
  tone?: "white" | "gray";
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} index={index}>
        {heading}
      </SectionHeading>
      <ol className="mt-10 grid gap-0 md:grid-cols-2 md:gap-x-12">
        {groups.map((g, gi) => (
          <li key={g.title} className="relative border-l-2 border-ink/15 pb-8 pl-8 last:pb-0 md:[&:nth-last-child(2)]:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full bg-ink font-head text-[12px] font-extrabold text-brand"
            >
              {gi + 1}
            </span>
            <h3 className="leading-6">{g.title}</h3>
            <ul className="mt-3 space-y-2.5">
              {g.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-text">
                  <Check aria-hidden="true" className="mt-[5px] h-4 w-4 shrink-0 text-ink" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
