import type { Metadata } from "next";
import QuoteForm from "@/components/new/form/QuoteForm";
import Checklist from "@/components/new/sections/Checklist";
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

const title = "Packing Services in Dubai | Professional Packers | Hamdan Movers";
const description =
  "Professional packing services in Dubai. Full packing, kitchen or fragile-only packing, packing without moving, and unpacking. Open 24/7.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/packing-services/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/packing-services/", type: "website", locale: "en_AE", images: OG_IMAGES },
};

const WA = "Hi, I need packing services";

export default function Page() {
  return (
    <Shell whatsappMessage={WA}>
      <Hero
        h1={
          <>
            <Mark>Packing Services</Mark> in Dubai
          </>
        }
        intro="Our packers pack your whole home, one room, or just the fragile things. We can pack for your move, pack so you can move it yourself, or unpack at the other end. You choose what you need."
        chips={["Open 24/7", "Quality boxes and wrapping", "Insured moves", "5-star reviews"]}
        subline="Send your details and we'll get back to you with a price within 10 minutes."
        whatsappMessage={WA}
        form={
          <QuoteForm
            heading="Get your packing price"
            footnote="We reply within 10 minutes, day or night."
            page="packing-services"
            whatsappMessage={WA}
            defaultType="Packing only"
          />
        }
      />

      <SplitText
        id="damage"
        index="01"
        heading="Packing is where most moving damage starts"
        photo={{
          src: "/new/plates-wrapped-packed-on-edge-moving-box.jpg",
          alt: "Close-up of a Hamdan mover wrapping plates one by one and standing them on edge in a moving box",
          ratio: "4/5",
        }}
      >
        <p>
          Most broken plates and scratched furniture don&apos;t happen on the road. They happen because something was
          packed badly: a box too heavy at the bottom, glasses with no paper between them, a TV wrapped in a bedsheet.
        </p>
        <p>
          Our packers do this every day. They know which box suits which item, how much wrapping a glass table needs,
          and how to pack a kitchen so it can be unpacked in an hour instead of a week.
        </p>
        <p>Hamdan Movers and Packers has packed homes and offices across the UAE for more than six years.</p>
      </SplitText>

      <Section tone="gray" labelledBy="options">
        <SectionHeading id="options" index="02">
          Choose your packing service
        </SectionHeading>
        <div className="mt-10 rounded-card border border-line bg-white p-2 sm:p-3">
          <DataTable
            caption="Packing service options"
            columns={["Option", "What we do", "Good for"]}
            rows={[
              [
                "Full packing",
                "We pack every room, label every box, and wrap all the furniture",
                "Busy families and anyone short on time",
              ],
              [
                "Part packing",
                "We pack the rooms you choose, often the kitchen and fragile items",
                "People who want to save money but not risk the breakables",
              ],
              [
                "Fragile-only packing",
                "Glassware, crockery, mirrors, artwork, TVs and decor",
                "People packing clothes and books themselves",
              ],
              [
                "Packing only (no move)",
                "We pack everything, and you move it with your own truck or company",
                "Moves abroad, storage, or a mover who doesn't pack",
              ],
              [
                "Unpacking only",
                "We unpack at your new home and take the empty boxes away",
                "People who packed themselves, or used another mover",
              ],
              [
                "Full packing + move + unpacking",
                "Everything from first box to last shelf",
                <>
                  The easiest option. See our{" "}
                  <a href="/house-movers/" className="lp-link">
                    house movers
                  </a>{" "}
                  page
                </>,
              ],
            ]}
          />
        </div>
      </Section>

      <Checklist
        id="materials"
        index="03"
        heading="Packing materials we use"
        intro={<p>All materials are included in our packing price.</p>}
        items={[
          "Double wall cartons in small, medium and large sizes",
          "Wardrobe boxes with a hanging rail, so clothes go in on their hangers",
          "Packing paper for plates, glasses and kitchen items",
          "Bubble wrap for fragile items, frames and electronics",
          "Stretch film to keep drawers and doors closed and protect upholstery",
          "Foam sheets and corner guards for glass tables, mirrors and furniture edges",
          "Mattress and sofa covers",
          "Moving blankets for wooden furniture and appliances",
          "TV boxes or padded wrapping for screens",
          "Wooden crates for artwork, marble tops and very fragile pieces (on request)",
          "Strong tape and labels",
        ]}
      />

      <NoteList
        id="room-by-room"
        index="04"
        heading="How we pack, room by room"
        tone="dark"
        items={[
          {
            title: "Kitchen.",
            body: "Plates are wrapped one by one and stood on their edge. Glasses get paper inside and out. Pots, pans and small appliances get their own boxes. The kitchen usually takes the longest, so we start there.",
          },
          {
            title: "Living room.",
            body: "TVs, sound systems and decor items get padding. Cushions and curtains go into large light boxes. Books go in small boxes so they stay liftable.",
          },
          {
            title: "Bedrooms.",
            body: "Bedding and pillows are bagged or boxed. Mattresses get covers. Beds and wardrobes are dismantled, with the screws bagged and taped to each piece.",
          },
          {
            title: "Wardrobes.",
            body: "Hanging clothes go straight into wardrobe boxes on their hangers. Shoes, bags and folded clothes are boxed by owner.",
          },
          {
            title: "Kids' rooms.",
            body: "Toys, books and clothes are boxed separately and clearly labelled, so the kids' rooms can be set up first.",
          },
          {
            title: "Bathrooms, storeroom and balcony.",
            body: "Toiletries are sealed in bags to stop leaks. Tools, suitcases, plants and outdoor items are packed last.",
          },
          {
            title: "Office and documents.",
            body: "Files stay in order and boxes are sealed. Electronics are padded and boxed.",
          },
        ]}
      />

      <SplitText
        id="labelling"
        index="05"
        heading="Labelling and inventory"
        reverse
        photo={{
          src: "/new/sealed-moving-boxes-labelled-room-names-fragile.jpg",
          alt: "Stack of sealed moving boxes labelled with room names and fragile boxes clearly marked by Hamdan packers",
          ratio: "4/3",
        }}
      >
        <p>
          Every box gets a label with the room it&apos;s going to and a short note of what&apos;s inside. Fragile boxes
          are marked clearly. For larger moves we write a simple inventory list, so you can check that every box
          arrived.
        </p>
        <p>It makes unpacking much faster. You know which box to open first, and which can wait.</p>
      </SplitText>

      <PriceBand
        id="prices"
        index="06"
        heading="Packing prices"
        whatsappMessage={WA}
        lead={
          <>
            <p>
              <strong className="text-white">Packing as part of your move:</strong> included in your moving price. See
              prices on our{" "}
              <a href="/house-movers/" className="lp-link">
                house movers
              </a>
              ,{" "}
              <a href="/apartment-movers/" className="lp-link">
                apartment movers
              </a>{" "}
              and{" "}
              <a href="/villa-movers/" className="lp-link">
                villa movers
              </a>{" "}
              pages.
            </p>
            <p>
              <strong className="text-white">Packing only (without the move):</strong>
            </p>
          </>
        }
        table={
          <DataTable
            caption="Packing only prices, without the move"
            columns={["Home size", "Starting price"]}
            priceCols={[1]}
            stack={false}
            rows={[
              ["Studio or 1 BHK", "AED 350"],
              ["2 BHK", "AED 550"],
              ["3 BHK", "AED 750"],
              ["Villa (3 to 4 bedrooms)", "AED 1,200"],
              ["Kitchen or fragile items only", "AED 250"],
              ["Unpacking only", "Same as packing for your home size"],
            ]}
          />
        }
        notes={
          <p>
            Prices include packing materials. The final price depends on how much you have.{" "}
            <strong>You get a fixed price before we start.</strong>
          </p>
        }
      />

      <SplitText id="across-uae" index="07" heading="Packing services across the UAE" tone="gray">
        <p>
          We pack homes and offices across{" "}
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
          .
        </p>
      </SplitText>

      <FeatureGrid
        id="why"
        index="08"
        heading="Why people choose our packers"
        stats={[
          { value: "412+", label: "Moves completed" },
          { value: "6+", label: "Years of UAE packing" },
          { value: "24/7", label: "Open" },
          { value: "10", label: "Minutes to a reply" },
        ]}
        items={[
          {
            title: "Packing is our daily work.",
            body: "Our crews pack homes every day, so they work quickly and carefully.",
          },
          {
            title: "Proper materials, included.",
            body: "We use real moving boxes and wrapping, not old supermarket cartons.",
          },
          {
            title: "You choose how much we pack.",
            body: "Full, part, fragile-only, or unpacking only. You pay for what you need.",
          },
          {
            title: "Insured moves.",
            body: "If something we packed and moved is damaged, we repair it, replace it, or compensate you.",
          },
          {
            title: "Open 24/7, with fast replies.",
            body: "We work Fridays and nights, and reply to every enquiry within 10 minutes.",
          },
        ]}
      />

      <Steps
        id="how"
        index="09"
        heading="How it works"
        items={[
          {
            title: "Call or WhatsApp us.",
            body: "Tell us your home size and which packing option you want.",
          },
          {
            title: "Get your fixed price.",
            body: "We ask a few questions, or visit for larger homes, and confirm the price.",
          },
          {
            title: "We pack.",
            body: "The packers arrive with all materials, pack and label everything.",
          },
          {
            title: "Move or store.",
            body: "We move it for you, or it's ready for your own truck, shipper or storage.",
          },
        ]}
      />

      <Faq
        id="faq"
        index="10"
        heading="Questions about packing services"
        items={[
          {
            q: "Can I book packing without the move?",
            a: "Yes. We can pack everything and leave it ready for your own truck, an international shipper or storage.",
          },
          {
            q: "Do you bring the boxes and materials?",
            a: "Yes. Boxes, wardrobe boxes, packing paper, bubble wrap, stretch film and blankets are all included.",
          },
          {
            q: "Can you pack only the kitchen or fragile items?",
            a: "Yes. Many customers pack clothes and books themselves and leave the kitchen and breakables to us.",
          },
          {
            q: "How long does packing take?",
            a: "A 1 BHK usually takes two to four hours. A 3 BHK takes most of a day. A large villa may need a full day of packing before moving day.",
          },
          {
            q: "Do you unpack at the new home?",
            a: "Yes. We unpack, place items in cupboards and on shelves if you want, and take away the empty boxes.",
          },
          {
            q: "Do you pack for international moves?",
            a: "Yes. We can pack your home for a shipper, or handle the whole move to GCC countries.",
          },
          {
            q: "What if something gets damaged?",
            a: "Our moves are insured. If anything we packed and moved is damaged, we'll repair it, replace it, or compensate you.",
          },
          { q: "How do I pay?", a: "Cash, card or bank transfer." },
        ]}
      />

      <FinalCta
        heading="Need packers?"
        text="Tell us your home size and what you want packed. We'll send a price within 10 minutes."
        whatsappMessage={WA}
      />
    </Shell>
  );
}
