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
import PriceBand from "@/components/new/sections/PriceBand";
import ServiceList from "@/components/new/sections/ServiceList";
import SplitText from "@/components/new/sections/SplitText";
import Steps from "@/components/new/sections/Steps";
import { OG_IMAGES } from "@/components/new/site/seo";
import Shell from "@/components/new/site/Shell";
import { Briefcase, Building2, House, Package, Piano, Wallet, Warehouse, Wrench } from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Movers and Packers in Dubai | From AED 750 | Hamdan Movers";
const description =
  "Movers and packers in Dubai for apartments, villas and offices. We pack, move and set up again. Open 24/7. Get your price in 10 minutes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/movers-and-packers-in-dubai/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/movers-and-packers-in-dubai/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need movers in Dubai";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            Movers and Packers in <Mark>Dubai</Mark>
          </>
        }
        intro="Apartment, villa and office moves anywhere in Dubai. We pack your things, move them, and set everything up again at the new place. Local moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send us your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your Dubai moving price"
            footnote="We reply within 10 minutes, day or night."
            page="movers-and-packers-in-dubai"
            whatsappMessage={WA}
            defaultFrom="Dubai"
          />
        }
      />

      <SplitText
        id="whole-job"
        index="01"
        heading="A moving company in Dubai that handles the whole job"
        photo={{
          src: "/new/movers-loading-wrapped-sofa-service-lift-dubai.jpg",
          alt: "Hamdan movers carrying a blanket-wrapped sofa into a service lift in a Dubai residential tower",
          ratio: "4/5",
        }}
      >
        <p>
          Moving in Dubai comes with its own problems. Your building wants a permit. The service lift is yours for two
          hours. There&apos;s nowhere to park the truck, and in August it&apos;s 45°C outside.
        </p>
        <p>
          Hamdan Movers and Packers has been moving homes and offices in the UAE for more than six years. Our crews know
          how Dubai buildings work, so they plan around your lift slot and loading bay instead of finding out on the day.
        </p>
        <p>
          We bring the boxes and packing material. We take apart the beds and wardrobes and wrap the furniture. Then we
          load, drive, unload, and put it all back together. Most apartment moves in Dubai are finished in one day.
        </p>
      </SplitText>

      <ServiceList
        id="services"
        index="02"
        heading="Our moving services in Dubai"
        items={[
          {
            title: "Apartment and house moving",
            icon: Building2,
            body: (
              <>
                Studios, 1 to 4 BHK flats and townhouses. We pack room by room and label every box so unpacking is
                quick.{" "}
                <a href="/apartment-movers/" className="lp-link">
                  Apartment movers →
                </a>{" "}
                ·{" "}
                <a href="/house-movers/" className="lp-link">
                  House movers →
                </a>
              </>
            ),
          },
          {
            title: "Villa moving",
            icon: House,
            body: (
              <>
                Bigger homes need more people, more trucks and a proper plan. We send a crew sized for your villa and
                move it in one or two days.{" "}
                <a href="/villa-movers/" className="lp-link">
                  Villa movers →
                </a>
              </>
            ),
          },
          {
            title: "Office moving",
            icon: Briefcase,
            body: (
              <>
                Desks, workstations, IT equipment, files and meeting rooms. We can move you at night or over the
                weekend so your team is back at work the next morning.{" "}
                <a href="/office-movers/" className="lp-link">
                  Office movers →
                </a>
              </>
            ),
          },
          {
            title: "Packing and unpacking",
            icon: Package,
            body: (
              <>
                Full packing, or only the kitchen, or only the fragile things. You choose.{" "}
                <a href="/packing-services/" className="lp-link">
                  Packing services →
                </a>
              </>
            ),
          },
          {
            title: "Furniture dismantling and assembly",
            icon: Wrench,
            body: "Beds, wardrobes, dining tables and modular units are taken apart, moved, and fitted again at the new place.",
          },
          {
            title: "Storage",
            icon: Warehouse,
            body: "Need a gap between move-out and move-in? We keep your things in climate-controlled storage for a few days or a few months.",
          },
          {
            title: "Pianos, artwork and special items",
            icon: Piano,
            body: "Pianos, pool tables, artwork and antiques get extra padding or a custom crate.",
          },
          {
            title: "Budget moves",
            icon: Wallet,
            body: (
              <>
                Moving on a tight budget? Our lower-cost options start from AED 599.{" "}
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
        heading="What's included in your Dubai move"
        items={[
          "A clear, fixed price before the move",
          "Boxes, bubble wrap, stretch film and moving blankets",
          "Dismantling and reassembly of beds, wardrobes and tables",
          "Covered truck and a trained moving crew",
          "Careful loading and unloading",
          "Unpacking and placing furniture where you want it",
        ]}
        after={<p>You pay for what we quoted. There are no hidden charges added on moving day.</p>}
      />

      <PriceBand
        id="prices"
        index="04"
        heading="Moving prices in Dubai"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Moving prices in Dubai"
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
              ["Single item", "AED 199"],
              ["Office", "Price after a quick survey"],
            ]}
          />
        }
        notes={
          <>
            <p>
              These are starting prices for moves within Dubai. Your final price depends on how much you have, the floor
              and lift access at both buildings, and how much packing you need. Moving to another emirate adds from AED
              500.
            </p>
            <p>
              <strong>We confirm the price before moving day, and that&apos;s the price you pay.</strong>
            </p>
          </>
        }
      />

      <ChipGroups
        id="areas"
        index="05"
        heading="Areas we cover in Dubai"
        intro={<p>We move people across all of Dubai. These are the areas we work in most:</p>}
        groups={[
          {
            label: "Towers and apartments",
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
              "Discovery Gardens",
              "Dubai Sports City",
              "Dubai Silicon Oasis",
              "International City",
            ],
          },
          {
            label: "Older neighbourhoods",
            items: ["Deira", "Bur Dubai", "Karama", "Al Nahda", "Al Qusais", "Muhaisnah", "Satwa"],
          },
          {
            label: "Villa communities",
            items: [
              "Arabian Ranches",
              "Dubai Hills Estate",
              "Damac Hills",
              "Mirdif",
              "Jumeirah",
              "Umm Suqeim",
              "The Springs",
              "The Meadows",
              "Mudon",
              "Al Warqa",
            ],
          },
        ]}
        outro={<p>Don&apos;t see your area? We still cover it. Just call.</p>}
      />

      <LinkList
        id="other-emirates"
        index="06"
        heading="Moving from Dubai to another emirate"
        intro={
          <p>
            A lot of our moves start in Dubai and end somewhere else, or the other way round. The same crew packs,
            drives and unloads, so nothing changes hands on the way.
          </p>
        }
        photo={{ src: "/new/hamdan-moving-truck-loading-dubai-apartment.jpg", alt: "Covered Hamdan Movers truck being loaded outside an apartment building in Dubai for an inter-emirate move", ratio: "4/3" }}
        items={[
          <>
            <a href="/movers-in-sharjah/" className="lp-link">
              Dubai to Sharjah
            </a>{" "}
            and back, with times planned around rush hour on the Sharjah road
          </>,
          <>
            <a href="/movers-in-abu-dhabi/" className="lp-link">
              Dubai to Abu Dhabi
            </a>
            , usually done in one day
          </>,
          <a key="ajman" href="/movers-in-ajman/" className="lp-link">
            Dubai to Ajman
          </a>,
          <a key="rak" href="/movers-in-ras-al-khaimah/" className="lp-link">
            Dubai to Ras Al Khaimah
          </a>,
          <a key="fuj" href="/movers-in-fujairah/" className="lp-link">
            Dubai to Fujairah
          </a>,
        ]}
      />

      <SplitText
        id="permits"
        index="07"
        heading="Building permits and service lifts in Dubai"
        tone="dark"
        reverse
        photo={{
          src: "/new/moving-truck-tower-loading-bay-permit-dubai.jpg",
          alt: "Hamdan Movers truck at a Dubai tower loading bay while the crew shows the move permit to building security",
          ratio: "4/3",
        }}
      >
        <p>
          Most Dubai towers and many communities need a move-out or move-in permit (often called an NOC) from building
          management. They usually ask you to book the service lift as well. If you skip this, security can stop the
          truck at the gate.
        </p>
        <p>
          When you book with us, we tell you what your building is likely to ask for. We plan the move around your lift
          slot and send enough people to finish inside it. We also wrap furniture properly so it doesn&apos;t knock the
          lift walls or corridors on the way out.
        </p>
        <p>In summer we start early in the morning. It&apos;s easier on your things, and on our crew.</p>
      </SplitText>

      <FeatureGrid
        id="why"
        index="08"
        heading="Why people in Dubai book Hamdan Movers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "A fixed price before we start.",
            body: "You know the total before moving day. We don't add extra charges halfway through.",
          },
          {
            title: "A reply within 10 minutes.",
            body: "Call, WhatsApp or fill in the form, and we'll get back to you with a price quickly, any time of day.",
          },
          {
            title: "Open 24/7.",
            body: "We work Fridays, weekends, nights and public holidays. Same-day moves are possible when a truck is free.",
          },
          {
            title: "Insured moves.",
            body: "If something gets damaged while we're moving it, we repair it, replace it, or compensate you.",
          },
          {
            title: "Trained crews.",
            body: "Our movers pack, lift and fit furniture every day. They know how to get a sofa round a tight corridor without scraping it.",
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
            body: "Tell us your home size, where you're moving from and to, and the date.",
          },
          {
            title: "Get a fixed price.",
            body: "We ask a few questions, or visit first if it's a big home, then send a fixed price.",
          },
          {
            title: "We pack and load.",
            body: "The crew arrives on time, packs everything, takes apart the furniture and loads the truck.",
          },
          {
            title: "We deliver and set up.",
            body: "We unload, put the furniture back together, and place things where you want them.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="10"
        heading="Questions people ask about moving in Dubai"
        items={[
          {
            q: "How much do movers and packers in Dubai cost?",
            a: "A studio starts from AED 750, a 1 BHK from AED 1,100 and a 3 bedroom villa from AED 3,000. The final price depends on how much you have and the access at both buildings. We confirm a fixed price before the move.",
          },
          {
            q: "How soon can you move me?",
            a: "Often the same day or the next day, if we have a free truck. The last week of the month is busy in Dubai because many leases end then, so book three to five days ahead if you can.",
          },
          {
            q: "Do you work on Fridays and at night?",
            a: "Yes. We're open 24/7, including Fridays and public holidays. Night moves are popular for offices and for buildings that limit daytime moves.",
          },
          {
            q: "Do you bring boxes and packing material?",
            a: "Yes. Boxes, bubble wrap, stretch film and blankets are included in the price.",
          },
          {
            q: "What happens if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          {
            q: "Do I need a permit to move in Dubai?",
            a: "Most towers and many communities ask for a move-out or move-in permit and a service lift booking. Contact your building management a few days before the move. We'll tell you what they usually need.",
          },
          {
            q: "How long does a move take?",
            a: "A studio or 1 BHK usually takes half a day. A 2 or 3 BHK takes about a day. Villas take one to two days, depending on size.",
          },
          {
            q: "Can you move me from Dubai to another emirate?",
            a: "Yes. We move to and from all seven emirates, and to other GCC countries.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving in Dubai soon?"
        text="Tell us your home size and moving date. We'll send you a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
