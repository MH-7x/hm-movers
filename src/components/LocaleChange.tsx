// components/LocaleSwitcher.tsx
"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import transtImage from "../../public/images/language-translate.png";
import { useState } from "react";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();

  const pathname = usePathname(); // Get current path
  const [langChange, setLangChange] = useState(false);
  const changeLocale = (locale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

    const newPath = `/${locale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <div className="w-9 mt-2 h-9 relative flex items-center justify-center">
      <Image
        onClick={() => setLangChange((prev) => !prev)}
        alt="language changing icon"
        src={transtImage}
        fill
        className="object-contain saturate-150"
      />
      {langChange ? (
        <div className="flex flex-col gap-y-2 px-2 py-4 w-52 h-auto bg-white drop-shadow-2xl absolute -bottom-36 -left-1/2 -translate-x-1/2 rounded-3xl">
          <button
            className="w-full cursor-pointer py-3 text-center rounded-3xl hover:bg-slate-50 transition-all border border-neutral-200"
            onClick={() => changeLocale("ar")}
          >
            Arabic
          </button>
          <button
            className="w-full cursor-pointer py-3 text-center rounded-3xl hover:bg-slate-50 transition-all border border-neutral-200"
            onClick={() => changeLocale("en")}
          >
            English
          </button>
        </div>
      ) : null}
    </div>
  );
}
