import Image from "next/image";

export type PhotoSlotProps = {
  src: string;
  alt: string;
  ratio?: "4/3" | "4/5" | "3/2" | "1/1";
  className?: string;
  sizes?: string;
};

const ratios = {
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/3] lg:aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
};

/** Section photo with the offset yellow block and tape-strip framing. */
export default function PhotoSlot({
  src,
  alt,
  ratio = "4/3",
  className = "",
  sizes = "(min-width: 1024px) 560px, 100vw",
}: PhotoSlotProps) {
  return (
    <figure className={`relative ${className}`}>
      {/* offset yellow block behind the photo */}
      <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-2/3 w-2/3 rounded-card bg-brand" />
      <div className={`relative overflow-hidden rounded-card bg-ink/5 ${ratios[ratio]}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" loading="lazy" />
      </div>
      {/* tape strip across the corner */}
      <span
        aria-hidden="true"
        className="absolute -left-2 top-4 h-6 w-24 -rotate-[8deg] bg-brand/90 shadow-[0_1px_0_rgba(0,0,0,0.08)]"
      />
    </figure>
  );
}
