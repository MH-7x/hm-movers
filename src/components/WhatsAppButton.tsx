"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Link } from "@/i18n/routing";
function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen((p) => !p)}
        className="cursor-pointer active:scale-[0.98] transition-all fixed p-2 rounded-full bottom-4 right-4 z-[500] "
      >
        <Image
          src={"/images/whatsapp-icon.png"}
          alt="whatsapp icon"
          width={45}
          height={45}
          quality={90}
          className="drop-shadow-xl"
        />
      </div>
      {open && (
        <div className="w-full h-full bg-black/50 fixed top-0 left-0 z-[400] flex items-center justify-center ">
          <div className="md:w-[450px] w-[95%] h-auto bg-white drop-shadow-2xl rounded-3xl py-10 px-3 relative">
            <X
              onClick={() => setOpen((p) => !p)}
              strokeWidth={1.2}
              className="absolute top-3 right-3 w-9 h-9"
            />

            <h3 className="font-normal text-center">Hi there !</h3>
            <h3 className="font-normal text-center">How we can help you ?</h3>
            <div className="flex gap-y-5 mt-10 w-full flex-col">
              <div className="w-full bg-gradient-to-r from-white to-gray-50 md:px-4 px-2 py-3 border rounded-3xl">
                <p className="text-[23px] tracking-wider font-medium text-black">
                  +971 56 6651978
                </p>
                <div className="w-full flex gap-x-4 mt-3">
                  <Link
                    href={
                      "https://wa.me/+971566651978?text=I%20need%20a%20service"
                    }
                  >
                    <Button
                      size={"sm"}
                      variant="whatsapp"
                      className="flex gap-x-1 text-white ts hover:bg-green-600 items-center"
                    >
                      <IconBrandWhatsapp className="w-7 h-7" /> WhatsApp
                    </Button>
                  </Link>
                  <Link href={"tel:+971566651978"}>
                    <Button size={"sm"} variant={"outline"}>
                      Call Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full bg-gradient-to-r from-white to-gray-50 md:px-4 px-2 py-3 border rounded-3xl">
                <p className="text-[23px] tracking-wider font-medium text-black">
                  +971 50 3626685
                </p>
                <div className="w-full flex gap-x-4 mt-3">
                  <Link
                    href={
                      "https://wa.me/+971503626685?text=I%20need%20a%20service"
                    }
                  >
                    <Button
                      size={"sm"}
                      variant="whatsapp"
                      className="flex gap-x-1 text-white ts hover:bg-green-600 items-center"
                    >
                      <IconBrandWhatsapp className="w-7 h-7" /> WhatsApp
                    </Button>
                  </Link>
                  <Link href={"tel:+971503626685"}>
                    <Button size={"sm"} variant={"outline"}>
                      Call Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppButton;
