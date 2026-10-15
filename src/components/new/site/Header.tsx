import CallButton from "../cta/CallButton";
import { whatsappHref, PHONE_TEL } from "../cta/constants";
import { ArrowRight, Phone, WhatsAppIcon } from "../ui/icons";
import Logo from "./Logo";
import NavMenus from "./NavMenus";

export default function Header({ whatsappMessage }: { whatsappMessage: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="lp-container flex h-16 items-center justify-between gap-4 md:h-[76px]">
        <div className="flex items-center gap-6">
          <a href="#top" className="flex min-h-[44px] items-center rounded-md">
            <Logo />
            <span className="sr-only">, back to top</span>
          </a>
          <nav aria-label="Services and locations" className="hidden lg:block">
            <NavMenus variant="desktop" />
          </nav>
        </div>

        <nav aria-label="Contact" className="flex items-center gap-2 md:gap-3">
          <a
            href="#quote"
            data-cta="quote"
            className="hidden min-h-[44px] items-center gap-1.5 rounded-btn px-3 font-bold text-ink hover:bg-elevated xl:inline-flex"
          >
            Get a quote
            <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-cta-location="header"
            className="lp-btn lp-btn-outline hidden min-h-[44px] px-4 md:inline-flex"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <CallButton location="header" className="hidden min-h-[44px] md:inline-flex" />
          <a
            href={PHONE_TEL}
            data-cta="call"
            data-cta-location="header-mobile"
            className="lp-btn lp-btn-call min-h-[44px] px-4 text-[15px] md:hidden"
          >
            <Phone aria-hidden="true" strokeWidth={2.25} />
            <span>Call now</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
