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
import { Briefcase, Building2, House, Package, Sofa, Wallet, Warehouse } from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "Movers in Fujairah | Packers and Movers From AED 750 | Hamdan";
const description =
  "Movers and packers in Fujairah for homes, villas and offices, plus Fujairah to Dubai and Sharjah moves. Open 24/7. Price in 10 minutes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/movers-in-fujairah/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/movers-in-fujairah/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need movers in Fujairah";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            Movers and Packers in <Mark>Fujairah</Mark>
          </>
        }
        intro="Moving across Fujairah, or between the east coast and Dubai or Sharjah? We pack, move and set everything up again at your new place. Local moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your Fujairah moving price"
            footnote="We reply within 10 minutes, day or night."
            page="movers-in-fujairah"
            whatsappMessage={WA}
            defaultFrom="Fujairah"
          />
        }
      />

      <SplitText
        id="east-coast"
        index="01"
        heading="East coast moves, planned properly"
        photo={{
          src: "/new/movers-packing-inventory-fujairah-apartment.jpg",
          alt: "Hamdan movers wrapping furniture and checking the inventory list in a Fujairah apartment before an east coast move",
          ratio: "4/5",
        }}
      >
        <p>
          Fujairah is on the other side of the mountains from the rest of the UAE. That changes how a move works. The
          drive is longer, crews need an early start, and a mover who hasn&apos;t planned the day can end up unloading in
          the dark.
        </p>
        <p>
          Our crews come over from our base in Sharjah, which is roughly a 90-minute drive. So we plan Fujairah moves
          around that. We load early, keep your things on one truck, and set up the new place the same day for most
          apartment moves.
        </p>
        <p>
          We take local moves inside Fujairah as well, not just moves in and out of the emirate. Hamdan Movers and
          Packers has been doing this work across the UAE for more than six years.
        </p>
      </SplitText>

      <ServiceList
        id="services"
        index="02"
        heading="Our moving services in Fujairah"
        items={[
          {
            title: "Apartment moving",
            icon: Building2,
            body: (
              <>
                Flats in Fujairah city, from studios to 4 BHK. Every box is packed and labelled by room.{" "}
                <a href="/apartment-movers/" className="lp-link">
                  Apartment movers →
                </a>
              </>
            ),
          },
          {
            title: "Villa and house moving",
            icon: House,
            body: (
              <>
                Fujairah homes are often big, with outdoor majlis areas and garden furniture. We send a crew that
                matches the size of the house.{" "}
                <a href="/villa-movers/" className="lp-link">
                  Villa movers →
                </a>{" "}
                ·{" "}
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
                Offices and businesses in Fujairah city, the free zone and around the port, moved after hours or at the
                weekend.{" "}
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
            body: "Single pieces and small loads, from AED 199.",
          },
          {
            title: "Storage",
            icon: Warehouse,
            body: "Climate-controlled storage if your dates don't line up.",
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
        heading="What's included in your Fujairah move"
        items={[
          "A fixed price agreed before moving day",
          "Boxes, bubble wrap, stretch film and moving blankets",
          "Dismantling and reassembly of beds, wardrobes and tables",
          "Covered truck and a trained crew",
          "Loading, transport and unloading",
          "Unpacking and placing furniture where you want it",
        ]}
        after={<p>You pay what we quoted. No extra charges on the day.</p>}
      />

      <PriceBand
        id="prices"
        index="04"
        heading="Moving prices in Fujairah"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="Moving prices in Fujairah"
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
              These are starting prices for moves within Fujairah. Your final price depends on how much you&apos;re
              moving, the access at both homes, and how much packing you need. Moving between Fujairah and another
              emirate adds from AED 500.
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
        heading="Areas we cover in Fujairah"
        intro={<p>We move people across the whole emirate:</p>}
        groups={[
          {
            label: "Fujairah city",
            items: [
              "Al Faseel",
              "Sakamkam",
              "Madhab",
              "Al Gurfa",
              "Al Hail",
              "Merashid",
              "Al Owaid",
              "Al Sharia",
              "Al Etihad",
              "the Corniche",
            ],
          },
          {
            label: "Along the coast",
            items: ["Dibba Al Fujairah", "Al Bidya", "Al Aqah", "Dadna", "Mirbah", "Qidfa"],
          },
          {
            label: "Inland",
            items: ["Masafi", "Al Siji"],
          },
          {
            label: "Business areas",
            items: ["Fujairah Free Zone and the port area"],
          },
        ]}
        outro={
          <p>
            We also move people to and from Kalba and Khor Fakkan, which are part of{" "}
            <a href="/movers-in-sharjah/" className="lp-link">
              Sharjah
            </a>{" "}
            but sit right next to Fujairah.
          </p>
        }
      />

      <LinkList
        id="routes"
        index="06"
        heading="Moving between Fujairah and other emirates"
        intro={
          <p>
            Many people move to the east coast for work, a bigger home, or a quieter life. Others head back to Dubai or
            Sharjah when their job moves. We do both directions.
          </p>
        }
        photo={{ src: "/new/movers-carrying-boxes-into-fujairah-apartment-building.jpg", alt: "Hamdan movers carrying boxes and wrapped furniture into an apartment building in Fujairah", ratio: "4/3" }}
        items={[
          <>
            <a href="/movers-in-sharjah/" className="lp-link">
              Fujairah to Sharjah
            </a>
            . Around 90 minutes through Masafi, and usually a one-day job.
          </>,
          <>
            <a href="/movers-and-packers-in-dubai/" className="lp-link">
              Fujairah to Dubai
            </a>
            . Roughly 1.5 to 2 hours, also one day for most apartments.
          </>,
          <a key="ajm" href="/movers-in-ajman/" className="lp-link">
            Fujairah to Ajman
          </a>,
          <a key="rak" href="/movers-in-ras-al-khaimah/" className="lp-link">
            Fujairah to Ras Al Khaimah
          </a>,
          <>
            <a href="/movers-in-abu-dhabi/" className="lp-link">
              Fujairah to Abu Dhabi
            </a>
            . A long day, so villas often take two.
          </>,
        ]}
        after={<p>The same crew packs, drives and unloads. Your things stay on one truck the whole way.</p>}
      />

      <NoteList
        id="plan"
        index="07"
        heading="What to plan for in Fujairah"
        tone="dark"
        items={[
          {
            title: "Book a day or two ahead.",
            body: "Same-day Fujairah moves are possible when a truck is free, but booking a day or two ahead is the safest way to get the date you want.",
          },
          {
            title: "Early starts.",
            body: "For moves to or from the west coast, we like to load in the morning. That way the drive through the mountains happens in daylight and we finish setting up the same day.",
          },
          {
            title: "Big homes with outdoor items.",
            body: "If you have garden furniture, an outdoor majlis or a lot of heavy items, tell us when you call. We'll send enough people and the right truck.",
          },
          {
            title: "Summer heat.",
            body: "From June to September, early morning starts are better for your things and the crew.",
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="08"
        heading="Why people in Fujairah book Hamdan Movers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "Local moves too.",
            body: "We move flats and villas inside Fujairah at our normal starting prices, not only long-distance jobs.",
          },
          {
            title: "A fixed price first.",
            body: "You know the total before moving day, and it doesn't change.",
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
            body: "Tell us your home size, where you're moving from and to, and the date.",
          },
          {
            title: "Get your fixed price.",
            body: "We ask a few questions, or visit first for large homes, and confirm the price.",
          },
          {
            title: "We pack and load.",
            body: "The crew arrives early, packs, dismantles furniture and loads the truck.",
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
        heading="Questions people ask about moving in Fujairah"
        items={[
          {
            q: "How much do packers and movers in Fujairah cost?",
            a: "For moves within Fujairah, a studio starts from AED 750, a 2 BHK from AED 1,600 and a 3 bedroom villa from AED 3,000. Moves to or from another emirate add from AED 500. You get a fixed price before the move.",
          },
          {
            q: "Do you do local moves inside Fujairah?",
            a: "Yes. We move homes and offices within Fujairah, as well as moves in and out of the emirate.",
          },
          {
            q: "How long does a Fujairah to Dubai move take?",
            a: "Most apartment moves between Fujairah and Dubai are done in one day. Large villas can take two days.",
          },
          {
            q: "Do you cover Dibba and Al Aqah?",
            a: "Yes. We move people along the whole east coast, including Dibba Al Fujairah, Al Bidya, Al Aqah and Mirbah.",
          },
          {
            q: "Can you move me the same day?",
            a: "Sometimes, if a truck is free. For Fujairah, booking a day or two ahead is the safer option.",
          },
          {
            q: "Is packing material included?",
            a: "Yes. Boxes, bubble wrap, stretch film and moving blankets are included in your price.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Moving in Fujairah soon?"
        text="Tell us your home size, where you're moving to, and your date. We'll send a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
