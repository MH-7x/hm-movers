import { PHONE_DISPLAY, PHONE_TEL, PHONE2_DISPLAY, PHONE2_TEL } from "../cta/constants";
import { Clock, MapPin, Phone } from "../ui/icons";
import Logo from "./Logo";
import { LOCATIONS, SERVICES } from "./nav-data";

const locations = LOCATIONS;
const services = SERVICES;

function Circle({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-ink">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="lp-tape" aria-hidden="true" />

      {/* Contact strip */}
      <div className="border-b border-white/10">
        <div className="lp-container grid gap-6 py-10 md:grid-cols-[1fr_1.4fr_1fr] md:gap-8">
          <div className="flex items-start gap-4">
            <Circle>
              <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={2.25} />
            </Circle>
            <div>
              <p className="sr-only">Phone</p>
              <p className="-mt-2 flex flex-col font-head text-[18px] font-bold leading-snug">
                <a href={PHONE_TEL} data-cta-location="footer" className="inline-flex min-h-[44px] items-center hover:text-brand">
                  {PHONE_DISPLAY}
                </a>
                <a href={PHONE2_TEL} data-cta-location="footer" className="inline-flex min-h-[44px] items-center hover:text-brand">
                  {PHONE2_DISPLAY}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Circle>
              <MapPin aria-hidden="true" className="h-5 w-5" strokeWidth={2.25} />
            </Circle>
            <address className="not-italic text-white/85">
              <span className="block font-bold text-white">Hamdan Movers and Packers</span>
              Office No. 3-064M, King Saeed Majid Al Shamsi Building, Al Zahra Street, Al Nasiriyah, Sharjah
            </address>
          </div>
          <div className="flex items-start gap-4">
            <Circle>
              <Clock aria-hidden="true" className="h-5 w-5" strokeWidth={2.25} />
            </Circle>
            <p className="font-head text-[18px] font-bold leading-snug">Open 24 hours, 7 days</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="lp-container grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
        </div>
        <nav aria-labelledby="ft-locations">
          <h2 id="ft-locations" className="mb-4 font-body text-[13px] font-bold uppercase tracking-[0.14em] text-brand">
            Moving locations
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {locations.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-[44px] items-center text-white/90 hover:text-brand hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="ft-services">
          <h2 id="ft-services" className="mb-4 font-body text-[13px] font-bold uppercase tracking-[0.14em] text-brand">
            Moving services
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {services.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-[44px] items-center text-white/90 hover:text-brand hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="lp-container py-6 text-[14px] text-white/70">© Hamdan Movers and Packers</p>
      </div>
    </footer>
  );
}
