import { Check } from "../ui/icons";
import Section, { SectionHeading } from "./Section";

export default function Checklist({
  id,
  index,
  heading,
  intro,
  items,
  after,
  tone = "white",
}: {
  id: string;
  index?: string;
  heading: string;
  intro?: React.ReactNode;
  items: React.ReactNode[];
  after?: React.ReactNode;
  tone?: "white" | "gray";
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading id={id} index={index}>
              {heading}
            </SectionHeading>
            {intro && <div className="mt-5 text-text">{intro}</div>}
          </div>
        </div>
        <div className="lg:col-span-8">
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 border-b border-line py-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-ink">
                  <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-text">{item}</span>
              </li>
            ))}
          </ul>
          {after && (
            <div className="mt-8 border-l-4 border-brand bg-elevated px-5 py-4 font-semibold text-ink [&_p+p]:mt-2">
              {after}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
