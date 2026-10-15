import type { Metadata } from "next";
import QuoteForm from "@/components/new/form/QuoteForm";
import Checklist from "@/components/new/sections/Checklist";
import ChipGroups from "@/components/new/sections/ChipGroups";
import DataTable from "@/components/new/sections/DataTable";
import Faq from "@/components/new/sections/Faq";
import FeatureGrid from "@/components/new/sections/FeatureGrid";
import FinalCta from "@/components/new/sections/FinalCta";
import Hero from "@/components/new/sections/Hero";
import LinkList from "@/components/new/sections/LinkList";
import NoteList from "@/components/new/sections/NoteList";
import PriceBand from "@/components/new/sections/PriceBand";
import ServiceList from "@/components/new/sections/ServiceList";
import SplitText from "@/components/new/sections/SplitText";
import Steps from "@/components/new/sections/Steps";
import { OG_IMAGES } from "@/components/new/site/seo";
import Shell from "@/components/new/site/Shell";
import {
  Briefcase,
  Building2,
  House,
  KeyRound,
  Package,
  Sofa,
  Truck,
  Wallet,
  Warehouse,
} from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Movers in Sharjah | Local Packers & Movers From AED 750 | Hamdan";
const description =
  "Sharjah-based movers and packers for flats, villas, offices and single furniture items. Open 24/7. Call or WhatsApp for a price in 10 minutes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/movers-in-sharjah/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/movers-in-sharjah/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need movers in Sharjah";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            Movers and Packers in <Mark>Sharjah</Mark>
          </>
        }
        intro="We're a Sharjah moving company, based in Al Nasiriyah. We move flats, villas, offices and single pieces of furniture across Sharjah and to every other emirate. Local moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your Sharjah moving price"
            footnote="We reply within 10 minutes, day or night."
            page="movers-in-sharjah"
            whatsappMessage={WA}
            defaultFrom="Sharjah"
          />
        }
      />

      <SplitText
        id="local"
        index="01"
        heading="Local movers in Sharjah, not a Dubai company driving over"
        photo={{
          src: "/new/local-movers-crew-al-nahda-sharjah.jpg",
          alt: "Hamdan Movers crew with wrapped furniture outside an apartment building in Al Nahda, Sharjah",
          ratio: "4/5",
        }}
      >
        <p>
          Our office is in Al Nasiriyah, so Sharjah is home ground for us. Our crews work in these streets every week.
          They know which buildings in Al Nahda have tight parking, which older blocks in Rolla have small lifts, and
          when the Sharjah to Dubai roads jam up.
        </p>
        <p>
          That local knowledge saves time on moving day. And it&apos;s a big reason our Sharjah moves usually run on
          schedule.
        </p>
        <p>
          Hamdan Movers and Packers has been moving homes and offices in the UAE for more than six years. We bring the
          packing material, wrap and dismantle your furniture, move it, and set it up again at the new place.
        </p>
      </SplitText>

      <ServiceList
        id="services"
        index="02"
        heading="Our moving services in Sharjah"
        items={[
          {
            title: "Apartment moving",
            icon: Building2,
            body: (
              <>
                Most Sharjah moves are flats, from studios in Al Qasimia to 3 BHK apartments in Al Majaz and Al Khan.
                We pack by room and label every box.{" "}
                <a href="/apartment-movers/" className="lp-link">
                  Apartment movers →
                </a>
              </>
            ),
          },
          {
            title: "Villa moving",
            icon: House,
            body: (
              <>
                Villas in Al Rahmaniya, Al Suyoh, Al Falaj, Al Ramtha, Aljada, Tilal City and Al Zahia. We send a
                bigger crew and enough trucks to finish in one or two days.{" "}
                <a href="/villa-movers/" className="lp-link">
                  Villa movers →
                </a>
              </>
            ),
          },
          {
            title: "House shifting",
            icon: KeyRound,
            body: (
              <>
                Family homes and townhouses, packed and set up again at the new address.{" "}
                <a href="/house-movers/" className="lp-link">
                  House movers →
                </a>
              </>
            ),
          },
          {
            title: "Furniture moving",
            icon: Sofa,
            body: "Just bought a sofa? Selling a bed? Moving a fridge or washing machine across town? We move single items and small loads too, from AED 199.",
          },
          {
            title: "Office and shop moving",
            icon: Briefcase,
            body: (
              <>
                Offices, clinics and shops in Sharjah, moved after closing time or over the weekend.{" "}
                <a href="/office-movers/" className="lp-link">
                  Office movers →
                </a>
              </>
            ),
          },
          {
            title: "Packing services",
            icon: Package,
            body: (
              <>
                Full packing, kitchen only, fragile items only, or just unpacking at the other end.{" "}
                <a href="/packing-services/" className="lp-link">
                  Packing services →
                </a>
              </>
            ),
          },
          {
            title: "Pickup truck with driver",
            icon: Truck,
            body: "For small moves where you don't need a full crew, we have 1.5 ton and 3 ton pickups with a driver, and helpers if you need them.",
          },
          {
            title: "Storage",
            icon: Warehouse,
            body: "Climate-controlled storage for a few days or longer, if your move-out and move-in dates don't line up.",
          },
          {
            title: "Budget moves",
            icon: Wallet,
            body: (
              <>
                Lower-cost moving options start from AED 599.{" "}
                <a href="/affordable-movers/" className="lp-link">
                  Affordable movers →
                </a>
              </>
            ),
          },
        ]}
      />

      <Checklist
        id="included"
        index="03"
        heading="What's included in your Sharjah move"
        items={[
          "A fixed price agreed before moving day",
          "Boxes, bubble wrap, stretch film and moving blankets",
          "Dismantling and reassembly of beds, wardrobes and tables",
          "Covered truck and a trained crew",
          "Loading, transport and unloading",
          "Unpacking and placing furniture where you want it",
        ]}
        after={<p>We don&apos;t add charges on the day. You pay what we quoted.</p>}
      />

      <PriceBand
        id="prices"
        index="04"
        heading="Moving prices in Sharjah"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Moving prices in Sharjah"
            columns={["Home size", "Starting price"]}
            priceCols={[1]}
            stack={false}
            rows={[
              ["Studio", "AED 750"],
              ["1 BHK apartment", "AED 1,100"],
              ["2 BHK apartment", "AED 1,600"],
              ["3 BHK apartment", "AED 2,300"],
              ["4 BHK apartment", "AED 3,000"],
              ["2 bedroom villa", "AED 2,000"],
              ["3 bedroom villa", "AED 3,000"],
              ["4 bedroom villa", "AED 4,000"],
              ["5 bedroom villa and above", "AED 5,000"],
              ["Single furniture item", "AED 199"],
              ["Office or shop", "Price after a quick survey"],
            ]}
          />
        }
        notes={
          <>
            <p>
              These are starting prices for moves within Sharjah. The final price depends on how much you&apos;re
              moving, the floor and lift at both buildings, and how much packing you need. Moving from Sharjah to
              another emirate adds from AED 500.
            </p>
            <p>
              <strong>You get a fixed price before the move, and that&apos;s what you pay.</strong>
            </p>
          </>
        }
      />

      <ChipGroups
        id="areas"
        index="05"
        heading="Areas we cover in Sharjah"
        intro={<p>We work across the whole emirate, including the east coast. These are the areas we move in most:</p>}
        groups={[
          {
            label: "Central Sharjah and the corniche",
            items: [
              "Al Majaz",
              "Al Khan",
              "Al Taawun",
              "Al Mamzar",
              "Al Qasba",
              "Buhaira Corniche",
              "Al Nahda",
              "Al Nasiriyah",
              "Al Qasimia",
              "Abu Shagara",
              "Al Nabba",
              "Rolla",
              "Al Ghuwair",
              "Al Sharq",
            ],
          },
          {
            label: "Residential and villa areas",
            items: [
              "Muwaileh",
              "University City",
              "Al Rahmaniya",
              "Al Suyoh",
              "Al Falaj",
              "Al Ramtha",
              "Al Azra",
              "Al Riqa",
              "Al Jurainah",
              "Al Tay",
              "Al Khezamia",
            ],
          },
          {
            label: "Newer communities",
            items: ["Aljada", "Tilal City", "Al Zahia", "Sharjah Sustainable City", "Al Mamsha"],
          },
          {
            label: "Outside the city",
            items: ["Al Dhaid", "Mleiha"],
            note: "and the east coast towns of Kalba, Khor Fakkan and Dibba Al Hisn",
          },
        ]}
        outro={<p>Your area not listed? Call us anyway. We cover all of Sharjah.</p>}
      />

      <LinkList
        id="sharjah-dubai"
        index="06"
        heading="Moving between Sharjah and Dubai"
        intro={
          <>
            <p>
              Sharjah to Dubai is the route we drive most. Lots of people live in one and work in the other, so they
              move between the two all the time.
            </p>
            <p>
              The roads between the two cities are slow in the morning and evening rush. We time the drive to avoid the
              worst of it. The same crew packs, drives and unloads, and your things stay on one truck.
            </p>
          </>
        }
        photo={{ src: "/new/moving-truck-leaving-sharjah-early-morning.jpg", alt: "Loaded Hamdan Movers truck leaving Sharjah early in the morning for a move to Dubai", ratio: "4/3" }}
        items={[
          <>
            <a href="/movers-and-packers-in-dubai/" className="lp-link">
              Sharjah to Dubai
            </a>{" "}
            and back
          </>,
          <>
            <a href="/movers-in-ajman/" className="lp-link">
              Sharjah to Ajman
            </a>
            , next door and often a short job
          </>,
          <a key="ad" href="/movers-in-abu-dhabi/" className="lp-link">
            Sharjah to Abu Dhabi
          </a>,
          <a key="rak" href="/movers-in-ras-al-khaimah/" className="lp-link">
            Sharjah to Ras Al Khaimah
          </a>,
          <a key="fuj" href="/movers-in-fujairah/" className="lp-link">
            Sharjah to Fujairah
          </a>,
        ]}
      />

      <NoteList
        id="different"
        index="07"
        heading="A few things that make Sharjah moves different"
        tone="dark"
        items={[
          {
            title: "Older buildings, smaller lifts.",
            body: "Many buildings in Rolla, Al Nabba, Abu Shagara and Al Qasimia have small lifts or narrow stairs. We take big wardrobes and beds apart so they go down without damage, and put them together again at the other end.",
          },
          {
            title: "Parking is tight in the busy areas.",
            body: "In Al Nahda, Al Taawun and Al Majaz, finding a spot for a truck can take time. We plan the arrival time and where the truck will stop before the day.",
          },
          {
            title: "Building rules.",
            body: "Some towers ask for a move permit or a lift booking from the building management. Check with your building a few days before. We'll tell you what they usually ask for.",
          },
          {
            title: "Summer moves.",
            body: "From June to September we start early in the morning, before the heat peaks.",
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="08"
        heading="Why people in Sharjah book Hamdan Movers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "We're based here.",
            body: "Our office is in Al Nasiriyah, so we know Sharjah well and reach most areas quickly.",
          },
          {
            title: "A fixed price first.",
            body: "You know the total before we start, with no surprises halfway through.",
          },
          {
            title: "A reply in 10 minutes.",
            body: "Call, WhatsApp or fill in the form, and we'll come back with a price quickly, at any hour.",
          },
          {
            title: "Open 24/7.",
            body: "We work Fridays, nights and public holidays. Same-day moves are possible when a truck is free.",
          },
          {
            title: "Insured moves.",
            body: "If something is damaged while we move it, we repair it, replace it, or compensate you.",
          },
          {
            title: "Six years and 412+ moves.",
            body: "Customers give us 5-star reviews for careful packing and turning up on time.",
          },
        ]}
      />

      <Steps
        id="how"
        index="09"
        heading="How your move works"
        items={[
          {
            title: "Call or WhatsApp us.",
            body: "Tell us what you're moving, from where to where, and when.",
          },
          {
            title: "Get your fixed price.",
            body: "We ask a few questions, or visit first for villas and large homes, and confirm the price.",
          },
          {
            title: "We pack and load.",
            body: "The crew arrives on time, packs, dismantles furniture and loads the truck.",
          },
          {
            title: "We deliver and set up.",
            body: "We unload, refit the furniture and put things where you want them.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="10"
        heading="Questions people ask about moving in Sharjah"
        items={[
          {
            q: "How much do movers and packers in Sharjah cost?",
            a: "A studio starts from AED 750, a 1 BHK from AED 1,100 and a 3 bedroom villa from AED 3,000. A single furniture item starts from AED 199. We confirm a fixed price before the move.",
          },
          {
            q: "Can you move just one piece of furniture?",
            a: "Yes. We move single items like sofas, beds, fridges and washing machines, and small loads. For small jobs, a pickup with a driver and a helper is often the cheapest option.",
          },
          {
            q: "How quickly can you come?",
            a: "Often the same day or the next day, depending on truck availability. Because we're based in Sharjah, we can usually reach Sharjah addresses faster than companies coming from Dubai.",
          },
          {
            q: "Do you move from Sharjah to Dubai?",
            a: "Yes, every week. We plan the drive around rush hour, and the same crew handles both ends of the move.",
          },
          {
            q: "Do you work on Fridays and at night?",
            a: "Yes. We're open 24/7, including Fridays and public holidays.",
          },
          {
            q: "Is packing material included?",
            a: "Yes. Boxes, bubble wrap, stretch film and blankets are included in the price.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          {
            q: "Do you cover Khor Fakkan and Kalba?",
            a: "Yes. We move to and from Sharjah's east coast towns, as well as Al Dhaid and the rest of the emirate.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving in Sharjah soon?"
        text="We're local and we're open now. Tell us your home size and date, and we'll send a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
