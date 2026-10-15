import type { Metadata } from "next";
import QuoteForm from "@/components/new/form/QuoteForm";
import Checklist from "@/components/new/sections/Checklist";
import CompareTable from "@/components/new/sections/CompareTable";
import DataTable from "@/components/new/sections/DataTable";
import Faq from "@/components/new/sections/Faq";
import FeatureGrid from "@/components/new/sections/FeatureGrid";
import FinalCta from "@/components/new/sections/FinalCta";
import Hero from "@/components/new/sections/Hero";
import NoteList from "@/components/new/sections/NoteList";
import PriceBand from "@/components/new/sections/PriceBand";
import Section, { SectionHeading } from "@/components/new/sections/Section";
import SplitText from "@/components/new/sections/SplitText";
import Steps from "@/components/new/sections/Steps";
import { OG_IMAGES } from "@/components/new/site/seo";
import Shell from "@/components/new/site/Shell";
import Mark from "@/components/new/ui/Mark";
import PhotoSlot from "@/components/new/ui/PhotoSlot";

const title = "Affordable Movers in Dubai | Cheap Moving From AED 599 | Hamdan";
const description =
  "Affordable movers and packers in Dubai. Budget moves from AED 599, fixed prices, no hidden charges, and the same trained crews. Open 24/7.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/affordable-movers/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/affordable-movers/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need affordable movers";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            <Mark>Affordable Movers</Mark> in Dubai
          </>
        }
        intro="Budget moves from AED 599, with a fixed price, no hidden charges, and the same trained crew we send on every job. You pick how much you want us to do, and pay only for that."
        chips={["Open 24/7", "Fixed prices", "Insured moves", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your budget moving price"
            footnote="We reply within 10 minutes, day or night."
            page="affordable-movers"
            whatsappMessage={WA}
          />
        }
      />

      <SplitText
        id="no-catch"
        index="01"
        heading="Cheap movers and packers, without the usual catch"
        photo={{
          src: "/new/movers-loading-self-packed-boxes-covered-truck-uae.jpg",
          alt: "Hamdan movers loading a customer's self-packed boxes onto a covered moving truck in the UAE",
          ratio: "4/5",
        }}
      >
        <p>
          You&apos;ve probably seen the AED 300 offers. Then the truck turns up, and there&apos;s a charge for the
          stairs, a charge for the wardrobe, a charge for the waiting time. Or something breaks and nobody answers the
          phone.
        </p>
        <p>
          We do budget moves differently. Our prices are lower because you choose to do some of the work yourself, not
          because we cut corners. The crew is trained, the move is insured, and the price we quote is the price you pay.
        </p>
        <p>
          Hamdan Movers and Packers has been moving homes in the UAE for more than six years, for customers on every
          kind of budget.
        </p>
      </SplitText>

      <PriceBand
        id="packages"
        index="02"
        heading="Choose your budget package"
        whatsappMessage={WA}
        wide
        table={
          <CompareTable
            caption="Budget, Standard and Full service packages"
            tiers={["Budget move", "Standard move", "Full service"]}
            highlight={0}
            rows={[
              {
                label: "What you do",
                values: ["Pack your own boxes", "Pack clothes and books", "Nothing"],
              },
              {
                label: "What we do",
                values: [
                  "Dismantle, load, move, unload, refit furniture",
                  "Pack kitchen and fragile items, plus everything in Budget",
                  "Pack everything, move, unpack and set up",
                ],
              },
              {
                label: "Packing material",
                values: ["Boxes available to buy", "Included for what we pack", "All included"],
              },
              { label: "Studio", values: ["AED 599", "AED 699", "AED 750"], price: true },
              { label: "1 BHK", values: ["AED 899", "AED 999", "AED 1,100"], price: true },
              { label: "2 BHK", values: ["AED 1,299", "AED 1,449", "AED 1,600"], price: true },
              { label: "3 BHK", values: ["AED 1,899", "AED 2,099", "AED 2,300"], price: true },
              { label: "2 bedroom villa", values: ["AED 1,699", "AED 1,849", "AED 2,000"], price: true },
              { label: "3 bedroom villa", values: ["AED 2,499", "AED 2,749", "AED 3,000"], price: true },
            ]}
          />
        }
        notes={
          <p>
            These are starting prices for moves within the same emirate. Bigger homes get a quote after a quick call.
            Moving to another emirate adds from AED 500.
          </p>
        }
      />

      <Section tone="white" labelledBy="small-moves">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading id="small-moves" index="03">
              Small moves and single items
            </SectionHeading>
            <p className="mt-5 text-text">Not moving a whole home? We also do small jobs.</p>
            <div className="mt-8 rounded-card border border-line bg-white p-2 sm:p-3">
              <DataTable
                caption="Small moves and single items"
                columns={["Job", "Starting price"]}
                priceCols={[1]}
                stack={false}
                rows={[
                  ["Single item (sofa, bed, fridge, washing machine)", "AED 149"],
                  ["A few items or a small room", "Quote on call"],
                  ["Pickup truck with driver (1.5 ton or 3 ton)", "Quote on call"],
                ]}
              />
            </div>
            <p className="mt-6 text-text">
              These suit people buying or selling furniture, moving into a shared flat, or sending a few things to
              storage.
            </p>
          </div>
          <div className="lg:col-span-5 lg:self-center">
            <PhotoSlot src="/new/two-movers-carrying-sofa-pickup-truck-small-move.jpg" alt="Two Hamdan movers carrying a wrapped sofa to a 1.5-ton pickup for a small move in the UAE" ratio="4/5" />
          </div>
        </div>
      </Section>

      <Checklist
        id="dont-cut"
        index="04"
        heading="What we don't cut, even on budget moves"
        tone="gray"
        items={[
          <>
            <strong className="text-ink">A fixed price.</strong> You know the total before we start.
          </>,
          <>
            <strong className="text-ink">Insurance.</strong> If something is damaged while we&apos;re moving it, we
            repair it, replace it, or compensate you.
          </>,
          <>
            <strong className="text-ink">Trained crews.</strong> The same movers who do our full-service jobs.
          </>,
          <>
            <strong className="text-ink">Covered trucks.</strong> Your things don&apos;t travel on an open pickup in
            the sun.
          </>,
          <>
            <strong className="text-ink">Furniture refitting.</strong> Beds and wardrobes are taken apart and put back
            together, even on a Budget move.
          </>,
        ]}
      />

      <NoteList
        id="cheaper"
        index="05"
        heading="How to make your move cheaper"
        tone="dark"
        items={[
          {
            title: "Move in the middle of the month.",
            body: "The last week of the month is the busiest, because many leases end then. Mid-month dates are easier to book.",
          },
          { title: "Pick a weekday.", body: "Weekends fill up first." },
          {
            title: "Take less with you.",
            body: "Sell or give away furniture you won't use. Fewer items means a smaller truck and a lower price.",
          },
          {
            title: "Pack what you can.",
            body: "Clothes, books and linen are easy to pack yourself. Leave the kitchen and fragile things to us if you're worried about breakages.",
          },
          {
            title: "Get your building ready.",
            body: "Book the service lift and get your permit sorted early. Waiting at the gate wastes time on both sides.",
          },
          {
            title: "Tell us everything when you call.",
            body: "The more accurate the details, the more accurate the price. Surprises on the day are what push prices up.",
          },
        ]}
      />

      <SplitText id="across-uae" index="06" heading="Affordable moves across the UAE">
        <p>
          We do budget moves in{" "}
          <a href="/movers-and-packers-in-dubai/" className="lp-link">
            Dubai
          </a>
          ,{" "}
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
          . Need a packer for just part of the job? See{" "}
          <a href="/packing-services/" className="lp-link">
            packing services
          </a>
          .
        </p>
      </SplitText>

      <FeatureGrid
        id="why"
        index="07"
        heading="Why people choose Hamdan for affordable moving"
        tone="gray"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE moves" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "Low prices with nothing hidden.",
            body: "You get one fixed price, with no extra charges for stairs, waiting or furniture on the day.",
          },
          {
            title: "You decide the level of service.",
            body: "Pay for a Budget, Standard or Full move. Nothing is added that you didn't ask for.",
          },
          {
            title: "Still insured.",
            body: "Every move is covered, whatever the package.",
          },
          {
            title: "Open 24/7, quick replies.",
            body: "We work Fridays and nights, and reply to every enquiry within 10 minutes.",
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
        heading="How it works"
        tone="white"
        items={[
          {
            title: "Call or WhatsApp us.",
            body: "Tell us your home size, the package you want, and your date.",
          },
          {
            title: "Get your fixed price.",
            body: "We confirm the price after a few quick questions.",
          },
          {
            title: "Moving day.",
            body: "The crew arrives on time, dismantles, loads, moves and unloads. They pack too, if your package includes it.",
          },
          {
            title: "Done.",
            body: "Furniture is refitted and placed where you want it.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="09"
        heading="Questions about affordable moving"
        tone="gray"
        items={[
          {
            q: "What's the cheapest way to move in Dubai?",
            a: "Book our Budget move, pack your own boxes, move in the middle of the month on a weekday, and take less with you. A studio Budget move starts from AED 599.",
          },
          {
            q: "Are cheap movers in Dubai safe to use?",
            a: "Some are, some aren't. Check that the price is fixed in writing, the move is insured, and the crew will dismantle and refit furniture. We do all three, even on our lowest-priced package.",
          },
          {
            q: "Is there anything extra to pay on the day?",
            a: "No. The price we quote is the price you pay, as long as the details you gave us are right.",
          },
          {
            q: "Can I pack myself and just hire movers?",
            a: "Yes. That's our Budget move. We can also drop off boxes for you to pack before the day.",
          },
          {
            q: "Do you move single items?",
            a: "Yes. Single items like a sofa, bed or fridge start from AED 149.",
          },
          {
            q: "What if something gets damaged?",
            a: "Every move is insured. If anything is damaged while we're moving it, we'll repair it, replace it, or compensate you.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Want a move that fits your budget?"
        text="Tell us your home size and which package you want. We'll send a fixed price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
