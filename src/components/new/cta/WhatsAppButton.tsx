import { WhatsAppIcon } from "../ui/icons";
import { whatsappHref } from "./constants";

type Props = {
  label?: string;
  message: string;
  location: string;
  variant?: "solid" | "ghost" | "light";
  className?: string;
  size?: "md" | "lg";
};

export default function WhatsAppButton({
  label = "WhatsApp us",
  message,
  location,
  variant = "solid",
  className = "",
  size = "md",
}: Props) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-cta-location={location}
      className={`lp-btn ${variant === "ghost" ? "lp-btn-wa-ghost" : variant === "light" ? "border-2 border-ink bg-white text-ink hover:bg-elevated" : "lp-btn-wa"} ${size === "lg" ? "min-h-[54px] px-6 text-[17px]" : ""} ${className}`}
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  );
}
