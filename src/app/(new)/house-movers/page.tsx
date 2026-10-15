import type { Metadata } from "next";
import QuoteForm from "@/components/new/form/QuoteForm";
import Checklist from "@/components/new/sections/Checklist";
import DataTable from "@/components/new/sections/DataTable";
import Faq from "@/components/new/sections/Faq";
import FeatureGrid from "@/components/new/sections/FeatureGrid";
import FinalCta from "@/components/new/sections/FinalCta";
import GroupedChecklist from "@/components/new/sections/GroupedChecklist";
import Hero from "@/components/new/sections/Hero";
import LinkList from "@/components/new/sections/LinkList";
import PriceBand from "@/components/new/sections/PriceBand";
import ServiceList from "@/components/new/sections/ServiceList";
import SplitText from "@/components/new/sections/SplitText";
import Steps from "@/components/new/sections/Steps";
import { OG_IMAGES } from "@/components/new/site/seo";
import Shell from "@/components/new/site/Shell";
import { Boxes, ShieldCheck, Truck, Wrench, Sofa } from "@/components/new/ui/icons";
import Mark from "@/components/new/ui/Mark";

const title = "House Movers in Dubai | Home Shifting From AED 750 | Hamdan";
const description =
  "House movers in Dubai for full home shifting. We pack, move and set up your home again. Insured, open 24/7. Get a price in 10 minutes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/house-movers/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/house-movers/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need house movers";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            <Mark>House Movers</Mark> in Dubai
          </>
        }
        intro="Full home shifting in Dubai and across the UAE. We pack every room, move it all on a covered truck, and set your home up again at the new address. Home moves start from AED 750."
        chips={["Open 24/7", "Insured moves", "6+ years in the UAE", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your home shifting price"
            footnote="We reply within 10 minutes, day or night."
            page="house-movers"
            whatsappMessage={WA}
          />
        }
      />

      <SplitText
        id="whole-house"
        index="01"
        heading="Home shifting that covers the whole house"
        photo={{
          src: "/new/movers-packing-kitchen-labelled-boxes-house-shifting.jpg",
          alt: "Hamdan movers packing a family kitchen into labelled boxes during a house move in the UAE",
          ratio: "4/5",
        }}
      >
        <p>
          Moving house is more than moving furniture. It&apos;s the kitchen with fifty things in every drawer. It&apos;s
          the kids&apos; rooms, the wardrobe full of clothes, the TV on the wall, and the boxes in the storeroom nobody
          has opened since the last move.
        </p>
        <p>
          We handle all of it. Our house shifting service in Dubai covers packing every room, taking apart the big
          furniture, moving it all, and putting your home back together at the new place.
        </p>
        <p>
          Hamdan Movers and Packers has been moving family homes in the UAE for more than six years. We do it every day,
          so we know what slows a house move down and how to avoid it.
        </p>
      </SplitText>

      <ServiceList
        id="what-we-do"
        index="02"
        heading="What our house movers do"
        items={[
          {
            title: "Pack every room",
            icon: Boxes,
            body: "We pack the kitchen, living room, bedrooms, wardrobes, bathrooms, storeroom and balcony. Each box is labelled with the room it goes to, so unpacking is quicker.",
          },
          {
            title: "Protect what breaks",
            icon: ShieldCheck,
            body: "Glasses, plates, mirrors, TVs and decor get extra wrapping and proper boxes. Mattresses and sofas get covers. Wooden furniture is wrapped so it doesn't get scratched.",
          },
          {
            title: "Take apart and refit furniture",
            icon: Wrench,
            body: "Beds, wardrobes, dining tables, bunk beds and kids' furniture are dismantled, moved, and fitted again. We bag the screws and fittings with each piece so nothing goes missing.",
          },
          {
            title: "Move it on a covered truck",
            icon: Truck,
            body: "Your things travel in a covered truck with a trained crew, not on an open pickup.",
          },
          {
            title: "Unpack and set up",
            icon: Sofa,
            body: "At the new house we unload, rebuild the furniture, and place everything where you want it. You can sleep in a made bed on the first night.",
          },
        ]}
      />

      <Checklist
        id="included"
        index="03"
        heading="What's included in every home shifting job"
        items={[
          "A fixed price agreed before the move",
          "Boxes, bubble wrap, stretch film and moving blankets",
          "Dismantling and reassembly of beds, wardrobes and tables",
          "Covered truck and trained crew",
          "Loading, transport and unloading",
          "Unpacking and placing furniture",
        ]}
        after={<p>There are no hidden charges on the day. You pay what we quoted.</p>}
      />

      <PriceBand
        id="prices"
        index="04"
        heading="House shifting prices in Dubai"
        whatsappMessage={WA}
        table={
          <DataTable
            caption="House shifting prices in Dubai"
            columns={["Home size", "Starting price"]}
            priceCols={[1]}
            stack={false}
            rows={[
              ["Studio", "AED 750"],
              ["1 BHK", "AED 1,100"],
              ["2 BHK", "AED 1,600"],
              ["3 BHK", "AED 2,300"],
              ["4 BHK", "AED 3,000"],
              ["2 bedroom villa or townhouse", "AED 2,000"],
              ["3 bedroom villa or townhouse", "AED 3,000"],
              ["4 bedroom villa", "AED 4,000"],
              ["5 bedroom villa and above", "AED 5,000"],
            ]}
          />
        }
        notes={
          <p>
            These are starting prices for house moves within the same emirate. The final price depends on how much you
            have, the access at both homes, and how much packing you want us to do. Moving to another emirate adds from
            AED 500.
          </p>
        }
      />

      <LinkList
        id="across-uae"
        index="05"
        heading="Home shifting across Dubai and the UAE"
        tone="white"
        pills
        intro={
          <p>
            We move houses in every part of Dubai, from flats in Al Barsha and JVC to townhouses in Arabian Ranches and
            family homes in Mirdif. We also do house moves in and between all the other emirates.
          </p>
        }
        items={[
          <a key="dxb" href="/movers-and-packers-in-dubai/">
            Dubai
          </a>,
          <a key="auh" href="/movers-in-abu-dhabi/">
            Abu Dhabi
          </a>,
          <a key="shj" href="/movers-in-sharjah/">
            Sharjah
          </a>,
          <a key="ajm" href="/movers-in-ajman/">
            Ajman
          </a>,
          <a key="rak" href="/movers-in-ras-al-khaimah/">
            Ras Al Khaimah
          </a>,
          <a key="fuj" href="/movers-in-fujairah/">
            Fujairah
          </a>,
        ]}
        after={
          <p>
            Moving a large home? See our{" "}
            <a href="/villa-movers/" className="lp-link">
              villa movers
            </a>{" "}
            page. Moving a flat in a tower? See{" "}
            <a href="/apartment-movers/" className="lp-link">
              apartment movers
            </a>
            .
          </p>
        }
      />

      <GroupedChecklist
        id="checklist"
        index="06"
        heading="A simple house moving checklist"
        tone="gray"
        groups={[
          {
            title: "Two weeks before",
            items: [
              "Book your movers and confirm the date",
              "Ask both buildings or communities about move permits, gate passes and lift bookings",
              "Start clearing things you don't want to take",
            ],
          },
          {
            title: "One week before",
            items: [
              "Arrange your DEWA (or SEWA, ADDC, FEWA) move-out and move-in",
              "Update your address with your bank and any deliveries",
              "Use up food in the freezer",
            ],
          },
          {
            title: "The day before",
            items: [
              "Defrost and dry the fridge and freezer",
              "Ask a plumber to disconnect the washing machine if needed",
              "Keep a small bag with documents, chargers, medicines and a change of clothes",
            ],
          },
          {
            title: "On moving day",
            items: [
              "Walk through each room with our supervisor",
              "Point out anything fragile or valuable",
              "Check every room and cupboard before the truck leaves",
            ],
          },
        ]}
      />

      <FeatureGrid
        id="why"
        index="07"
        heading="Why families book Hamdan Movers for home shifting"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of house moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "Fixed price, agreed first.",
            body: "You know the total before moving day. It doesn't go up once we start.",
          },
          {
            title: "A reply within 10 minutes.",
            body: "Call, WhatsApp or use the form, and we'll come back with a price at any hour.",
          },
          {
            title: "Open 24/7.",
            body: "We move on Fridays, weekends, nights and public holidays. Same-day moves are possible when a truck is free.",
          },
          {
            title: "Insured moves.",
            body: "If something is damaged while we're moving it, we repair it, replace it, or compensate you.",
          },
          {
            title: "We set your home up again.",
            body: "Furniture is refitted and placed where you want it. We don't just drop boxes in the hallway.",
          },
          {
            title: "Six years of house moves.",
            body: "More than 412 moves completed across the UAE, with 5-star reviews from customers.",
          },
        ]}
      />

      <Steps
        id="how"
        index="08"
        heading="How home shifting works"
        items={[
          {
            title: "Call or WhatsApp us.",
            body: "Tell us your home size, where you're moving from and to, and the date.",
          },
          {
            title: "Get your fixed price.",
            body: "We ask a few questions, or visit first for larger homes, and confirm the price.",
          },
          {
            title: "We pack and load.",
            body: "The crew packs every room, dismantles furniture and loads the truck.",
          },
          {
            title: "We deliver and set up.",
            body: "We unload, refit furniture and place everything where you want it.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="09"
        heading="Questions about home shifting in Dubai"
        items={[
          {
            q: "How much does house shifting in Dubai cost?",
            a: "A studio starts from AED 750, a 2 BHK from AED 1,600, and a 3 bedroom villa or townhouse from AED 3,000. You get a fixed price before the move.",
          },
          {
            q: "How long does a house move take?",
            a: "A studio or 1 BHK usually takes half a day. A 2 or 3 BHK takes about a day. Large villas take one to two days.",
          },
          {
            q: "Do you pack everything, or do I need to help?",
            a: "We can pack everything, or only the parts you choose, like the kitchen or fragile items. If you'd rather pack some things yourself, we can drop off boxes beforehand.",
          },
          {
            q: "Do you move fridges and washing machines?",
            a: "Yes. Please defrost the fridge the day before. If your washing machine is connected to water, ask a plumber to disconnect it before we arrive.",
          },
          {
            q: "Will you take apart and rebuild the beds and wardrobes?",
            a: "Yes. Dismantling and refitting beds, wardrobes and tables is included in the price.",
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
        heading="Ready to shift your home?"
        text="Tell us your home size and moving date. We'll send a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
