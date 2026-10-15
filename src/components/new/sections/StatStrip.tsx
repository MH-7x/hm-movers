/** Big numerals strip. Figures only repeat facts already stated in the page copy. */
export default function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 border-y-2 border-ink md:grid-cols-4">
      {items.map((s, i) => (
        <div
          key={s.label}
          className={[
            "flex flex-col-reverse gap-1 px-4 py-6 md:px-6",
            i % 2 === 1 ? "border-l border-line" : "",
            i >= 2 ? "border-t border-line md:border-t-0" : "",
            i === 2 ? "md:border-l" : "",
          ].join(" ")}
        >
          <dt className="text-[14px] font-semibold uppercase tracking-[0.08em] text-muted">{s.label}</dt>
          <dd className="font-head text-[44px] font-extrabold leading-none text-ink md:text-[60px]">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
