import Benifits from "@/components/Benifits";
import ContactUs from "@/components/ContactForm";
import Footer from "@/components/Home/Footer";
import OurServices from "@/components/Home/OurServices";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import Navbar from "@/components/Navbar";
import HealthcareSlider from "@/components/OtherMovingServices";
import ServiceTopSection from "@/components/ServiceTopSection";
import TestimonialSection from "@/components/Testimonials";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale } from "next-intl";
import React from "react";

interface Params {
  params: Promise<{
    locale: string;
  }>;
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "meta-service" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services/`,
        en: `${process.env.PUBLIC_URL}/en/services/`,
        "x-default": `${process.env.PUBLIC_URL}/en/services/`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("desc"),
      url: `${process.env.PUBLIC_URL}/${locale}/services/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/services-image.jpg`,
        alt: "Moving and Packing Services | Hamdan Movers",
      },
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${process.env.PUBLIC_URL}/${locale}/services/`,
            url: `${process.env.PUBLIC_URL}/${locale}/services/`,
            name: "Services | Hamdan Movers UAE",
            isPartOf: { "@id": `${process.env.PUBLIC_URL}/${locale}/#website` },
            primaryImageOfPage: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/services/#primaryimage`,
            },
            image: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/services/#primaryimage`,
            },
            thumbnailUrl: `${process.env.PUBLIC_URL}/images/services-image.jpg`,
            datePublished: "2023-01-01",
            dateModified: "2024-10-15T12:00:00Z",
            breadcrumb: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/services/breadcrumb`,
            },
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
            potentialAction: [
              {
                "@type": "CommunicateAction",
                target: [`${process.env.PUBLIC_URL}/${locale}/contact/`],
                description:
                  "Contact Hamdan Movers for professional moving services in the UAE, including local, international, and specialty services.",
              },
            ],
            hasPart: [
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/contact/`,
                name: "Contact Us",
              },
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/about-us/`,
                name: "About Us",
              },
            ],
          },
          {
            "@type": "ImageObject",
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
            "@id": `${process.env.PUBLIC_URL}/${locale}/services/primaryimage`,
            url: `${process.env.PUBLIC_URL}/images/services-image.jpg`,
            contentUrl: `${process.env.PUBLIC_URL}/images/services-image.jpg`,
            width: 2000,
            height: 1333,
            caption:
              "Hamdan Movers - Professional Moving Services in Dubai, UAE",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${process.env.PUBLIC_URL}/${locale}/services/breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${process.env.PUBLIC_URL}/${locale}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${process.env.PUBLIC_URL}/${locale}/services/`,
              },
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${process.env.PUBLIC_URL}/${locale}/#website`,
            url: `${process.env.PUBLIC_URL}/${locale}`,
            name: "Hamdan Movers",
            description:
              "Hamdan Movers offers professional moving services in Dubai, UAE, including local, international, commercial, packing, and storage solutions.",
            publisher: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/#organization`,
            },
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${process.env.PUBLIC_URL}/${locale}?s={search_term_string}`,
                },
                "query-input": {
                  "@type": "PropertyValueSpecification",
                  valueRequired: true,
                  valueName: "search_term_string",
                },
              },
            ],
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
          },
          {
            "@type": "Organization",
            "@id": `${process.env.PUBLIC_URL}/${locale}/#organization`,
            name: "Hamdan Movers",
            url: `${process.env.PUBLIC_URL}/${locale}/`,
            logo: {
              "@type": "ImageObject",
              inLanguage: "en-US",
              "@id": "https://hamdanmoversuae.com/images/hamdan-mover-logo.png",
              url: "https://hamdanmoversuae.com/images/hamdan-mover-logo.png",
              contentUrl:
                "https://hamdanmoversuae.com/images/hamdan-mover-logo.png",
              width: 1063,
              height: 172,
              caption: "Hamdan Movers and Packers",
            },
            image: {
              "@id": "https://hamdanmoversuae.com/images/hamdan-mover-logo.png",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971566651978",
              contactType: "Customer Service",
              areaServed: "AE",
              availableLanguage: ["en", "ar"],
            },
          },
        ],
      }),
    },
  };
}
function page() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <ServiceTopSection />
        <Benifits />
        <OurServices />
        <HealthcareSlider />
        <PickUpRentalServices />
        <TestimonialSection />
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}

export default page;
