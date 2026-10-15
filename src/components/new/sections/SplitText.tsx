import PhotoSlot, { type PhotoSlotProps } from "../ui/PhotoSlot";
import Section, { SectionHeading } from "./Section";

type Props = {
  id: string;
  index?: string;
  heading: string;
  tone?: "white" | "gray" | "dark";
  photo?: PhotoSlotProps;
  reverse?: boolean;
  children: React.ReactNode;
};

export default function SplitText({ id, index, heading, tone = "white", photo, reverse, children }: Props) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className={`grid items-center gap-10 ${photo ? "lg:grid-cols-12 lg:gap-16" : ""}`}>
        <div className={photo ? `lg:col-span-7 ${reverse ? "lg:order-2" : ""}` : "max-w-[72ch]"}>
          <SectionHeading id={id} index={index}>
            {heading}
          </SectionHeading>
          <div className={`mt-6 space-y-4 text-[17px] ${tone === "dark" ? "text-white/85" : "text-text"}`}>
            {children}
          </div>
        </div>
        {photo && (
          <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
            <PhotoSlot {...photo} />
          </div>
        )}
      </div>
    </Section>
  );
}
