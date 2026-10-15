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
import { Briefcase, Building2, House, Package, Sofa, Wallet, Warehouse, Wrench } from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Movers in Abu Dhabi | Packers & Movers From AED 750 | Hamdan";
const description =
  "Movers and packers in Abu Dhabi for flats, villas and offices. Packing, furniture fitting and insured transport. Open 24/7. Price in 10 minutes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/movers-in-abu-dhabi/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/movers-in-abu-dhabi/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need movers in Abu Dhabi";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            Movers and Packers in <Mark>Abu Dhabi</Mark>
          </>
        }
        intro="Moving a flat on Reem Island, a villa in Khalifa City or an office downtown? We pack, move and set everything up again, anywhere in Abu Dhabi. Local moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your Abu Dhabi moving price"
            footnote="We reply within 10 minutes, day or night."
            page="movers-in-abu-dhabi"
            whatsappMessage={WA}
            defaultFrom="Abu Dhabi"
          />
        }
      />

      <SplitText
        id="whole-city"
        index="01"
        heading="A moving company for the whole of Abu Dhabi"
        photo={{
          src: "/new/movers-loading-villa-furniture-truck-abu-dhabi.jpg",
          alt: "Hamdan movers loading wrapped villa furniture onto a moving truck outside a villa in Khalifa City, Abu Dhabi",
          ratio: "4/5",
        }}
      >
        <p>
          Abu Dhabi is spread out. A move from the island to Khalifa City or Al Shamkha can mean a long drive, a big
          villa and a lot of furniture. And in summer, nobody wants to carry a wardrobe at 2 pm.
        </p>
        <p>
          Hamdan Movers and Packers has been moving homes and offices in the UAE for more than six years. We plan Abu
          Dhabi moves around the things that slow them down: distance, building rules, villa sizes and traffic. Then we
          send the right crew and the right truck for the job.
        </p>
        <p>
          We bring the packing material and wrap your furniture. We take apart what needs taking apart. At the new place
          we put it back together and put things where you want them. You don&apos;t need to lift a box.
        </p>
      </SplitText>

      <ServiceList
        id="services"
        index="02"
        heading="Our moving services in Abu Dhabi"
        items={[
          {
            title: "Apartment moving",
            icon: Building2,
            body: (
              <>
                Studios and 1 to 4 bedroom flats in towers and low rise buildings. Every box is labelled by room, so
                unpacking goes quickly.{" "}
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
                Abu Dhabi villas are big, often with a majlis, a maid&apos;s room, outdoor furniture and a full kitchen.
                We send a larger crew and more trucks, and plan villa moves over one or two days.{" "}
                <a href="/villa-movers/" className="lp-link">
                  Villa movers →
                </a>
              </>
            ),
          },
          {
            title: "House and home shifting",
            icon: Sofa,
            body: (
              <>
                Townhouses and family homes, packed room by room and set up again at the new address.{" "}
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
                Workstations, IT equipment, files and meeting rooms, moved after hours or over the weekend so work
                doesn&apos;t stop.{" "}
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
                Full packing, part packing, or just the fragile things.{" "}
                <a href="/packing-services/" className="lp-link">
                  Packing services →
                </a>
              </>
            ),
          },
          {
            title: "Furniture dismantling and fitting",
            icon: Wrench,
            body: "Beds, wardrobes, dining sets and majlis seating, taken apart, moved and fitted again.",
          },
          {
            title: "Storage",
            icon: Warehouse,
            body: "If your new home isn't ready yet, we can keep your things in climate-controlled storage for a few days or a few months.",
          },
          {
            title: "Budget moves",
            icon: Wallet,
            body: (
              <>
                If price matters most, our lower-cost moving options start from AED 599.{" "}
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
        heading="What's included in your Abu Dhabi move"
        items={[
          "A fixed price agreed before moving day",
          "Boxes, bubble wrap, stretch film and moving blankets",
          "Dismantling and reassembly of beds, wardrobes and tables",
          "Covered truck and a trained crew",
          "Loading, transport and unloading",
          "Unpacking and placing furniture where you want it",
        ]}
        after={<p>The price we quote is the price you pay. We don&apos;t add hidden charges on the day.</p>}
      />

      <PriceBand
        id="prices"
        index="04"
        heading="Moving prices in Abu Dhabi"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Moving prices in Abu Dhabi"
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
              These are starting prices for moves inside Abu Dhabi. Your final price depends on how much you&apos;re
              moving, the distance, and the access at both homes. Moves between Abu Dhabi and another emirate, such as
              Dubai, add from AED 500.
            </p>
            <p>
              <strong>You get a fixed price before the move. That&apos;s what you pay.</strong>
            </p>
          </>
        }
      />

      <ChipGroups
        id="areas"
        index="05"
        heading="Areas we cover in Abu Dhabi"
        intro={<p>We take moves across the whole of Abu Dhabi. These are the areas we get asked about most:</p>}
        groups={[
          {
            label: "Abu Dhabi Island",
            items: [
              "Al Khalidiyah",
              "Corniche",
              "Al Bateen",
              "Al Muroor",
              "Al Mushrif",
              "Al Nahyan",
              "Tourist Club Area",
              "Hamdan Street",
              "Electra Street",
              "Al Danah",
            ],
          },
          {
            label: "Islands and waterfront",
            items: ["Al Reem Island", "Saadiyat Island", "Yas Island", "Al Raha Beach", "Al Maryah Island"],
          },
          {
            label: "Mainland villa and family areas",
            items: [
              "Khalifa City",
              "Mohammed Bin Zayed City",
              "Al Raha Gardens",
              "Al Reef",
              "Al Shamkha",
              "Shakhbout City",
              "Baniyas",
              "Masdar City",
              "Al Ghadeer",
            ],
          },
          {
            label: "Industrial and business areas",
            items: ["Mussafah", "ICAD", "Abu Dhabi Airport area"],
          },
        ]}
        outro={
          <p>
            We also move people to and from Al Ain. If your area isn&apos;t on the list, call us. We almost certainly
            cover it.
          </p>
        }
      />

      <LinkList
        id="abu-dhabi-dubai"
        index="06"
        heading="Moving between Abu Dhabi and Dubai"
        intro={
          <p>
            This is one of the most common routes we do. The drive is about 140 km, so we start early, load in the
            morning and unload the same afternoon. The same crew packs, drives and unpacks, and your things stay on one
            truck the whole way.
          </p>
        }
        photo={{ src: "/new/moving-truck-abu-dhabi-dubai-highway.jpg", alt: "Hamdan Movers truck driving on the Abu Dhabi to Dubai highway during an inter-emirate move", ratio: "4/3" }}
        items={[
          <>
            <a href="/movers-and-packers-in-dubai/" className="lp-link">
              Abu Dhabi to Dubai
            </a>
            , usually done in one day
          </>,
          <a key="shj" href="/movers-in-sharjah/" className="lp-link">
            Abu Dhabi to Sharjah
          </a>,
          <a key="ajm" href="/movers-in-ajman/" className="lp-link">
            Abu Dhabi to Ajman
          </a>,
          <a key="rak" href="/movers-in-ras-al-khaimah/" className="lp-link">
            Abu Dhabi to Ras Al Khaimah
          </a>,
          <a key="fuj" href="/movers-in-fujairah/" className="lp-link">
            Abu Dhabi to Fujairah
          </a>,
        ]}
        after={
          <p>
            Moves between emirates are priced from your local starting price plus AED 500. The exact figure depends on
            the route and the size of the move.
          </p>
        }
      />

      <NoteList
        id="planning"
        index="07"
        heading="Planning an Abu Dhabi move: what to sort out first"
        tone="dark"
        items={[
          {
            title: "Building and community permits.",
            body: "Many towers on Reem Island and Al Raha Beach, and many gated villa communities, ask for a move permit and a booked service lift or gate pass. Ask your building or community management a few days before the move. We'll tell you what they usually need.",
          },
          {
            title: "Truck timing.",
            body: "Abu Dhabi limits heavy trucks on some main roads during rush hours. We schedule our trucks around those times so your move doesn't get stuck on the road.",
          },
          {
            title: "Villa moves take planning.",
            body: "A 5 bedroom villa in Khalifa City is a very different job from a 1 BHK in Al Khalidiyah. For bigger homes we visit first, check the access, and agree a crew size and timing with you.",
          },
          {
            title: "Summer heat.",
            body: "From June to September we start early in the morning. It's better for your furniture, your electronics and our crew.",
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="08"
        heading="Why people in Abu Dhabi book Hamdan Movers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "You know the price first.",
            body: "We give you a fixed price before moving day, with no extra charges halfway through.",
          },
          {
            title: "Quick replies.",
            body: "Call, WhatsApp or use the form, and you'll hear back with a price within 10 minutes, at any hour.",
          },
          {
            title: "We work when you need us.",
            body: "We're open 24/7, including Fridays, nights and public holidays. Same-day moves are possible when a truck is free.",
          },
          {
            title: "Your things are insured.",
            body: "If something is damaged while we're moving it, we repair it, replace it, or compensate you.",
          },
          {
            title: "Crews that know furniture.",
            body: "Our movers take apart and refit beds, wardrobes and majlis sets every day. They wrap things properly before they lift them.",
          },
          {
            title: "Experience you can check.",
            body: "More than six years of moves across the UAE, 412+ moves completed, and 5-star reviews from customers.",
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
            body: "We ask a few questions, or visit first for villas and large homes, then confirm the price.",
          },
          {
            title: "We pack and load.",
            body: "The crew arrives on time, packs everything, dismantles furniture and loads the truck.",
          },
          {
            title: "We deliver and set up.",
            body: "We unload, refit the furniture and place everything where you want it.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="10"
        heading="Questions people ask about moving in Abu Dhabi"
        items={[
          {
            q: "How much does a moving company in Abu Dhabi cost?",
            a: "A studio starts from AED 750, a 2 BHK from AED 1,600 and a 4 bedroom villa from AED 4,000. The final price depends on volume, distance and access. We confirm a fixed price before the move.",
          },
          {
            q: "How do I pick the best movers in Abu Dhabi?",
            a: "Get a fixed written price, not just an hourly rate. Check that packing material, dismantling and reassembly are included. Ask what happens if something is damaged, and read recent reviews. A good mover will answer all of this before you book.",
          },
          {
            q: "Do you move villas in Khalifa City, MBZ and Al Shamkha?",
            a: "Yes. Villa moves are a big part of our work in Abu Dhabi. We send a larger crew and more trucks, and plan the move over one or two days depending on the villa's size.",
          },
          {
            q: "How long does a Dubai to Abu Dhabi move take?",
            a: "Most apartment moves between Dubai and Abu Dhabi are done in one day. Larger villas can take two days.",
          },
          {
            q: "Do you work on Fridays and at night?",
            a: "Yes. We're open 24/7, including Fridays and public holidays. Night moves work well for offices.",
          },
          {
            q: "Are packing materials included?",
            a: "Yes. Boxes, bubble wrap, stretch film and moving blankets are included in your price.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          {
            q: "Do you also move to Al Ain?",
            a: "Yes. We move to and from Al Ain, and to all seven emirates.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving in Abu Dhabi soon?"
        text="Tell us your home size, the area you're moving from and to, and your date. We'll send a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
