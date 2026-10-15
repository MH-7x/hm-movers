import { ArrowRight } from "../ui/icons";
import PhotoSlot, { type PhotoSlotProps } from "../ui/PhotoSlot";
import Section, { SectionHeading } from "./Section";

export default function LinkList({
  id,
  index,
  heading,
  intro,
  items,
  after,
  photo,
  tone = "gray",
  pills = false,
}: {
  id: string;
  index?: string;
  heading: string;
  intro?: React.ReactNode;
  items: React.ReactNode[];
  after?: React.ReactNode;
  photo?: PhotoSlotProps;
  tone?: "white" | "gray";
  /** Render items as a wrap of pill links instead of ruled rows. */
  pills?: boolean;
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className={`grid gap-10 ${photo ? "lg:grid-cols-12 lg:gap-16" : ""}`}>
        <div className={photo ? "lg:col-span-7" : "max-w-[72ch]"}>
          <SectionHeading id={id} index={index}>
            {heading}
          </SectionHeading>
          {intro && <div className="mt-5 space-y-4 text-text">{intro}</div>}
          {pills ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="[&_a]:inline-flex [&_a]:min-h-[44px] [&_a]:items-center [&_a]:gap-2 [&_a]:rounded-full [&_a]:border-2 [&_a]:border-ink [&_a]:bg-white [&_a]:px-4 [&_a]:font-bold [&_a]:text-ink [&_a]:no-underline hover:[&_a]:bg-brand"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-8 border-t-2 border-ink">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-line py-4 text-text">
                  <ArrowRight aria-hidden="true" className="mt-[5px] h-4 w-4 shrink-0 text-ink" strokeWidth={2.5} />
                  <span className="[&_a]:inline-block [&_a]:-my-3 [&_a]:py-3">{item}</span>
                </li>
              ))}
            </ul>
            )}
          {after && <div className="mt-6 space-y-4 text-text">{after}</div>}
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
