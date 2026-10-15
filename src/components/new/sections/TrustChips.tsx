import { Check } from "../ui/icons";

export default function TrustChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Why book us">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[14px] font-bold text-ink"
        >
          <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-brand">
            <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
