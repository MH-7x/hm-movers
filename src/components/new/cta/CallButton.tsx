import { Phone } from "../ui/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "./constants";

type Props = {
  label?: string;
  location: string;
  className?: string;
  size?: "md" | "lg";
  /** onBrand: for use on a yellow panel (dark button, yellow text). */
  variant?: "solid" | "onBrand";
};

export default function CallButton({
  label = `Call ${PHONE_DISPLAY}`,
  location,
  className = "",
  size = "md",
  variant = "solid",
}: Props) {
  return (
    <a
      href={PHONE_TEL}
      data-cta="call"
      data-cta-location={location}
      className={`lp-btn ${variant === "onBrand" ? "border-2 border-ink bg-ink text-brand hover:bg-[#22333f]" : "lp-btn-call"} ${size === "lg" ? "min-h-[54px] px-6 text-[17px]" : ""} ${className}`}
    >
      <Phone aria-hidden="true" strokeWidth={2.25} />
      <span>{label}</span>
    </a>
  );
}
