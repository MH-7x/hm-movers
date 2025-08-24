import { EmailTemplate } from "@/components/EmailTemplate";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_7Z359No3_3wDKbWZP2KotHsxSfDFeardj");
export async function POST(req: NextRequest) {
  const fdata = await req.formData();
  if (
    Object.keys(fdata).some((field) => {
      if (field === "" || !field.includes("service")) {
        return NextResponse.json({ success: false });
      }
    })
  )
    console.log("Form Data : ", fdata);
  try {
    const { data, error } = await resend.emails.send({
      from: "Hamdan Movers <onboarding@resend.dev>",
      to: ["hamdan.movers.packers@gmail.com"],
      subject: "New Contact From Hamdan Movers",
      react: EmailTemplate({
        name: String(fdata.get("name")),
        phone: String(fdata.get("phone")),
        address: String(fdata.get("address")),
        services: String(fdata.get("service")),
        message: String(fdata.get("message")),
      }),
    });

    if (error) {
      console.log("EMAIL SENDING ERROR: ", error);

      return Response.json(
        {
          message:
            "Order connot confirm because of network issue or something else.",
        },
        { status: 500 }
      );
    }
    console.log(data?.id);

    return NextResponse.redirect(
      new URL(
        `${process.env.PUBLIC_URL}/${req.nextUrl.locale}?ok=true`,
        req.url
      )
    );
    // return NextResponse.json({
    //   success: true,
    //   id: data?.id,
    // });
  } catch (error) {
    return NextResponse.json({
      success: false,
    });
  }
}
