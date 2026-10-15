import CallButton from "../cta/CallButton";
import QuoteLinkButton from "../cta/QuoteLinkButton";
import WhatsAppButton from "../cta/WhatsAppButton";

export default function FinalCta({
  heading,
  text,
  whatsappMessage,
  quoteLabel = "Get my price",
}: {
  heading: string;
  text: string;
  whatsappMessage: string;
  quoteLabel?: string;
}) {
  return (
    <section aria-labelledby="final-cta" className="on-dark relative overflow-hidden bg-ink text-white">
      {/* big yellow corner block echoing the price band */}
      <span aria-hidden="true" className="absolute -right-24 -top-24 hidden h-72 w-72 rotate-12 bg-brand md:block" />
      <span aria-hidden="true" className="absolute -right-16 top-44 hidden h-6 w-72 -rotate-[20deg] bg-brand/90 md:block" />
      <div className="lp-container relative py-16 md:py-24">
        <div className="max-w-[760px]">
          <h2 id="final-cta" className="!text-white md:!text-[46px]">
            {heading}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[19px] text-white/85">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton location="final-cta" size="lg" />
            <WhatsAppButton message={whatsappMessage} location="final-cta" size="lg" variant="ghost" />
            <QuoteLinkButton label={quoteLabel} variant="ghost" className="min-h-[54px] px-6 text-[17px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
