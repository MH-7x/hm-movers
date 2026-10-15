type Props = {
  label?: string;
  className?: string;
  variant?: "outline" | "ghost";
};

export default function QuoteLinkButton({
  label = "Get my price",
  className = "",
  variant = "outline",
}: Props) {
  return (
    <a
      href="#quote"
      data-cta="quote"
      className={`lp-btn ${variant === "ghost" ? "lp-btn-wa-ghost" : "lp-btn-outline"} ${className}`}
    >
      {label}
    </a>
  );
}
