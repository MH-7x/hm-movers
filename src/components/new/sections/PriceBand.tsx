import CallButton from "../cta/CallButton";
import WhatsAppButton from "../cta/WhatsAppButton";
import { SectionHeading } from "./Section";

type Props = {
  id: string;
  index?: string;
  heading: string;
  /** Text above the table (e.g. packing page intro lines). */
  lead?: React.ReactNode;
  table?: React.ReactNode;
  notes: React.ReactNode;
  whatsappMessage: string;
  callLabel?: string;
  /** Full-width table with the yellow panel underneath (for wide comparison tables). */
  wide?: boolean;
};

/** Dark band with the price sheet, plus a yellow panel holding the notes and the call buttons. */
export default function PriceBand({
  id,
  index,
  heading,
  lead,
  table,
  notes,
  whatsappMessage,
  callLabel = "Call for your exact price",
  wide = false,
}: Props) {
  const actions = (
    <>
      <CallButton label={callLabel} location="price" size="lg" variant="onBrand" />
      <WhatsAppButton message={whatsappMessage} location="price" size="lg" variant="light" />
    </>
  );

  if (wide) {
    return (
      <section aria-labelledby={id} className="on-dark relative bg-ink py-16 text-white md:py-20">
        <div className="lp-container">
          <SectionHeading id={id} index={index}>
            {heading}
          </SectionHeading>
          {lead && <div className="mt-5 max-w-[68ch] space-y-3 text-white/85">{lead}</div>}
          {table && <div className="mt-8 rounded-card bg-white p-2 text-text sm:p-3">{table}</div>}
          <div className="mt-6 grid gap-6 rounded-card bg-brand p-6 text-on-brand sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 text-[17px] lg:col-span-7 [&_strong]:font-extrabold">{notes}</div>
            <div className="flex flex-col gap-3 lg:col-span-5">{actions}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby={id} className="on-dark relative bg-ink py-16 text-white md:py-20">
      <div className="lp-container grid gap-8 lg:grid-cols-12 lg:gap-0">
        <div className={table ? "lg:col-span-7 lg:pr-10" : "lg:col-span-6 lg:self-center lg:pr-10"}>
          <SectionHeading id={id} index={index}>
            {heading}
          </SectionHeading>
          {lead && <div className="mt-5 space-y-3 text-white/85">{lead}</div>}
          {table && <div className="mt-8 rounded-card bg-white p-2 text-text sm:p-3">{table}</div>}
        </div>

        <div className={table ? "lg:col-span-5" : "lg:col-span-6"}>
          <div className="h-full rounded-card bg-brand p-6 text-on-brand sm:p-8 lg:sticky lg:top-28 lg:h-auto">
            <div className="space-y-4 text-[17px] text-on-brand [&_strong]:font-extrabold">{notes}</div>
            <div className="mt-7 flex flex-col gap-3">{actions}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
