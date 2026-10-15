import CallButton from "../cta/CallButton";
import WhatsAppButton from "../cta/WhatsAppButton";
import { Clock } from "../ui/icons";
import TrustChips from "./TrustChips";

type Props = {
  h1: React.ReactNode;
  intro: React.ReactNode;
  chips: string[];
  subline: string;
  whatsappMessage: string;
  form: React.ReactNode;
};

export default function Hero({ h1, intro, chips, subline, whatsappMessage, form }: Props) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      {/* H1 and intro are not animated: they are the LCP text and must paint immediately. */}
      {/* blueprint panel behind the form on desktop */}
      <div aria-hidden="true" className="lp-grid-bg absolute inset-y-0 right-0 hidden w-[44%] lg:block" />

      <div className="lp-container relative grid gap-8 pb-10 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-14 lg:pt-10">
        <div className="lg:col-span-7 lg:self-center lg:pr-4">
          <h1 id="hero-title">
            {h1}
          </h1>
          <p className="mt-5 max-w-[56ch] text-[18px] leading-[1.6] text-text md:text-[19px]">
            {intro}
          </p>
          <div className="lp-rise mt-6" style={{ ["--i" as string]: 2 }}>
            <TrustChips items={chips} />
          </div>
          <div className="lp-rise mt-7 flex flex-col gap-3 sm:flex-row" style={{ ["--i" as string]: 3 }}>
            <CallButton location="hero" size="lg" />
            <WhatsAppButton message={whatsappMessage} location="hero" size="lg" />
          </div>
          <p className="lp-rise mt-5 flex items-start gap-2 text-[15px] font-semibold text-muted" style={{ ["--i" as string]: 4 }}>
            <Clock aria-hidden="true" className="mt-[3px] h-4 w-4 shrink-0 text-ink" strokeWidth={2.25} />
            {subline}
          </p>
        </div>

        <div className="lp-rise -mx-4 bg-elevated px-4 py-6 sm:mx-0 sm:bg-transparent sm:p-0 lg:col-span-5" style={{ ["--i" as string]: 2 }}>
          {form}
        </div>
      </div>
      <div className="lp-tape relative" aria-hidden="true" />
    </section>
  );
}
