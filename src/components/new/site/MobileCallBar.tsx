import { PHONE_TEL, whatsappHref } from "../cta/constants";
import { Phone, WhatsAppIcon } from "../ui/icons";

export default function MobileCallBar({ whatsappMessage }: { whatsappMessage: string }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white px-3 pt-2 md:hidden"
      style={{ paddingBottom: "calc(8px + env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={PHONE_TEL}
          data-cta="call"
          data-cta-location="mobile-bar"
          className="lp-btn lp-btn-call min-h-[52px] w-full text-[17px]"
        >
          <Phone aria-hidden="true" strokeWidth={2.25} />
          <span>Call now</span>
        </a>
        <a
          href={whatsappHref(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          data-cta-location="mobile-bar"
          className="lp-btn lp-btn-wa min-h-[52px] w-full text-[17px]"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
