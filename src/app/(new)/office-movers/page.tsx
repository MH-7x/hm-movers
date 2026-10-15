import type { Metadata } from "next";
import QuoteForm from "@/components/new/form/QuoteForm";
import Faq from "@/components/new/sections/Faq";
import FeatureGrid from "@/components/new/sections/FeatureGrid";
import FinalCta from "@/components/new/sections/FinalCta";
import Hero from "@/components/new/sections/Hero";
import PriceBand from "@/components/new/sections/PriceBand";
import ServiceList from "@/components/new/sections/ServiceList";
import SplitText from "@/components/new/sections/SplitText";
import Steps from "@/components/new/sections/Steps";
import { OG_IMAGES } from "@/components/new/site/seo";
import Shell from "@/components/new/site/Shell";
import {
  Briefcase,
  FileText,
  MonitorSmartphone,
  Tags,
  Users,
  Warehouse,
} from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Office Movers in Dubai | After-Hours Office Relocation | Hamdan";
const description =
  "Office movers in Dubai for desks, IT equipment and files. Night and weekend moves so your team is back at work next day. Insured. Open 24/7.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/office-movers/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/office-movers/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need office movers";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            <Mark>Office Movers</Mark> in Dubai
          </>
        }
        intro="We move offices at night or over the weekend, so your team is back at work the next working day. Desks, IT, files and furniture, packed, labelled and set up again at your new office."
        chips={["Open 24/7", "Insured moves", "After-hours and weekend moves", "6+ years in the UAE"]}
        subline="Send your details and we'll get back to you within 10 minutes to arrange a free survey."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your office moving quote"
            footnote="We reply within 10 minutes, day or night."
            page="office-movers"
            whatsappMessage={WA}
            defaultType="Office"
            submitLabel="Get my quote"
          />
        }
      />

      <SplitText
        id="no-lost-days"
        index="01"
        heading="Office relocation without losing working days"
        photo={{
          src: "/new/movers-wrapping-office-chairs-monitors-after-hours-dubai.jpg",
          alt: "Hamdan movers wrapping office chairs and monitors in an empty office after hours in Dubai",
          ratio: "4/5",
        }}
      >
        <p>
          For a business, the moving cost isn&apos;t the biggest cost. Lost days are. Every day your team can&apos;t
          work, or your phones and systems are down, costs more than the move.
        </p>
        <p>
          So we plan office moves around your working week. We pack and move after closing time, overnight or over the
          weekend, and set the new office up so people can sit down and start work.
        </p>
        <p>
          Hamdan Movers and Packers has been moving offices, shops and clinics across the UAE for more than six years.
          We handle the planning, the labelling, the heavy lifting and the setup.
        </p>
      </SplitText>

      <ServiceList
        id="handle"
        index="02"
        heading="What our office movers handle"
        items={[
          {
            title: "Workstations and office furniture",
            icon: Briefcase,
            body: "Desks, workstations, partitions, meeting tables, chairs and cabinets. We dismantle what needs dismantling and refit it at the new office.",
          },
          {
            title: "IT equipment",
            icon: MonitorSmartphone,
            body: "Computers, monitors, printers, servers and networking gear are packed in padded boxes and moved separately from the heavy furniture. Your IT team or provider handles the disconnecting and reconnecting. We handle the safe packing, moving and placing.",
          },
          {
            title: "Files and documents",
            icon: FileText,
            body: "Files are boxed in order and sealed, so they arrive the same way they left. Confidential files stay sealed until you open them.",
          },
          {
            title: "Labelling system",
            icon: Tags,
            body: "Every box and every piece of furniture gets a label for its new floor, room and desk. Your staff find their things on their own desk the next morning.",
          },
          {
            title: "Meeting rooms, kitchens and receptions",
            icon: Users,
            body: "We move the reception desk, the boardroom table, the pantry fridge and the coffee machine.",
          },
          {
            title: "Storage",
            icon: Warehouse,
            body: "Need to store surplus furniture or archive boxes? We offer short and long-term storage.",
          },
        ]}
      />

      <SplitText
        id="night-weekend"
        index="03"
        heading="Night and weekend office moves"
        tone="dark"
        reverse
        photo={{
          src: "/new/night-office-move-crates-loading-truck-dubai-tower.jpg",
          alt: "Hamdan Movers crew loading labelled office crates onto a truck at night outside a Dubai office tower",
          ratio: "4/3",
        }}
      >
        <p>
          Most office moves we do start after 6 pm or on a Friday or Saturday. That way you close on the last working
          day in the old office and open on the next working day in the new one.
        </p>
        <p>
          For bigger offices we split the move into phases. One department moves at a time, so the business keeps
          running.
        </p>
      </SplitText>

      <SplitText id="permits" index="04" heading="Building permits and certificates">
        <p>
          Most commercial towers in Dubai, including those in DMCC, JLT, Business Bay, DIFC and Dubai Internet City, ask
          movers for a work permit, a gate pass or a certificate of insurance before they let trucks in. Some also limit
          moves to after hours.
        </p>
        <p>
          We supply our insurance details for the building at no extra charge. Ask your facilities management what they
          need, and we&apos;ll work with them on the paperwork and the time slot.
        </p>
      </SplitText>

      <Steps
        id="plan"
        index="05"
        heading="How we plan an office move"
        variant="timeline"
        items={[
          {
            title: "Free survey.",
            body: "We visit your current office, look at the furniture, IT and files, and check access at both buildings.",
          },
          {
            title: "Fixed quote and move plan.",
            body: "You get a fixed price, a timeline, and a plan for which areas move when.",
          },
          {
            title: "Labelling and packing.",
            body: "We bring boxes and labels ahead of time. Staff pack their personal desk items, and we pack the rest.",
          },
          {
            title: "Move day (or night).",
            body: "The crew dismantles, loads, moves and unloads, following the labels.",
          },
          {
            title: "Set-up.",
            body: "Workstations are rebuilt and furniture is placed according to your floor plan, so staff can start work.",
          },
        ]}
      />

      <PriceBand
        id="prices"
        index="06"
        heading="Office moving prices"
        whatsappMessage={WA}
        callLabel="Book a free survey"
        notes={
          <p>
            Office moves are priced after a quick survey, because two offices of the same size can have very different
            amounts of furniture and equipment. The survey is free and comes with a fixed quote.{" "}
            <strong>The price you agree is the price you pay.</strong>
          </p>
        }
      />

      <SplitText id="across-uae" index="07" heading="Office moves across the UAE">
        <p>
          We move offices in every business area of Dubai, from Business Bay, DIFC, JLT, Dubai Marina and Downtown to Al
          Quoz, Deira, Bur Dubai, Dubai Silicon Oasis and Jebel Ali. We also move offices in{" "}
          <a href="/movers-in-abu-dhabi/" className="lp-link">
            Abu Dhabi
          </a>
          ,{" "}
          <a href="/movers-in-sharjah/" className="lp-link">
            Sharjah
          </a>
          ,{" "}
          <a href="/movers-in-ajman/" className="lp-link">
            Ajman
          </a>
          ,{" "}
          <a href="/movers-in-ras-al-khaimah/" className="lp-link">
            Ras Al Khaimah
          </a>{" "}
          and{" "}
          <a href="/movers-in-fujairah/" className="lp-link">
            Fujairah
          </a>
          , and between emirates.
        </p>
      </SplitText>

      <FeatureGrid
        id="why"
        index="08"
        heading="Why businesses choose Hamdan as their office movers"
        tone="gray"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "After-hours moves.",
            body: "We work nights, Fridays and weekends so your team keeps working.",
          },
          {
            title: "Fixed quote after a free survey.",
            body: "You know the cost up front, and it doesn't grow on the night.",
          },
          {
            title: "Clear labelling.",
            body: "Every box and desk is labelled for its new spot.",
          },
          {
            title: "Insured moves.",
            body: "If something is damaged while we're moving it, we repair it, replace it, or compensate you. We provide insurance details for your building.",
          },
          {
            title: "Fast replies.",
            body: "Call, WhatsApp or use the form, and we'll get back to you within 10 minutes.",
          },
          {
            title: "Six years of moves.",
            body: "More than 412 moves completed across the UAE, with 5-star reviews from customers.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="09"
        heading="Questions about office moving"
        items={[
          {
            q: "How much do office movers in Dubai cost?",
            a: "It depends on the number of workstations, the amount of furniture and equipment, and the access at both buildings. We give you a fixed quote after a free survey.",
          },
          {
            q: "Can you move our office at night or on the weekend?",
            a: "Yes. Most of our office moves happen after hours or on Fridays and Saturdays, so the business doesn't lose working days.",
          },
          {
            q: "Do you move servers and computers?",
            a: "Yes. We pack and move IT equipment carefully, separate from heavy furniture. Your IT team or provider should disconnect and reconnect systems.",
          },
          {
            q: "Do you dismantle and rebuild workstations?",
            a: "Yes. Workstations, desks, partitions and cabinets are dismantled, moved and refitted at the new office.",
          },
          {
            q: "Can you give our building a certificate of insurance?",
            a: "Yes. We provide our insurance details for your building at no extra charge.",
          },
          {
            q: "How long does an office move take?",
            a: "A small office often moves in one night. Larger offices may move over a weekend or in phases. We agree the timeline with you before the move.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving your office?"
        text="Book a free survey. We'll send you a fixed quote and a move plan that keeps your team working."
        whatsappMessage={WA}
        quoteLabel="Get my quote"
      />
    </Shell>
  );
}
