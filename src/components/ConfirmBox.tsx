"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

function ConfirmBox() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      console.log(window.location.href);

      if (window.location.href.includes("?ok")) {
        setSuccess(true);
      }
    }
  }, []);
  return (
    success === true && (
      <div className=" px-2 fixed flex items-center justify-center gap-y-5 flex-col top-1/2 z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-96 h-80 w-80 bg-white rounded-3xl drop-shadow-2xl">
        <Button size="icon" variant="whatsapp">
          <SendIcon className="text-white" strokeWidth={1.3} />
        </Button>
        <h3 className="text-center">
          Order Send <span className="text-green-600">SuccessFully</span>
        </h3>
        <p className="text-center">
          Your order has been sent successfully, we will contact you as soon as
          possible.
        </p>
        <Button onClick={() => setSuccess(false)} variant="outline">
          OK
        </Button>
      </div>
    )
  );
}

export default ConfirmBox;
