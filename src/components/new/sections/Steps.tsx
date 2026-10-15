import Section, { SectionHeading } from "./Section";

type Item = { title: string; body: React.ReactNode };

export default function Steps({
  id,
  index,
  heading,
  items,
  variant = "row",
  tone = "gray",
}: {
  id: string;
  index?: string;
  heading: string;
  items: Item[];
  variant?: "row" | "timeline";
  tone?: "white" | "gray";
}) {
  const ring = tone === "gray" ? "ring-elevated" : "ring-white";

  if (variant === "timeline") {
    return (
      <Section tone={tone} labelledBy={id}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id={id} index={index}>
              {heading}
            </SectionHeading>
          </div>
          <ol className="lg:col-span-8">
            {items.map((it, i) => (
              <li key={it.title} className="relative grid grid-cols-[48px_1fr] gap-5 pb-8 last:pb-0">
                {i < items.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[23px] top-12 w-[2px] bg-ink/15" />
                )}
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center rounded-full bg-brand font-head text-[20px] font-extrabold text-ink"
                >
                  {i + 1}
                </span>
                <p className="pt-2 text-text">
                  <strong className="font-head text-[20px] font-bold text-ink">{it.title}</strong>{" "}
                  <span className="mt-1 block">{it.body}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    );
  }

  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} index={index}>
        {heading}
      </SectionHeading>
      <ol className="relative mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <span aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-[2px] bg-ink/15 lg:block" />
        {items.map((it, i) => (
          <li key={it.title} className="relative grid grid-cols-[48px_1fr] gap-4 lg:block">
            <span
              aria-hidden="true"
              className={`relative grid h-12 w-12 place-items-center rounded-full bg-brand font-head text-[20px] font-extrabold text-ink ring-8 ${ring}`}
            >
              {i + 1}
            </span>
            <p className="text-text lg:mt-5">
              <strong className="font-head text-[19px] font-bold text-ink">{it.title}</strong>{" "}
              <span className="mt-1 block">{it.body}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
