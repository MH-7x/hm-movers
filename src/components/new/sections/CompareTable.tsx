type Props = {
  tiers: string[];
  rows: { label: React.ReactNode; values: React.ReactNode[]; price?: boolean }[];
  /** Index (0-based) of the tier column to highlight. */
  highlight?: number;
  caption?: string;
};

/**
 * Package comparison. A real table from md up; on phones each package becomes
 * its own card so nothing hides behind a sideways scroll. Only one version is
 * displayed at a time (the other is display:none, so it is not read twice).
 */
export default function CompareTable({ tiers, rows, highlight, caption }: Props) {
  return (
    <>
      <div className="hidden md:block">
        <table className="lp-compare">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr>
              <td aria-hidden="true" className="!bg-white" />
              {tiers.map((t, i) => (
                <th key={t} scope="col" className={i === highlight ? "lp-hi" : ""}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                <th scope="row">{r.label}</th>
                {r.values.map((v, vi) => (
                  <td key={vi} className={`${vi === highlight ? "lp-hi" : ""} ${r.price ? "lp-price" : ""}`}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="grid gap-3 md:hidden" aria-label={caption}>
        {tiers.map((t, ti) => (
          <li
            key={t}
            className={`overflow-hidden rounded-card border ${ti === highlight ? "border-2 border-ink" : "border-line"}`}
          >
            <h3 className={`px-4 py-3 !text-[19px] ${ti === highlight ? "bg-brand" : "bg-elevated"}`}>{t}</h3>
            <dl className="divide-y divide-line">
              {rows.map((r, ri) => (
                <div key={ri} className="flex justify-between gap-4 px-4 py-2.5">
                  <dt className="text-[15px] font-bold text-ink">{r.label}</dt>
                  <dd
                    className={`text-right ${
                      r.price ? "whitespace-nowrap font-head font-extrabold text-ink" : "text-[15px] text-text"
                    }`}
                  >
                    {r.values[ti]}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
