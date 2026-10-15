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

const title = "Movers in Ajman | Packers and Movers From AED 750 | Hamdan";
const description =
  "Movers and packers in Ajman for flats, villas and offices. Packing, furniture fitting and insured moves. Open 24/7. Price in 10 minutes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/movers-in-ajman/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/movers-in-ajman/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need movers in Ajman";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            Movers and Packers in <Mark>Ajman</Mark>
          </>
        }
        intro="Flats in Al Nuaimiya, villas in Al Helio, offices on the corniche. We pack, move and set everything up again, anywhere in Ajman. Local moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your Ajman moving price"
            footnote="We reply within 10 minutes, day or night."
            page="movers-in-ajman"
            whatsappMessage={WA}
            defaultFrom="Ajman"
          />
        }
      />

      <SplitText
        id="close"
        index="01"
        heading="A moving company close to Ajman"
        photo={{
          src: "/new/movers-carrying-dismantled-wardrobe-ajman-tower.jpg",
          alt: "Hamdan movers carrying a dismantled wardrobe panel out of an apartment tower in Ajman",
          ratio: "4/5",
        }}
      >
        <p>
          Our office is in Al Nasiriyah, Sharjah, a short drive from the Ajman border. So when you book a move in
          Ajman, the crew isn&apos;t crossing two cities to reach you.
        </p>
        <p>
          Hamdan Movers and Packers has been moving homes and offices across the UAE for more than six years. A lot of
          that work is in Ajman, and a lot of it is people moving between Ajman, Sharjah and Dubai.
        </p>
        <p>
          We bring the boxes and packing material, take apart the big furniture, and load it all onto a covered truck.
          At the new place we put the furniture back together and put things where you want them.
        </p>
      </SplitText>

      <ServiceList
        id="services"
        index="02"
        heading="Our moving services in Ajman"
        items={[
          {
            title: "Apartment moving",
            icon: Building2,
            body: (
              <>
                Studios and 1 to 4 BHK flats in Al Nuaimiya, Al Rashidiya, Emirates City, Al Jurf and the corniche
                towers. Every box is labelled by room.{" "}
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
                Villas in Al Helio, Al Yasmeen, Al Zahya, Al Rawda, Al Mowaihat and Al Amerah. We send a bigger crew
                and plan the move over one or two days.{" "}
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
                Family homes and townhouses, packed and set up again at your new address.{" "}
                <a href="/house-movers/" className="lp-link">
                  House movers →
                </a>
              </>
            ),
          },
          {
            title: "Office and shop moving",
            icon: Briefcase,
            body: (
              <>
                Offices, shops and clinics moved after hours or on the weekend, so you can open as normal.{" "}
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
            body: "One sofa, one bed, one fridge. We move single items and small loads too, from AED 199.",
          },
          {
            title: "Storage",
            icon: Warehouse,
            body: "Climate-controlled storage if you need somewhere to keep things between homes.",
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
        heading="What's included in your Ajman move"
        items={[
          "A fixed price agreed before moving day",
          "Boxes, bubble wrap, stretch film and moving blankets",
          "Dismantling and reassembly of beds, wardrobes and tables",
          "Covered truck and a trained crew",
          "Loading, transport and unloading",
          "Unpacking and placing furniture where you want it",
        ]}
        after={<p>You pay the price we quoted. There are no extra charges on the day.</p>}
      />

      <PriceBand
        id="prices"
        index="04"
        heading="Moving prices in Ajman"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Moving prices in Ajman"
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
              These are starting prices for moves within Ajman. The final price depends on how much you have, the lift
              and floor at both homes, and how much packing you want us to do. Moving from Ajman to another emirate adds
              from AED 500.
            </p>
            <p>
              <strong>We confirm your price before the move. That&apos;s the price you pay.</strong>
            </p>
          </>
        }
      />

      <ChipGroups
        id="areas"
        index="05"
        heading="Areas we cover in Ajman"
        intro={<p>We move people across all of Ajman. These are the areas we get the most calls from:</p>}
        groups={[
          {
            label: "Towers and apartments",
            items: [
              "Al Nuaimiya 1, 2 and 3",
              "Al Rashidiya",
              "Al Jurf",
              "Emirates City",
              "Ajman Corniche",
              "Al Bustan",
              "Al Nakhil",
              "Al Sawan",
              "Garden City",
              "Ajman Downtown",
            ],
          },
          {
            label: "Villa and family areas",
            items: [
              "Al Helio",
              "Al Yasmeen",
              "Al Zahya",
              "Al Rawda",
              "Al Mowaihat",
              "Al Hamidiya",
              "Al Amerah",
              "Al Tallah",
              "Al Zahra",
              "Al Rumailah",
            ],
          },
          {
            label: "Outside the city",
            items: ["Masfout and Manama"],
          },
        ]}
        outro={<p>Area not listed? We still cover it. Give us a call.</p>}
      />

      <LinkList
        id="routes"
        index="06"
        heading="Moving between Ajman, Sharjah and Dubai"
        intro={
          <p>
            Plenty of people live in Ajman and work in Sharjah or Dubai. And plenty move back and forth between the
            three when their lease ends. These are some of our most common routes.
          </p>
        }
        photo={{ src: "/new/moving-truck-unloading-villa-ajman.jpg", alt: "Hamdan Movers crew unloading furniture from a truck at a villa in Ajman", ratio: "4/3" }}
        items={[
          <>
            <a href="/movers-in-sharjah/" className="lp-link">
              Ajman to Sharjah
            </a>
            . Al Nuaimiya and Al Nahda Sharjah are almost side by side, so these moves are often quick.
          </>,
          <>
            <a href="/movers-and-packers-in-dubai/" className="lp-link">
              Ajman to Dubai
            </a>
            . We time the drive to avoid the worst of the morning and evening traffic.
          </>,
          <a key="ad" href="/movers-in-abu-dhabi/" className="lp-link">
            Ajman to Abu Dhabi
          </a>,
          <a key="rak" href="/movers-in-ras-al-khaimah/" className="lp-link">
            Ajman to Ras Al Khaimah
          </a>,
          <a key="fuj" href="/movers-in-fujairah/" className="lp-link">
            Ajman to Fujairah
          </a>,
        ]}
        after={<p>The same crew packs, drives and unloads. Your things stay on one truck the whole way.</p>}
      />

      <NoteList
        id="plan"
        index="07"
        heading="What to plan for in Ajman"
        tone="dark"
        items={[
          {
            title: "Busy towers at month end.",
            body: "Al Nuaimiya, Al Rashidiya and Emirates City have a lot of tenants moving in and out at the same time, especially in the last days of the month. Lifts and parking get busy. Book a few days ahead if you can, and we'll plan the arrival time around it.",
          },
          {
            title: "Lift bookings and building rules.",
            body: "Some towers, mostly the newer ones and those on the corniche, ask for a lift booking or a move permit from the building management. Check with your building a few days before. We'll tell you what they usually ask for.",
          },
          {
            title: "Big furniture in small lifts.",
            body: "In many older Ajman buildings the lift is too small for a wardrobe or a king bed. We take them apart, carry them down safely, and fit them again at the new place.",
          },
          {
            title: "Summer heat.",
            body: "From June to September we start early, before it gets too hot.",
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="08"
        heading="Why people in Ajman book Hamdan Movers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "We're close by.",
            body: "We're based just over the border in Sharjah, so we can usually reach Ajman addresses quickly.",
          },
          {
            title: "Your price is fixed.",
            body: "You know the total before we start, and it doesn't change on the day.",
          },
          {
            title: "Fast replies.",
            body: "Call, WhatsApp or use the form, and we'll come back with a price within 10 minutes, at any hour.",
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
            title: "Six years of moves.",
            body: "More than 412 moves completed across the UAE, and 5-star reviews from customers.",
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
            title: "Get your fixed price.",
            body: "We ask a few questions, or visit first for villas and large homes, then confirm the price.",
          },
          {
            title: "We pack and load.",
            body: "The crew arrives on time, packs your things, dismantles furniture and loads the truck.",
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
        heading="Questions people ask about moving in Ajman"
        items={[
          {
            q: "How much do packers and movers in Ajman cost?",
            a: "A studio starts from AED 750, a 2 BHK from AED 1,600 and a 3 bedroom villa from AED 3,000. Single furniture items start from AED 199. You get a fixed price before the move.",
          },
          {
            q: "Can you move me the same day?",
            a: "Often, yes, if a truck is free. At the end of the month it's busier, so booking a few days ahead is safer.",
          },
          {
            q: "Do you move from Ajman to Dubai or Sharjah?",
            a: "Yes. These are some of the routes we do most. The same crew handles both ends of the move.",
          },
          {
            q: "Do you work on Fridays and at night?",
            a: "Yes. We're open 24/7, including Fridays and public holidays.",
          },
          {
            q: "Is packing material included?",
            a: "Yes. Boxes, bubble wrap, stretch film and blankets are included in your price.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          {
            q: "Do you move single items in Ajman?",
            a: "Yes. Sofas, beds, fridges, washing machines and small loads, starting from AED 199.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving in Ajman soon?"
        text="Tell us your home size and moving date. We'll send you a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
