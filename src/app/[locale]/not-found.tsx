import React from "react";
import notfoundImage from "../../../public/images/not-found.svg";
import Image from "next/image";
function notfound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Page Not Found</title>
      </head>
      <body>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="md:w-[600px] w-80 md:h-[630px] h-96 drop-shadow-2xl p-1 bg-white relative">
            <Image
              alt="page not found"
              src={notfoundImage}
              fill
              className="object-contain absolute"
            />
          </div>
        </div>
      </body>
    </html>
  );
}

export default notfound;
