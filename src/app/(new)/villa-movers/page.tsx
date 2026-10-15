import type { Metadata } from "next";
import QuoteForm from "@/components/new/form/QuoteForm";
import ChipGroups from "@/components/new/sections/ChipGroups";
import DataTable from "@/components/new/sections/DataTable";
import Faq from "@/components/new/sections/Faq";
import FeatureGrid from "@/components/new/sections/FeatureGrid";
import FinalCta from "@/components/new/sections/FinalCta";
import Hero from "@/components/new/sections/Hero";
import NoteList from "@/components/new/sections/NoteList";
import PriceBand from "@/components/new/sections/PriceBand";
import Section, { SectionHeading } from "@/components/new/sections/Section";
import ServiceList from "@/components/new/sections/ServiceList";
import SplitText from "@/components/new/sections/SplitText";
import Steps from "@/components/new/sections/Steps";
import { OG_IMAGES } from "@/components/new/site/seo";
import Shell from "@/components/new/site/Shell";
import { Boxes, FileText, Piano, Sofa, TreePalm, Users } from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Villa Movers in Dubai | Villa Moving From AED 2,000 | Hamdan";
const description =
  "Villa movers and packers in Dubai. Right-sized crews, full packing, furniture fitting and insured moves for 2 to 6 bedroom villas. Open 24/7.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/villa-movers/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/villa-movers/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need villa movers";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            <Mark>Villa Movers</Mark> in Dubai
          </>
        }
        intro="Villa moves need more people, more trucks and a proper plan. We send a crew sized for your villa, pack every room, and set your new home up again. Villa moves start from AED 2,000."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your villa moving price"
            footnote="We reply within 10 minutes, day or night."
            page="villa-movers"
            whatsappMessage={WA}
            defaultType="Villa"
          />
        }
      />

      <SplitText
        id="different-plan"
        index="01"
        heading="Why villa moves need a different plan"
        photo={{
          src: "/new/movers-survey-two-storey-villa-living-room-dubai.jpg",
          alt: "Hamdan movers surveying a two-storey villa living room before planning a villa move in Dubai",
          ratio: "4/5",
        }}
      >
        <p>
          A 1 BHK move is a few hours of work. A 5 bedroom villa is a different job. There&apos;s a majlis, a maid&apos;s
          room, a full kitchen, a storeroom, kids&apos; rooms, a garden set, sometimes a gym. Things are on two or three
          floors, and some of the furniture is built to stay where it is.
        </p>
        <p>
          If a mover sends the same small crew they&apos;d send to a flat, the job runs into a second day nobody
          planned for.
        </p>
        <p>
          Our villa movers start with a visit. We walk through the villa with you, count the rooms and the heavy pieces,
          check the stairs and the access, and agree a crew size and timing before we quote. Then the move runs to that
          plan.
        </p>
      </SplitText>

      <ServiceList
        id="includes"
        index="02"
        heading="What our villa moving service includes"
        items={[
          {
            title: "A survey before the price",
            icon: FileText,
            body: "We visit the villa (or do a video walk-through), list the big items, and give you a fixed price.",
          },
          {
            title: "Crew and trucks sized for the job",
            icon: Users,
            body: "More rooms means more people. We send enough movers and trucks to finish on the agreed day.",
          },
          {
            title: "Room-by-room packing",
            icon: Boxes,
            body: "Each room is packed and labelled with its new room name. Kitchens, wardrobes and fragile items get their own boxes and extra wrapping.",
          },
          {
            title: "Heavy and awkward items",
            icon: Piano,
            body: "Large dining tables, majlis seating, king beds, wardrobes, gym equipment, pianos and pool tables. We take apart what comes apart and pad the rest.",
          },
          {
            title: "Outdoor and garden furniture",
            icon: TreePalm,
            body: "Outdoor sofas, dining sets, swings, BBQs and planters, cleaned of loose sand and wrapped before loading.",
          },
          {
            title: "Setting up the new villa",
            icon: Sofa,
            body: "We unload room by room, refit the furniture, and place everything where you want it.",
          },
        ]}
      />

      <Section tone="white" labelledBy="crew">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id="crew" index="03">
              Typical crew and timing for villa moves
            </SectionHeading>
            <p className="mt-5 text-text">
              This is a guide. The real numbers depend on how much you have, and we confirm them after the survey.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-card border border-line bg-white p-2 sm:p-3">
              <DataTable
                caption="Typical crew and timing for villa moves"
                columns={["Villa size", "Typical crew", "Typical trucks", "Usual time"]}
                rows={[
                  ["2 bedroom villa or townhouse", "4 to 6 movers", "2", "Half to one day"],
                  ["3 bedroom villa", "6 to 8 movers", "2 to 3", "One day"],
                  ["4 bedroom villa", "8 to 10 movers", "3 to 4", "One to two days"],
                  ["5 bedroom villa and above", "10+ movers", "4+", "Two days"],
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <PriceBand
        id="prices"
        index="04"
        heading="Villa moving prices"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Villa moving prices"
            columns={["Villa size", "Starting price"]}
            priceCols={[1]}
            stack={false}
            rows={[
              ["2 bedroom villa or townhouse", "AED 2,000"],
              ["3 bedroom villa", "AED 3,000"],
              ["4 bedroom villa", "AED 4,000"],
              ["5 bedroom villa and above", "AED 5,000"],
            ]}
          />
        }
        notes={
          <p>
            Prices are for villa moves within the same emirate and include packing materials, dismantling and
            reassembly, transport and unpacking. Moving to another emirate adds from AED 500.{" "}
            <strong>You get a fixed price after the survey, and that&apos;s what you pay.</strong>
          </p>
        }
      />

      <ChipGroups
        id="communities"
        index="05"
        heading="Villa communities we move in"
        groups={[
          {
            label: "Dubai",
            items: [
              "Arabian Ranches",
              "Dubai Hills Estate",
              "Emirates Hills",
              "Palm Jumeirah",
              "Jumeirah",
              "Umm Suqeim",
              "Al Barsha",
              "Mirdif",
              "Damac Hills",
              "The Springs",
              "The Meadows",
              "The Lakes",
              "Jumeirah Golf Estates",
              "Mudon",
              "Villanova",
              "Tilal Al Ghaf",
              "Al Furjan",
              "Jumeirah Park",
            ],
          },
          {
            label: "Abu Dhabi",
            items: [
              "Khalifa City",
              "Mohammed Bin Zayed City",
              "Al Raha Gardens",
              "Saadiyat Island",
              "Yas Island",
              "Al Reef",
              "Al Shamkha",
            ],
            note: (
              <>
                See{" "}
                <a href="/movers-in-abu-dhabi/" className="lp-link">
                  movers in Abu Dhabi
                </a>
                .
              </>
            ),
          },
          {
            label: "Sharjah and Ajman",
            items: ["Al Rahmaniya", "Al Suyoh", "Aljada", "Tilal City", "Al Zahia", "Al Helio", "Al Yasmeen"],
            note: (
              <>
                See{" "}
                <a href="/movers-in-sharjah/" className="lp-link">
                  movers in Sharjah
                </a>{" "}
                and{" "}
                <a href="/movers-in-ajman/" className="lp-link">
                  movers in Ajman
                </a>
                .
              </>
            ),
          },
          {
            label: "Northern emirates",
            items: [],
            note: (
              <>
                Al Hamra Village and Mina Al Arab in{" "}
                <a href="/movers-in-ras-al-khaimah/" className="lp-link">
                  Ras Al Khaimah
                </a>
                , and villas across{" "}
                <a href="/movers-in-fujairah/" className="lp-link">
                  Fujairah
                </a>
                .
              </>
            ),
          },
        ]}
      />

      <NoteList
        id="sort-out"
        index="06"
        heading="Things to sort out before a villa move"
        photo={{
          src: "/new/outdoor-furniture-planters-wrapped-villa-pool-dubai.jpg",
          alt: "Outdoor sofa set and planters wrapped in moving blankets beside a villa pool before a villa move",
          ratio: "4/5",
        }}
        items={[
          {
            title: "Gate passes and permits.",
            body: "Most gated communities need a gate pass or move permit for our trucks. Ask your community management a few days before. We'll tell you what they usually need.",
          },
          {
            title: "Light fittings and wall units.",
            body: "We can take down mirrors, wall art and TVs. Chandeliers and anything wired into the wall need an electrician to disconnect first.",
          },
          {
            title: "Pools, plants and outdoor items.",
            body: "Tell us about large planters, garden furniture and outdoor majlis sets when you call, so we bring enough people and the right truck.",
          },
          {
            title: "Two-day moves.",
            body: "For big villas, we can pack on day one and move on day two, so you're not living in boxes for a week.",
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="07"
        heading="Why families choose Hamdan as their villa movers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "We see the villa before we price it.",
            body: "No guessing over the phone for big homes.",
          },
          {
            title: "Fixed price, agreed first.",
            body: "The price is set after the survey and doesn't change on moving day.",
          },
          {
            title: "Enough people on the job.",
            body: "We size the crew to the villa, so the move finishes when we said it would.",
          },
          {
            title: "Insured moves.",
            body: "If something is damaged while we're moving it, we repair it, replace it, or compensate you.",
          },
          {
            title: "Open 24/7.",
            body: "We work Fridays, weekends and public holidays, and reply to every enquiry within 10 minutes.",
          },
          {
            title: "Six years of UAE moves.",
            body: "More than 412 moves completed, with 5-star reviews from customers.",
          },
        ]}
      />

      <Steps
        id="how"
        index="08"
        heading="How a villa move works"
        items={[
          {
            title: "Call or WhatsApp us.",
            body: "Tell us the villa size, where you're moving from and to, and your date.",
          },
          {
            title: "Survey and fixed price.",
            body: "We visit or do a video walk-through, then send a fixed price with the crew size and timing.",
          },
          {
            title: "Packing day.",
            body: "The crew packs every room, labels boxes and dismantles furniture.",
          },
          {
            title: "Moving and set-up.",
            body: "We load, move, unload room by room, refit furniture and place everything where you want it.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="09"
        heading="Questions about villa moving"
        items={[
          {
            q: "How much do villa movers in Dubai cost?",
            a: "A 2 bedroom villa or townhouse starts from AED 2,000, a 3 bedroom villa from AED 3,000, and a 4 bedroom villa from AED 4,000. You get a fixed price after the survey.",
          },
          {
            q: "How long does it take to move a villa?",
            a: "A 3 bedroom villa usually takes one day. A 4 or 5 bedroom villa takes one to two days. We agree the timing with you before the move.",
          },
          {
            q: "Do you visit the villa before giving a price?",
            a: "Yes, for villas we prefer to see the home first, in person or by video call. It's the only way to give an accurate fixed price.",
          },
          {
            q: "Can you move garden and outdoor furniture?",
            a: "Yes. Outdoor sofas, dining sets, swings, BBQs and planters are all part of a villa move. Just mention them when you call.",
          },
          {
            q: "Do you move pianos and pool tables?",
            a: "Yes. Pianos, pool tables and other heavy items get extra padding and, if needed, a custom crate.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          {
            q: "Do you move villas outside Dubai?",
            a: "Yes. We move villas in and between all seven emirates.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Planning a villa move?"
        text="Tell us the villa size and your moving date. We'll call you back within 10 minutes to arrange the survey and price."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
