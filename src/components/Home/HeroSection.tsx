"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import client from "../../../public/images/800+-clients-reviews.png";
import hours from "../../../public/images/24-hours-icon.png";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import CustomSelect from "../ui/select";
import { SendIcon } from "lucide-react";
import ConfirmBox from "../ConfirmBox";
function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("heroSection");
  const b = useTranslations("buttons");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
      headers: {
        "return-url": window.location.href,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      // const data = await response.json();
      window.location.replace(`/${locale}?ok=true`);
    }
    console.log("Form Data : ", formData);
  };
  return (
    <section id="home" className=" md:mt-48 mt-32 w-full flex justify-center">
      <ConfirmBox />
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`${
          locale === "ar" ? "md:mr-8" : "md:ml-8"
        } w-full md:w-11/12  grid md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-9 items-center`}
      >
        <div className="">
          <h1
            className={`${
              locale === "ar" ? "md:text-[55px] text-right font-bold pb-2" : ""
            }`}
          >
            {t("headingTitle")}
          </h1>
          <h2
            className={`${
              locale === "ar"
                ? "font-arabic font-bold text-right mt-6 mb-5"
                : "font-poppins mt-4 font-light mb-2 leading-7"
            } md:text-[28px] text-[24px]  md:leading-8`}
          >
            {t("SubTitle")}
          </h2>
          <p
            className={`${
              locale === "ar" ? "ar-p text-right" : "text-[18px] font-light"
            }`}
          >
            {t("description")}
          </p>
          <div className="w-full flex md:gap-x-3 md:flex-row flex-col gap-y-3 mt-6">
            <Link aria-label="call now" href={"tel:+971566651978"}>
              <Button className="">
                {b("call now")} : <span dir="ltr">+971 56 6651978</span>
              </Button>
            </Link>
            <Link href={"/services/"}>
              <Button variant={"secondary"}>{b("Our Services")}</Button>
            </Link>
          </div>
          <div
            className={`w-full grid md:grid-cols-2 grid-cols-1 gap-6 text-center ${
              locale === "ar" ? "mt-10" : "mt-6"
            }`}
          >
            <div className="bg-gradient-to-br shadow-md shadow-neutral-100 from-white via-white to-[#ff5e0015] rounded-2xl p-4">
              <div className="w-11 mx-auto mb-4 h-11 rounded-full relative">
                <Image
                  alt="800+ clients reviews"
                  src={client}
                  fill
                  className="object-contain absolute"
                />
              </div>
              <h3>
                <span dir="ltr">{t("box21")}</span> <br />
                {t("box22")}
              </h3>
            </div>
            <div className="bg-gradient-to-br shadow-md shadow-neutral-100 from-white via-white to-[#ff5e0015] rounded-2xl p-4">
              <div className="w-11 mx-auto mb-4 h-11 rounded-full relative">
                <Image
                  alt="24 hours support"
                  src={hours}
                  fill
                  className="object-contain absolute"
                />
              </div>
              <h3>
                {t("box11")} <br />
                {t("box12")}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <form
            dir=""
            className="bg-white md:p-4 p-3 shadow-lg shadow-black/5 rounded-3xl md:w-[85%] w-full  flex items-center justify-center flex-col"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h3 className="text-center mb-6 mt-4">{t("form-h")}</h3>
            <input
              required
              name="name"
              placeholder={t("name")}
              type="text"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <input
              required
              name="phone"
              placeholder={t("phone")}
              type="number"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <input
              required
              name="address"
              placeholder={t("address")}
              type="text"
              className="bg-gray-50 w-full mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
            />
            <CustomSelect
              required={true}
              name="service"
              className="border-none bg-gray-50 mt-3 p-4 rounded-3xl focus:shadow-md transition-shadow"
              options={[
                {
                  value: " Local Moving",
                  label: " Local Moving",
                },
                {
                  value: " Commercial Moving",
                  label: " Commercial Moving",
                },
                {
                  value: "Packing and Unpacking",
                  label: "Packing and Unpacking",
                },
                {
                  value: "International Moving",
                  label: "International Moving",
                },
                {
                  value: "Pickup Trucks Rent",
                  label: "Pickup Trucks Rent",
                },
                {
                  value: "Apartment Moving",
                  label: "Apartment Moving",
                },
                {
                  value: "Villa Moving",
                  label: "Villa Moving",
                },
                {
                  value: "Office Relocation",
                  label: "Office Relocation",
                },
                {
                  value: "Home Cleaning",
                  label: "Home Cleaning",
                },
                {
                  value: "Furniture Cleaning",
                  label: "Furniture Cleaning",
                },
              ]}
              placeholder={t("service")}
            />
            <textarea
              className="w-full h-28 bg-gray-50 mt-3 p-4 outline-none rounded-3xl focus:shadow-md transition-shadow"
              placeholder={t("message")}
              name="message"
              required
            ></textarea>
            <Button type="submit" className="mt-3">
              {b("Send Now")}{" "}
              <SendIcon className="ml-2 w-6 h-6" strokeWidth={1.5} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
