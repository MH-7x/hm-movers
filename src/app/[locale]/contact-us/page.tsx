import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactForm";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import FAQs from "@/components/FAQs";

interface Params {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "meta-service" });

  return {
    title:
      locale === "ar"
        ? "اتصل بنا | حمدان لنقل الأثاث"
        : "Contact Us | Hamdan Movers",
    description:
      locale === "ar"
        ? "معتبرون في نقل الأثاث في الإمارات العربية المتحدة، فريق عمل محترف وأحدث المعدات. نضمن لك عملية نقل سلسة وفعالة، مع تقدير لتعليقاتك لتحسين خدماتنا. ثق بنا!"
        : "Expert movers in UAE with a skilled team and the latest equipment. We ensure a smooth, efficient move while valuing your feedback to improve our services. Trust us!",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/contact-us/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/contact-us/`,
        en: `${process.env.PUBLIC_URL}/en/contact-us/`,
        "x-default": `${process.env.PUBLIC_URL}/en/contact-us/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "اتصل بنا | حمدان لنقل الأثاث"
          : "Contact Us | Hamdan Movers",
      description:
        locale === "ar"
          ? "معتبرون في نقل الأثاث في الإمارات العربية المتحدة، فريق عمل محترف وأحدث المعدات. نضمن لك عملية نقل سلسة وفعالة، مع تقدير لتعليقاتك لتحسين خدماتنا. ثق بنا!"
          : "Expert movers in UAE with a skilled team and the latest equipment. We ensure a smooth, efficient move while valuing your feedback to improve our services. Trust us!",
      url: `${process.env.PUBLIC_URL}/${locale}/contact-us/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
        alt: "Hamdan Movers Logo",
      },
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${process.env.PUBLIC_URL}/${locale}/contact-us/`,
            url: `${process.env.PUBLIC_URL}/${locale}/contact-us/`,
            name:
              locale === "ar"
                ? "اتصل بنا | حمدان لنقل الأثاث"
                : "Contact Us | Hamdan Movers",
            isPartOf: { "@id": `${process.env.PUBLIC_URL}/${locale}#website` },
            primaryImageOfPage: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/contact-us/#primaryimage`,
            },
            image: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/contact-us/#primaryimage`,
            },
            thumbnailUrl: `${process.env.PUBLIC_URL}/images/contact-us-hamdan-movers.jpg`,
            datePublished: "2023-01-01",
            dateModified: "2024-10-15T12:00:00Z",
            breadcrumb: {
              "@id": `${process.env.PUBLIC_URL}/${locale}/contact-us/#breadcrumb`,
            },
            inLanguage: locale === "ar" ? "ar-AE" : "en-US",
            potentialAction: [
              {
                "@type": "CommunicateAction",
                target: [`${process.env.PUBLIC_URL}/${locale}/contact-us/`],
                description:
                  "Contact Hamdan Movers for reliable and professional moving services in Dubai, UAE. Our customer service team is available to assist with your moving queries.",
              },
            ],
            hasPart: [
              {
                "@type": "WebPage",
                "@id": `${process.env.PUBLIC_URL}/${locale}/services/`,
                name: "Services",
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
            "@id": `${process.env.PUBLIC_URL}/${locale}/contact-us/#primaryimage`,
            url: `${process.env.PUBLIC_URL}/images/contact-us-hamdan-movers.jpg`,
            contentUrl: `${process.env.PUBLIC_URL}/images/contact-us-hamdan-movers.jpg`,
            width: 2000,
            height: 1333,
            caption:
              "Contact Hamdan Movers in Dubai, UAE for professional and safe moving services.",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${process.env.PUBLIC_URL}/${locale}/contact-us/#breadcrumb`,
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
                name: "Contact Us",
                item: `${process.env.PUBLIC_URL}/${locale}/contact-us/`,
              },
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${process.env.PUBLIC_URL}/#website`,
            url: `${process.env.PUBLIC_URL}/${locale}/`,
            name: "Hamdan Movers",
            description:
              "Hamdan Movers is a professional moving company based in Dubai, UAE. We offer a wide range of services including local and international moving, packing, storage, and specialty moving services.",
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
              inLanguage: locale === "ar" ? "ar-AE" : "en-US",
              "@id": `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
              url: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
              contentUrl: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
              width: 1063,
              height: 172,
              caption: "Hamdan Movers and Packers",
            },
            image: {
              "@id": `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
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

function ContactUsPage() {
  const locale = useLocale();
  const t = useTranslations("contact-p");
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div className="w-full md:w-11/12 md:mt-48 mt-36">
          <div className="flex items-center w-full flex-col">
            <h1
              className={`text-center mb-3 text-[60px] ${
                locale === "ar" ? "font-arabic font-bold" : "font-medium"
              }`}
            >
              {t("title")}
            </h1>
            <h2
              className={`text-center ${
                locale === "ar" ? "mt-3 font-arabic" : "md:mt-0 mt-3"
              }`}
            >
              {" "}
              {t("sub")}
            </h2>
          </div>

          <div className="bg-slate-50 flex justify-center md:py-8 py-0 px-0 mt-10">
            <ContactUs isPage={true} />
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-full md:w-11/12 h-96 bg-gradient-to-t from-slate-100 to-slate-300 rounded-2xl overflow-hidden">
              <iframe
                aria-label="google map location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d901.4683924553564!2d55.39522426953228!3d25.34202321065021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIwJzMxLjMiTiA1NcKwMjMnNDUuMSJF!5e0!3m2!1sen!2s!4v1726905077160!5m2!1sen!2s"
                className="w-full h-full drop-shadow-lg"
                style={{
                  border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-center items-center">
            <FAQs />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUsPage;
