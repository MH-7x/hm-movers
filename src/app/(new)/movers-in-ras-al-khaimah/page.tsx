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
import { Briefcase, Building2, House, KeyRound, Package, Sofa, Wallet, Warehouse } from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Movers in Ras Al Khaimah | Packers & Movers From AED 750 | Hamdan";
const description =
  "Movers and packers in Ras Al Khaimah for flats, villas and offices, plus RAK to Dubai and Sharjah moves. Open 24/7. Price in 10 minutes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/movers-in-ras-al-khaimah/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/movers-in-ras-al-khaimah/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need movers in Ras Al Khaimah";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            Movers and Packers in <Mark>Ras Al Khaimah</Mark>
          </>
        }
        intro="Moving within RAK, or between Ras Al Khaimah and Dubai or Sharjah? We pack your home, move it, and set it up again at the other end. Local moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your Ras Al Khaimah moving price"
            footnote="We reply within 10 minutes, day or night."
            page="movers-in-ras-al-khaimah"
            whatsappMessage={WA}
            defaultFrom="Ras Al Khaimah"
          />
        }
      />

      <SplitText
        id="local-rak"
        index="01"
        heading="Movers who come to Ras Al Khaimah, not just through it"
        photo={{
          src: "/new/movers-wrapping-outdoor-furniture-villa-al-hamra-rak.jpg",
          alt: "Hamdan movers wrapping outdoor furniture at a villa in Al Hamra, Ras Al Khaimah",
          ratio: "4/5",
        }}
      >
        <p>
          A lot of moving companies treat Ras Al Khaimah as a long-distance add-on. We don&apos;t. We take local RAK
          moves too: flat to flat in Al Nakheel, villa to villa in Al Hamra Village, office to office near the free
          zone.
        </p>
        <p>
          Our crews drive up from our base in Sharjah, about an hour away. So we start RAK moves early, finish in
          daylight, and charge the same starting prices as anywhere else for local moves.
        </p>
        <p>
          Hamdan Movers and Packers has been moving homes and offices in the UAE for more than six years. We bring the
          boxes and packing material, take apart the big furniture, move everything on a covered truck, and set it up
          again at the new place.
        </p>
      </SplitText>

      <ServiceList
        id="services"
        index="02"
        heading="Our moving services in Ras Al Khaimah"
        items={[
          {
            title: "Apartment moving",
            icon: Building2,
            body: (
              <>
                Flats in Al Nakheel, Al Dhait, Julphar Towers, Al Marjan Island and Mina Al Arab. We pack by room and
                label every box.{" "}
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
                RAK villas often come with big plots, outdoor furniture and majlis seating. We send a bigger crew and
                plan villa moves over one or two days.{" "}
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
            title: "Office moving",
            icon: Briefcase,
            body: (
              <>
                Offices and small businesses in RAK city and the free zones, moved after hours or on the weekend.{" "}
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
                Full packing, part packing, fragile items only, or just unpacking.{" "}
                <a href="/packing-services/" className="lp-link">
                  Packing services →
                </a>
              </>
            ),
          },
          {
            title: "Furniture and single items",
            icon: Sofa,
            body: "A sofa, a bed, a fridge or a small load, moved from AED 199.",
          },
          {
            title: "Storage",
            icon: Warehouse,
            body: "Climate-controlled storage if your move-out and move-in dates don't match.",
          },
          {
            title: "Budget moves",
            icon: Wallet,
            body: (
              <>
                Lower-cost options start from AED 599.{" "}
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
        heading="What's included in your RAK move"
        items={[
          "A fixed price agreed before moving day",
          "Boxes, bubble wrap, stretch film and moving blankets",
          "Dismantling and reassembly of beds, wardrobes and tables",
          "Covered truck and a trained crew",
          "Loading, transport and unloading",
          "Unpacking and placing furniture where you want it",
        ]}
        after={<p>The price we quote is the price you pay. No extra charges on the day.</p>}
      />

      <PriceBand
        id="prices"
        index="04"
        heading="Moving prices in Ras Al Khaimah"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Moving prices in Ras Al Khaimah"
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
              ["Office", "Price after a quick survey"],
            ]}
          />
        }
        notes={
          <>
            <p>
              These are starting prices for moves within Ras Al Khaimah. Your final price depends on how much you&apos;re
              moving, the access at both homes, and how much packing you need. Moves between RAK and another emirate add
              from AED 500.
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
        heading="Areas we cover in Ras Al Khaimah"
        intro={<p>We move people across the whole emirate. These are the areas we get asked about most:</p>}
        groups={[
          {
            label: "RAK city",
            items: [
              "Al Nakheel",
              "Al Dhait North and South",
              "Al Mamourah",
              "Khuzam",
              "Al Qusaidat",
              "Julphar",
              "Al Seer",
              "Al Uraibi",
              "Dafan Al Nakheel",
              "Al Muntasir",
              "Old Town",
            ],
          },
          {
            label: "Waterfront and gated communities",
            items: ["Al Hamra Village", "Mina Al Arab", "Al Marjan Island", "Bab Al Bahr", "Yasmin Village"],
          },
          {
            label: "Further out",
            items: ["Al Jazirah Al Hamra", "Al Rams", "Khor Khwair", "Al Ghail", "Digdaga", "Shamal"],
          },
          {
            label: "Business areas",
            items: ["RAKEZ free zone areas", "Al Hamra industrial zone"],
          },
        ]}
        outro={<p>If your area isn&apos;t on the list, call us. We cover all of RAK.</p>}
      />

      <LinkList
        id="routes"
        index="06"
        heading="Moving between Ras Al Khaimah and other emirates"
        intro={
          <p>
            Many RAK moves are people coming up from Dubai or Sharjah for more space and lower rent, or heading back
            down for work. We do these routes every week.
          </p>
        }
        photo={{ src: "/new/moving-truck-emirates-road-ras-al-khaimah.jpg", alt: "Hamdan Movers truck on Emirates Road travelling between Ras Al Khaimah and other emirates", ratio: "4/3" }}
        items={[
          <>
            <a href="/movers-and-packers-in-dubai/" className="lp-link">
              Ras Al Khaimah to Dubai
            </a>
            . About 100 km, and most apartment moves are done in one day.
          </>,
          <>
            <a href="/movers-in-sharjah/" className="lp-link">
              Ras Al Khaimah to Sharjah
            </a>
            . Our home route, roughly an hour each way.
          </>,
          <a key="ajm" href="/movers-in-ajman/" className="lp-link">
            Ras Al Khaimah to Ajman
          </a>,
          <>
            <a href="/movers-in-fujairah/" className="lp-link">
              Ras Al Khaimah to Fujairah
            </a>
            , across the mountain road to the east coast
          </>,
          <>
            <a href="/movers-in-abu-dhabi/" className="lp-link">
              Ras Al Khaimah to Abu Dhabi
            </a>
            , a full day&apos;s job, or two days for villas
          </>,
        ]}
        after={<p>The same crew packs, drives and unloads. Your things stay on one truck from door to door.</p>}
      />

      <NoteList
        id="plan"
        index="07"
        heading="What to plan for in Ras Al Khaimah"
        tone="dark"
        items={[
          {
            title: "Start early.",
            body: "Longer drives mean we like to load in the morning. For moves to or from Dubai, an early start also avoids traffic as you get closer to the city.",
          },
          {
            title: "Book a day or two ahead if you can.",
            body: "Same-day RAK moves are possible when a truck is free. But a day or two of notice is the safest way to get the date and time you want.",
          },
          {
            title: "Gated communities and towers.",
            body: "Al Hamra Village, Mina Al Arab and the Al Marjan Island towers usually ask for a gate pass, a move permit or a lift booking. Ask your community or building management a few days before. We'll tell you what they usually need.",
          },
          {
            title: "Villas with outdoor furniture.",
            body: "If you have garden sets, swings, BBQs or a majlis outside, tell us when you call. It helps us send the right crew and truck.",
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="08"
        heading="Why people in Ras Al Khaimah book Hamdan Movers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "Local RAK moves, not just long-distance ones.",
            body: "We take flat-to-flat and villa-to-villa moves inside RAK at our normal starting prices.",
          },
          {
            title: "A fixed price first.",
            body: "You know the total before moving day. It doesn't change once we start.",
          },
          {
            title: "Replies within 10 minutes.",
            body: "Call, WhatsApp or use the form, and we'll get back to you with a price at any hour.",
          },
          {
            title: "Open 24/7.",
            body: "We work Fridays, nights and public holidays.",
          },
          {
            title: "Insured moves.",
            body: "If something is damaged while we move it, we repair it, replace it, or compensate you.",
          },
          {
            title: "Six years of UAE moves.",
            body: "More than 412 moves completed, with 5-star reviews from customers.",
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
            body: "Tell us your home size, where you're moving from and to, and your date.",
          },
          {
            title: "Get your fixed price.",
            body: "We ask a few questions, or visit first for villas and large homes, and confirm the price.",
          },
          {
            title: "We pack and load.",
            body: "The crew arrives early, packs everything, dismantles furniture and loads the truck.",
          },
          {
            title: "We deliver and set up.",
            body: "We unload, refit the furniture and put everything where you want it.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="10"
        heading="Questions people ask about moving in Ras Al Khaimah"
        items={[
          {
            q: "How much do packers and movers in Ras Al Khaimah cost?",
            a: "A studio starts from AED 750, a 2 BHK from AED 1,600 and a 3 bedroom villa from AED 3,000 for moves within RAK. Moves to or from another emirate add from AED 500. You get a fixed price before the move.",
          },
          {
            q: "Do you do local moves inside Ras Al Khaimah?",
            a: "Yes. We move flats, villas and offices within RAK, not only long-distance moves to and from other emirates.",
          },
          {
            q: "How long does a move from RAK to Dubai take?",
            a: "Most apartment moves between Ras Al Khaimah and Dubai are done in one day. Large villas can take two days.",
          },
          {
            q: "Can you move me the same day?",
            a: "Sometimes, if a truck is free. For Ras Al Khaimah, booking a day or two ahead is the safest way to get your preferred date.",
          },
          {
            q: "Do you cover Al Hamra Village, Mina Al Arab and Al Marjan Island?",
            a: "Yes. We move people in and out of all three regularly. These communities usually need a gate pass or move permit, so ask your management a few days before.",
          },
          {
            q: "Is packing material included?",
            a: "Yes. Boxes, bubble wrap, stretch film and moving blankets are included in your price.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          {
            q: "Do you work on Fridays?",
            a: "Yes. We're open 24/7, including Fridays and public holidays.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving in Ras Al Khaimah soon?"
        text="Tell us your home size, where you're moving to, and the date. We'll send a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
