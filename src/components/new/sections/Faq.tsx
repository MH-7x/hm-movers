import JsonLd from "../site/JsonLd";
import { Plus } from "../ui/icons";
import Section, { SectionHeading } from "./Section";

type Item = { q: string; a: string };

export default function Faq({
  id,
  index,
  heading,
  items,
  tone = "white",
}: {
  id: string;
  index?: string;
  heading: string;
  items: Item[];
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
          </div>
        </div>
        <div className="border-t-2 border-ink lg:col-span-8">
          {items.map((it) => (
            <details key={it.q} className="lp-faq group border-b border-line">
              <summary className="flex min-h-[56px] items-center justify-between gap-4 py-4 hover:text-ink">
                <h3 className="!text-[18px] md:!text-[19px]">{it.q}</h3>
                <span
                  aria-hidden="true"
                  className="lp-faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink text-ink group-open:bg-brand group-open:border-brand"
                >
                  <Plus className="h-4 w-4" strokeWidth={3} />
                </span>
              </summary>
              <p className="max-w-[66ch] pb-6 pr-12 text-text">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
    </Section>
  );
}
