type Props = {
  columns: string[];
  rows: React.ReactNode[][];
  /** Column indexes (0-based) that hold prices. */
  priceCols?: number[];
  /** Stack rows as cards on narrow screens (default true). Two-column price lists stay as rows. */
  stack?: boolean;
  caption?: string;
  className?: string;
};

export default function DataTable({ columns, rows, priceCols = [], stack = true, caption, className = "" }: Props) {
  return (
    <div className={`lp-table-wrap ${className}`}>
      <table className={`lp-table ${priceCols.length ? "lp-price-table" : ""} ${stack ? "" : "lp-nostack"}`}>
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i} scope="col" className={priceCols.includes(i) ? "!text-right" : ""}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) =>
                ci === 0 ? (
                  <th key={ci} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={ci} data-label={columns[ci]} className={priceCols.includes(ci) ? "lp-price" : ""}>
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
