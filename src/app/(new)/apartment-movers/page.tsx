import type { Metadata } from "next";
import QuoteForm from "@/components/new/form/QuoteForm";
import Checklist from "@/components/new/sections/Checklist";
import ChipGroups from "@/components/new/sections/ChipGroups";
import DataTable from "@/components/new/sections/DataTable";
import Faq from "@/components/new/sections/Faq";
import FeatureGrid from "@/components/new/sections/FeatureGrid";
import FinalCta from "@/components/new/sections/FinalCta";
import GroupedChecklist from "@/components/new/sections/GroupedChecklist";
import Hero from "@/components/new/sections/Hero";
import PriceBand from "@/components/new/sections/PriceBand";
import Section, { SectionHeading } from "@/components/new/sections/Section";
import SplitText from "@/components/new/sections/SplitText";
import Steps from "@/components/new/sections/Steps";
import { OG_IMAGES } from "@/components/new/site/seo";
import Shell from "@/components/new/site/Shell";
import { Building2, Users } from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Apartment Movers in Dubai | Flat Shifting From AED 750 | Hamdan";
const description =
  "Apartment movers in Dubai for studios to 4 BHK flats. We plan around your NOC and lift slot, pack, move and set up. Open 24/7.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/apartment-movers/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/apartment-movers/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need apartment movers";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            <Mark>Apartment Movers</Mark> in Dubai
          </>
        }
        intro="Studios to 4 BHK flats, in any tower or building. We plan around your building permit and service lift slot, pack and move everything, and set your new flat up the same day. Apartment moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your apartment moving price"
            footnote="We reply within 10 minutes, day or night."
            page="apartment-movers"
            whatsappMessage={WA}
          />
        }
      />

      <SplitText
        id="lift-slot"
        index="01"
        heading="In a tower, the lift slot decides the move"
        photo={{
          src: "/new/movers-loading-furniture-tower-service-lift-apartment-move.jpg",
          alt: "Hamdan movers loading wrapped furniture into a tower service lift during an apartment move in Dubai",
          ratio: "4/5",
        }}
      >
        <p>
          When an apartment move in Dubai goes wrong, it&apos;s rarely the driving. It&apos;s the building. The permit
          wasn&apos;t ready, so security stopped the truck. The service lift was booked for two hours and the movers
          needed four. The loading bay was full.
        </p>
        <p>
          Our apartment movers plan around all of that. Before moving day we ask about your building&apos;s rules, your
          lift booking and where the truck can stop. Then we send enough people to finish inside your slot.
        </p>
        <p>
          Hamdan Movers and Packers has been moving flats across the UAE for more than six years. We pack, move, refit
          the furniture and set up your new flat, usually all in one day.
        </p>
      </SplitText>

      <Checklist
        id="included"
        index="02"
        heading="What our apartment moving service includes"
        tone="gray"
        items={[
          "A fixed price agreed before the move",
          "Boxes, packing paper, bubble wrap, stretch film and blankets",
          "Packing room by room, with every box labelled for its new room",
          "Dismantling and refitting beds, wardrobes and tables",
          "Wrapping furniture so it doesn't knock lift walls and corridors",
          "Covered truck and a trained crew",
          "Unloading, unpacking and placing furniture where you want it",
        ]}
        after={<p>You pay what we quoted. There are no extra charges on moving day.</p>}
      />

      <PriceBand
        id="prices"
        index="03"
        heading="Apartment moving prices"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Apartment moving prices"
            columns={["Apartment size", "Starting price", "Usual time"]}
            priceCols={[1]}
            rows={[
              ["Studio", "AED 750", "3 to 4 hours"],
              ["1 BHK", "AED 1,100", "Half a day"],
              ["2 BHK", "AED 1,600", "Most of a day"],
              ["3 BHK", "AED 2,300", "One day"],
              ["4 BHK", "AED 3,000", "One day, sometimes a little longer"],
              ["Single item", "AED 199", "Depends on the item"],
            ]}
          />
        }
        notes={
          <p>
            Prices are for apartment moves within the same emirate. The final price depends on how much you have, the
            floor and lift access at both buildings, and how much packing you want. Moving to another emirate adds from
            AED 500.
          </p>
        }
      />

      <Section tone="white" labelledBy="sizes">
        <SectionHeading id="sizes" index="04">
          Small flats and big flats
        </SectionHeading>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-0">
          <div className="border-t-2 border-ink pt-6 md:pr-10">
            <span className="grid h-11 w-11 place-items-center rounded-card bg-ink text-brand">
              <Building2 aria-hidden="true" className="h-[22px] w-[22px]" />
            </span>
            <h3 className="mt-4">Studios and 1 BHK flats</h3>
            <p className="mt-2 text-text">
              Small flats move fast, but the lift slot still matters. We send a compact crew and one truck, pack and load
              in a few hours, and set up the new place the same day. It suits singles and couples who want to be moved
              in by evening.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-6 md:border-l md:border-l-line md:pl-10">
            <span className="grid h-11 w-11 place-items-center rounded-card bg-brand text-ink">
              <Users aria-hidden="true" className="h-[22px] w-[22px]" />
            </span>
            <h3 className="mt-4">2, 3 and 4 BHK flats</h3>
            <p className="mt-2 text-text">
              More rooms means more boxes, more furniture to dismantle, and often a kitchen full of glassware. We send a
              bigger crew and plan the day so loading fits inside your lift booking. If the slot is short, we pack the
              day before and move on the day.
            </p>
          </div>
        </div>
      </Section>

      <GroupedChecklist
        id="checklist"
        index="05"
        heading="Your apartment moving checklist"
        tone="gray"
        groups={[
          {
            title: "When you sign the new lease",
            items: [
              "Book your movers and confirm the date",
              "Ask both buildings for a move-out and move-in permit (often called an NOC) and book the service lifts",
              "Check if your building only allows moves at certain times or on certain days",
            ],
          },
          {
            title: "One week before",
            items: [
              "Arrange your Ejari, and your DEWA move-out and move-in",
              "Ask your landlord or agent when the move-out inspection is, so you can get your deposit back",
              "Clear out anything you don't want to take",
            ],
          },
          {
            title: "The day before",
            items: [
              "Defrost the fridge and freezer",
              "Confirm the lift booking time with building security",
              "Keep documents, keys, chargers and medicines in a separate bag",
            ],
          },
          {
            title: "On moving day",
            items: [
              "Meet our supervisor at the lift",
              "Check each room and cupboard before the truck leaves",
              "Return keys and access cards to the building",
            ],
          },
        ]}
      />

      <ChipGroups
        id="areas"
        index="06"
        heading="Apartment areas we move in"
        groups={[
          {
            label: "Dubai",
            items: [
              "Dubai Marina",
              "JBR",
              "JLT",
              "Downtown Dubai",
              "Business Bay",
              "JVC",
              "JVT",
              "Al Barsha",
              "Al Furjan",
              "Dubai Sports City",
              "Dubai Silicon Oasis",
              "International City",
              "Discovery Gardens",
              "Deira",
              "Bur Dubai",
              "Karama",
              "Al Nahda",
              "Al Qusais",
            ],
          },
          {
            label: "Other emirates",
            items: [],
            note: (
              <>
                Al Reem Island and Al Raha Beach in{" "}
                <a href="/movers-in-abu-dhabi/" className="lp-link">
                  Abu Dhabi
                </a>
                , Al Majaz, Al Khan and Al Taawun in{" "}
                <a href="/movers-in-sharjah/" className="lp-link">
                  Sharjah
                </a>
                , Al Nuaimiya and Al Rashidiya in{" "}
                <a href="/movers-in-ajman/" className="lp-link">
                  Ajman
                </a>
                , plus flats in{" "}
                <a href="/movers-in-ras-al-khaimah/" className="lp-link">
                  Ras Al Khaimah
                </a>{" "}
                and{" "}
                <a href="/movers-in-fujairah/" className="lp-link">
                  Fujairah
                </a>
                .
              </>
            ),
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="07"
        heading="Why tenants book Hamdan as their apartment movers"
        tone="gray"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "We plan around your building.",
            body: "We ask about permits, lift times and loading bays before the day, so security doesn't stop the truck.",
          },
          {
            title: "We finish inside your slot.",
            body: "We send enough people to load within your service lift booking.",
          },
          {
            title: "Fixed price first.",
            body: "You know the total before moving day.",
          },
          {
            title: "Insured moves.",
            body: "If something is damaged while we're moving it, we repair it, replace it, or compensate you.",
          },
          {
            title: "Open 24/7.",
            body: "We move flats on Fridays, at night and on public holidays, and reply to every enquiry within 10 minutes.",
          },
          {
            title: "Six years of moves.",
            body: "More than 412 moves completed across the UAE, with 5-star reviews from customers.",
          },
        ]}
      />

      <Steps
        id="how"
        index="08"
        heading="How your apartment move works"
        tone="white"
        items={[
          {
            title: "Call or WhatsApp us.",
            body: "Tell us your flat size, both buildings, and the date.",
          },
          {
            title: "Get your fixed price.",
            body: "We ask a few questions about the buildings and lifts, then confirm the price.",
          },
          {
            title: "We pack and load.",
            body: "The crew arrives on time for your lift slot, packs, dismantles and loads.",
          },
          {
            title: "We deliver and set up.",
            body: "We unload, refit the furniture and place everything where you want it.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="09"
        heading="Questions about moving an apartment"
        tone="gray"
        items={[
          {
            q: "How much do apartment movers in Dubai cost?",
            a: "A studio starts from AED 750, a 1 BHK from AED 1,100 and a 2 BHK from AED 1,600. You get a fixed price before the move.",
          },
          {
            q: "Do I need a permit to move out of my apartment?",
            a: "In most Dubai towers, yes. Building management usually needs a move-out or move-in permit (often called an NOC) and a service lift booking. Ask them a few days before your move.",
          },
          {
            q: "How long does it take to move a 1 BHK?",
            a: "Usually half a day, including packing, moving and setting up. It depends on the lift access at both buildings.",
          },
          {
            q: "What if my lift slot is short?",
            a: "Tell us when you book. We can send more people, or pack the day before so moving day is only loading and unloading.",
          },
          {
            q: "Can you move my flat on a weekend?",
            a: "Yes, we work every day. Some buildings don't allow moves on certain days, so check with your building first.",
          },
          {
            q: "Will you protect the building's lifts and corridors?",
            a: "We wrap furniture properly so it doesn't knock the lift walls or corridors. Some buildings also ask for lift protection, and we'll follow their rules.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving your flat soon?"
        text="Tell us your flat size, both buildings and your date. We'll send a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
