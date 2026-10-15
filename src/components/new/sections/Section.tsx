type Tone = "white" | "gray" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white",
  gray: "bg-elevated",
  dark: "on-dark bg-ink text-white",
};

export default function Section({
  tone = "white",
  id,
  labelledBy,
  className = "",
  children,
}: {
  tone?: Tone;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 md:py-20 ${className}`}>
      <div className="lp-container">{children}</div>
    </section>
  );
}

/** H2 with a small box-label index tag above it. */
export function SectionHeading({
  id,
  index,
  children,
  className = "",
}: {
  id: string;
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {index && (
        <span aria-hidden="true" className="lp-tag">
          {index}
        </span>
      )}
      <h2 id={id} className="max-w-[22ch] [.on-dark_&]:text-white">
        {children}
      </h2>
    </div>
  );
}
