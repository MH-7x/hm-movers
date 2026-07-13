import { Link } from "@/i18n/routing";
import ajmanImage from "../../public/images/ajman-image.jpg";
import dubaiImage from "../../public/images/dubai-image.jpg";
import sharjahImage from "../../public/images/sharjah-image.jpg";
import { Button } from "./ui/button";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
function Locations() {
  const t = useTranslations("locations");
  const b = useTranslations("buttons");
  const locale = useLocale();
  return (
    <div className="w-full md:w-11/12 md:mt-5 mt-0">
      <div className="min-h-32">
        <ul
          className={`mt-5 flex flex-col md:gap-y-0  gap-y-10 ${
            locale === "ar" ? "md:ml-20" : "md:ml-20"
          }`}
        >
          <li className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <Link href={"/services-locations/movers-and-packers-dubai/"}>
                <h2
                  className={`${
                    locale === "ar"
                      ? "text-right font-arabic font-bold"
                      : "text-left"
                  }`}
                >
                  {t("dubai.title")}
                </h2>
              </Link>
              <p
                className={`md:mt-5 mt-3 ${
                  locale === "ar" ? "text-right font-arabic ar-p" : "text-left"
                }`}
              >
                {t("dubai.desc")}
              </p>
              {locale == "ar" ? (
                <>
                  <p className="text-right font-arabic ar-p">
                    اتصل بالأفضل{" "}
                    <a href="https://moversandpackersinuae.com/نقل-اثاث-دبي">
                      نقل اثاث في دبي
                    </a>{" "}
                  </p>
                </>
              ) : (
                <>
                  {" "}
                  <p>
                    contact the{" "}
                    <a href="https://moversandpackersinuae.com">
                      best movers and packers in dubai, uae
                    </a>{" "}
                    .
                  </p>
                </>
              )}

              <div
                dir={locale === "ar" ? "rtl" : "ltr"}
                className="flex gap-x-5 mt-5"
              >
                <Link href={"tel:+971566651978"}>
                  <Button dir="ltr">Call Now</Button>
                </Link>
                <Link href={"/services-locations/movers-and-packers-dubai/"}>
                  <Button variant={"secondary"}>{b("View More")}</Button>
                </Link>
              </div>
            </div>
            <div className="md:flex hidden justify-center">
              <div className="md:w-96 h-96 bg-gradient-to-t from-gray-100 to-gray-300 rounded-3xl drop-shadow-xl relative overflow-hidden">
                <Image
                  alt="Moving In Dubai | hamdan Mover"
                  aria-label="dubai image"
                  src={dubaiImage}
                  fill
                  placeholder="blur"
                  className="object-cover absoluteS"
                />
              </div>
            </div>
          </li>
          <li className="grid md:grid-cols-2 grid-cols-1 items-center md:-ml-32">
            <div className="md:flex hidden justify-center">
              <div className="md:w-96 h-96 bg-gradient-to-t from-gray-100 to-gray-300 rounded-3xl drop-shadow-xl relative overflow-hidden">
                <Image
                  alt="Moving In Dubai | hamdan Mover"
                  aria-label="dubai image"
                  src={sharjahImage}
                  fill
                  placeholder="blur"
                  className="object-cover absolute"
                />
              </div>
            </div>
            <div>
              <Link href={"/services-locations/movers-and-packers-sharjah/"}>
                <h2
                  className={`${
                    locale === "ar" ? "font-arabic font-bold" : ""
                  }`}
                >
                  {t("sharjah.title")}
                </h2>
              </Link>
              <p className={`md:mt-5 mt-3 ${locale === "ar" ? "ar-p" : ""}`}>
                {t("sharjah.desc")}
              </p>

              <p>
                contact the{" "}
                <a href="https://moversandpackersinuae.com/movers-and-packers-in-sharjah">
                  sharjah&apos;s top-rated movers and packers
                </a>{" "}
                .
              </p>
              <div className="flex gap-x-5 mt-5">
                <Link href={"tel:+971566651978"}>
                  <Button dir="ltr">Call Now</Button>
                </Link>
                <Link href={"/services-locations/movers-and-packers-sharjah/"}>
                  <Button variant={"secondary"}>{b("View More")}</Button>
                </Link>
              </div>
            </div>
          </li>
          <li className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <Link href={"/services-locations/movers-and-packers-ajman/"}>
                <h2
                  className={`${
                    locale === "ar"
                      ? "text-right font-arabic font-bold"
                      : "text-left"
                  }`}
                >
                  {t("ajman.title")}
                </h2>
              </Link>
              <p
                className={`md:mt-5 mt-3 ${
                  locale === "ar" ? "text-right font-arabic ar-p" : "text-left"
                }`}
              >
                {t("ajman.desc")}
              </p>

              <p>
                contact the{" "}
                <a href="https://moversandpackersinuae.com/movers-in-ajman">
                  movers and packers in ajman
                </a>{" "}
                .
              </p>
              <div
                dir={locale === "ar" ? "rtl" : "ltr"}
                className="flex gap-x-5 mt-5"
              >
                <Link href={"tel:+971566651978"}>
                  <Button dir="ltr">Call Now</Button>
                </Link>
                <Link href={"/services-locations/movers-and-packers-ajman/"}>
                  <Button variant={"secondary"}>{b("View More")}</Button>
                </Link>
              </div>
            </div>
            <div className="md:flex hidden justify-center">
              <div className="md:w-96 h-96 bg-gradient-to-t from-gray-100 to-gray-300 rounded-3xl drop-shadow-xl relative overflow-hidden">
                <Image
                  alt="Moving In Dubai | hamdan Mover"
                  aria-label="dubai image"
                  src={ajmanImage}
                  fill
                  placeholder="blur"
                  className="object-cover absolute"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Locations;
