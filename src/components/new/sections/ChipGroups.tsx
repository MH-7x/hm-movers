import Section, { SectionHeading } from "./Section";

type Group = { label: string; items: string[]; note?: React.ReactNode };

export default function ChipGroups({
  id,
  index,
  heading,
  intro,
  groups,
  outro,
  tone = "white",
}: {
  id: string;
  index?: string;
  heading: string;
  intro?: React.ReactNode;
  groups: Group[];
  outro?: React.ReactNode;
  tone?: "white" | "gray";
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading id={id} index={index}>
            {heading}
          </SectionHeading>
          {intro && <div className="mt-5 text-text">{intro}</div>}
        </div>
        <div className="lg:col-span-8">
          <dl>
            {groups.map((g) => (
              <div
                key={g.label}
                className="grid gap-3 border-t border-line py-6 first:border-t-2 first:border-ink sm:grid-cols-[180px_1fr] sm:gap-6"
              >
                <dt className="font-head text-[17px] font-bold text-ink">{g.label}</dt>
                <dd>
                  {g.items.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full border border-line px-3 py-1.5 text-[15px] font-semibold text-ink ${
                          tone === "gray" ? "bg-white" : "bg-elevated"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  )}
                  {g.note && <p className={`text-text ${g.items.length ? "mt-3" : ""}`}>{g.note}</p>}
                </dd>
              </div>
            ))}
          </dl>
          {outro && <div className="mt-4 border-t border-line pt-6 font-semibold text-ink">{outro}</div>}
        </div>
      </div>
    </Section>
  );
}
