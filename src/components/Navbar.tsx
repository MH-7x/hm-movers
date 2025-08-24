"use client";
import { Link } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  IconLocationPin,
  IconMapPin,
  IconMenu2,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ChevronDown, Phone, PhoneIcon, TimerIcon, X } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/hamdan-mover-logo.png";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleChange";
function Navbar() {
  const t = useTranslations("navitems");
  const b = useTranslations("buttons");
  const navItems: { name: string; link: string; sub?: boolean }[] = [
    {
      name: t("home"),
      link: "/",
    },
    {
      name: t("service"),
      link: "/services",
      sub: true,
    },
    {
      name: t("rent-services"),
      link: "/pickup-rental-trucks",
    },
    {
      name: t("moving-locations"),
      link: "/services-locations",
    },

    {
      name: t("about-us"),
      link: "/about-us",
    },
    {
      name: t("contact-us"),
      link: "/contact-us",
    },
  ];

  const subServices: { name: string; link: string }[] = [
    {
      name: t("services-sub.local"),
      link: "/services/local-residential-movers",
    },
    {
      name: t("services-sub.commercial"),
      link: "/services/commerical-office-movers",
    },
    {
      name: t("services-sub.packing"),
      link: "/services/packing-services",
    },
    {
      name: t("services-sub.storage"),
      link: "/services/storage-services",
    },
    {
      name: t("services-sub.specialty"),
      link: "/services/speciality-moving",
    },
    {
      name: t("services-sub.international"),
      link: "/services/international-moving",
    },
  ];
  const locations: { name: string; link: string }[] = [
    {
      name: t("sub-menu-all.dubai"),
      link: "/services-locations/movers-and-packers-dubai",
    },
    {
      name: t("sub-menu-all.sharjah"),
      link: "/services-locations/movers-and-packers-sharjah",
    },
    {
      name: t("sub-menu-all.ajman"),
      link: "/services-locations/movers-and-packers-ajman",
    },
  ];
  const rent: { name: string; link: string }[] = [
    {
      name: t("sub-menu-all.dubai"),
      link: "/pickup-rental-trucks-in-dubai",
    },
    {
      name: t("sub-menu-all.sharjah"),
      link: "/pickup-rental-trucks-in-sharjah",
    },
    {
      name: t("sub-menu-all.ajman"),
      link: "/pickup-rental-trucks-in-ajman",
    },
  ];
  const locale = useLocale();
  const [infoDetailOpen, setInfoDetailOpen] = useState(false);
  const [subServicesMenu, setsubServicesMenu] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [navAni, setNavAni] = useState(false);
  const [location, setlocation] = useState(false);
  const [rental, setrental] = useState(false);
  useEffect(() => {
    
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          setNavAni(true);
        } else {
          setNavAni(false);
        }
      });
    }
  }, []);
  return (
    <>
      <header className="w-full fixed left-0 flex flex-col items-center justify-center z-[200] font-poppins">
        {!navAni && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 1,
            }}
            transition={{
              ease: "linear",
              duration: "0.1",
            }}
            className="hidden transition-opacity info w-full md:px-10 md:flex justify-between items-center b-bg min-h-14 bg-red-200"
          >
            <div className="flex ">
             
              <Link
                href={"tel:+971566651978"}
                className="text-white flex gap-x-1 items-center"
              >
                <PhoneIcon
                  strokeWidth={0}
                  fill="white"
                  className="p-1 bg-orange-600 rounded-full ts"
                />{" "}
                <span className="tracking-wide">+971566651978</span>
              </Link>
              <Link
                href={"tel:+971503626685"}
                className="text-white flex gap-x-1 pl-4 items-center"
              >
                <PhoneIcon
                  strokeWidth={0}
                  fill="white"
                  className="p-1 bg-orange-600 rounded-full ts"
                />{" "}
                <span className="tracking-wide">+971503626685</span>
              </Link>
            </div>
            <div className="flex items-center">
              <IconLocationPin
                strokeWidth={1.4}
                className="p-1 bg-orange-600 text-white rounded-full ts"
              />
              <span
                className={`${
                  locale === "ar" ? "ar-p" : "text-sm font-light"
                } text-white pl-2`}
              >
                {t("address")}
              </span>
            </div>
          </motion.div>
        )}
        <nav
          className={`border flex relative justify-between items-center md:px-4 px-2 md:w-11/12 bg-white my-3 ${
            !navAni ? "md:mt-1" : "shadow-lg shadow-neutral-100"
          } mt-0 md:h-[82px] h-[68px] md:rounded-full rounded-none w-full transition-all`}
        >
          <div className="md:w-36 w-[100px] h-14 relative md:mr-0 mr-2">
            <Image
              src={logo}
              fill
              priority
              sizes="100"
              className=" object-contain absolute"
              alt="hamdan movers logo"
            />
          </div>
          <div className="md:block hidden">
            <ul>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`inline-block relative ${
                    index === 1 || index === 2 || index === 3 ? "group" : ""
                  }`}
                >
                  <Link
                    className={` text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-3 text-center transition-all rounded-3xl active:scale-[0.98] ${
                      locale === "ar"
                        ? "font-arabic font-bold text-xl leading-4"
                        : "font-poppins"
                    }`}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                  {index === 1 && (
                    <>
                      <div className="hidden group-hover:block w-80 bg-white drop-shadow-2xl h-auto absolute -bottom-[285px] left-0 rounded-3xl">
                        <ul className="p-4">
                          {subServices.map((sub, i) => (
                            <Link
                              key={i}
                              className={`block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative ${
                                locale === "ar" ? "font-arabic font-bold" : ""
                              }`}
                              href={sub.link}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="hidden group-hover:block w-80 bg-white drop-shadow-2xl h-auto absolute -bottom-40 left-0 rounded-3xl">
                        <ul className="p-4">
                          {rent.map((loc, i) => (
                            <Link
                              key={i}
                              className={`block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative ${
                                locale === "ar" ? "font-arabic font-bold" : ""
                              }`}
                              href={loc.link}
                            >
                              {loc.name}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className="hidden group-hover:block w-80 bg-white drop-shadow-2xl h-auto absolute -bottom-40 left-0 rounded-3xl">
                        <ul className="p-4">
                          {locations.map((loc, i) => (
                            <Link
                              key={i}
                              className={`block text-black border border-transparent mx-[2px] hover:border-neutral-200 px-4 py-2 transition-all rounded-3xl active:scale-[0.98] relative ${
                                locale === "ar" ? "font-arabic font-bold" : ""
                              }`}
                              href={loc.link + "/"}
                            >
                              {loc.name}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex gap-x-2 flex-row-reverse">
            <Link href={"/contact-us/"}>
              <Button className="md:block hidden">{b("contact-now")}</Button>
            </Link>

            <div className="md:hidden flex items-center justify-center px-2 md:py-[6px] py-0   rounded-md active:scale-[0.98] transition-all bg-[#FF5F00]">
              <IconMenu2
                className="text-white"
                onClick={() => setSideMenu((prev) => !prev)}
              />
            </div>
            <LocaleSwitcher />
            <div
              onClick={() => setInfoDetailOpen((prev) => !prev)}
              className="md:hidden md:w-[73px] w-16 md:h-12 h-10 md:mt-0 mt-1 rounded-3xl flex items-center justify-between p-[6px] border border-neutral-200 hover:border-neutral-300"
            >
              <IconPhone className="pr" />
              <ChevronDown
                className={`w-4 pr transition-transform ${
                  infoDetailOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {infoDetailOpen ? (
              <motion.div
                initial={{
                  y: "10%",
                  opacity: 0,
                }}
                animate={{
                  y: "0",
                  opacity: 1,
                }}
                transition={{
                  ease: "linear",
                  duration: 0.3,
                }}
                className="absolute -bottom-[133px] rounded-2xl  bg-white/95 backdrop-blur-sm flex flex-col gap-y-2 w-[97%] z-[551] px-3 py-4"
              >
                <div className="flex justify-start gap-x-2 items-center">
                  <IconMapPin className="pr size-10" />{" "}
                  <p className={locale === "ar" ? "ar-p" : "text-sm"}>
                    {t("address")}
                  </p>
                </div>
                <div className="flex justify-start gap-x-2 items-center">
                  <TimerIcon className="pr" />{" "}
                  <p className="text-sm">Open 24 Hours</p>
                </div>
                <div className="flex justify-start gap-x-2 items-center">
                  <Phone className="pr p-[2px]" />{" "}
                  <Link href={"tel:+971566651978"}>+971566651978</Link>
                  <Link href={"tel:+971503626685"}>+971503626685</Link>
                </div>
              </motion.div>
            ) : null}
          </div>
        </nav>
      </header>
      {sideMenu ? (
        <motion.div
          initial={{
            opacity: 0,
            right: "-100%",
          }}
          animate={{
            opacity: 1,
            right: "0",
          }}
          transition={{
            ease: "linear",
            duration: 0.3,
          }}
          exit={{
            opacity: 0,
            right: "-100%",
          }}
          className="w-4/5 h-full overflow-y-auto bg-white/80 backdrop-blur-md fixed top-0 right-0 z-[201] pb-5"
        >
          <div className="mt-14">
            <ul>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="pb block border-b mx-[2px]  px-4 py-3 transition-all font-semibold"
                >
                  {item?.sub ? (
                    <>
                      <div className="flex flex-col">
                        <div className="flex gap-x-5 items-center">
                          <Link
                            className={`active:text-[#287094] ${
                              locale === "ar" ? "ar-p" : "font-poppins"
                            }`}
                            href={item.link}
                          >
                            {item.name}
                          </Link>{" "}
                          <ChevronDown
                            className={`w-6 h-6 transition-transform ${
                              subServicesMenu ? "rotate-180" : "rotate-0"
                            }`}
                            onClick={() => setsubServicesMenu((prev) => !prev)}
                          />
                        </div>
                        {subServicesMenu ? (
                          <div className="w-full px-5 block transition-all duration-300">
                            {subServices.map((ser, i) => (
                              <Link
                                href={ser.link}
                                className={`block my-3 ${
                                  locale === "ar"
                                    ? "ar-p"
                                    : "font-normal font-poppins"
                                }`}
                                key={i}
                              >
                                {ser.name}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <>
                      <Link href={item.link}> {item.name}</Link>
                      {index === 2 && (
                        <ChevronDown
                          className={`w-6 h-6 transition-transform inline-block ml-5 ${
                            rental ? "rotate-180" : "rotate-0"
                          }`}
                          onClick={() => setrental((prev) => !prev)}
                        />
                      )}
                      {index === 2 && rental && (
                        <div className="w-full px-5 block transition-all duration-300">
                          {rent.map((loc, i) => (
                            <Link
                              href={loc.link}
                              className={`block my-3 ${
                                locale === "ar"
                                  ? "ar-p"
                                  : "font-normal font-poppins"
                              }`}
                              key={i}
                            >
                              {loc.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {index === 3 && (
                        <ChevronDown
                          className={`w-6 h-6 transition-transform inline-block ml-5 ${
                            location ? "rotate-180" : "rotate-0"
                          }`}
                          onClick={() => setlocation((prev) => !prev)}
                        />
                      )}
                      {index === 3 && location && (
                        <div className="w-full px-5 block transition-all duration-300">
                          {locations.map((loc, i) => (
                            <Link
                              href={loc.link}
                              className={`block my-3 ${
                                locale === "ar"
                                  ? "ar-p"
                                  : "font-normal font-poppins"
                              }`}
                              key={i}
                            >
                              {loc.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="mt-7 flex w-full justify-center">
            <Button size={"lg"}>Contact Now</Button>
          </div>

          <X
            onClick={() => setSideMenu(false)}
            strokeWidth={1}
            className="absolute cursor-pointer active:scale-95 transition-transform top-4 right-4 h-12 w-12 rounded-full bg-gray-50 p-2"
          />
        </motion.div>
      ) : null}
    </>
  );
}

export default Navbar;
