import PhotoSlot, { type PhotoSlotProps } from "../ui/PhotoSlot";
import Section, { SectionHeading } from "./Section";

type Item = { title: string; body: React.ReactNode };

/** Bold lead-in notes (permits, things to plan, money-saving tips). */
export default function NoteList({
  id,
  index,
  heading,
  intro,
  items,
  after,
  photo,
  columns = 2,
  tone = "gray",
}: {
  id: string;
  index?: string;
  heading: string;
  intro?: React.ReactNode;
  items: Item[];
  after?: React.ReactNode;
  photo?: PhotoSlotProps;
  columns?: 1 | 2;
  tone?: "white" | "gray" | "dark";
}) {
  const dark = tone === "dark";
  const bodyColor = dark ? "text-white/85" : "text-text";

  return (
    <Section tone={tone} labelledBy={id}>
      <div className={`grid gap-10 ${photo ? "lg:grid-cols-12 lg:gap-16" : ""}`}>
        <div className={photo ? "lg:col-span-7" : ""}>
          <SectionHeading id={id} index={index}>
            {heading}
          </SectionHeading>
          {intro && <div className={`mt-5 max-w-[68ch] space-y-4 ${bodyColor}`}>{intro}</div>}
          <ul className={`mt-10 grid gap-x-10 gap-y-8 ${columns === 2 && !photo ? "md:grid-cols-2" : ""}`}>
            {items.map((it) => (
              <li key={it.title} className={`border-l-4 border-brand pl-5 ${bodyColor}`}>
                <p>
                  <strong className={`font-bold ${dark ? "text-white" : "text-ink"}`}>{it.title}</strong> {it.body}
                </p>
              </li>
            ))}
          </ul>
          {after && <div className={`mt-8 max-w-[68ch] space-y-4 ${bodyColor}`}>{after}</div>}
        </div>
        {photo && (
          <div className="lg:col-span-5 lg:self-center">
            <PhotoSlot {...photo} />
          </div>
        )}
      </div>
    </Section>
  );
}
