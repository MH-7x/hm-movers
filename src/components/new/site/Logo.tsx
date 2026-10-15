/** Text wordmark until the real logo file is supplied. */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-ink" : "text-white";
  const sub = tone === "dark" ? "text-muted" : "text-white/75";
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-[6px] bg-brand"
      >
        <span className="absolute inset-x-0 top-[14px] h-[3px] bg-ink" />
        <span className="absolute inset-y-0 left-[16px] w-[3px] bg-ink/90" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-head text-[19px] font-extrabold tracking-[0.02em] ${main}`}>
          HAMDAN
        </span>
        <span className={`mt-1 text-[11px] font-bold uppercase tracking-[0.16em] ${sub}`}>
          Movers &amp; Packers
        </span>
      </span>
    </span>
  );
}
