/** Yellow "packing tape" highlight behind key words in the H1. */
export default function Mark({ children }: { children: React.ReactNode }) {
  return <span className="lp-mark">{children}</span>;
}
