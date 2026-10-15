import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  isPageSlug,
  normalizePhone,
  validateQuote,
  type QuoteInput,
} from "@/components/new/form/validate";

// Lead endpoint for the Google Ads landing pages in src/app/(new).
// Accepts JSON (fetch from QuoteForm) and form posts (no-JS fallback).

const TO = "hamdan.movers.packers@gmail.com";
const FROM = "Hamdan Movers <onboarding@resend.dev>";

function esc(v: string) {
  return v.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
}

function pickString(v: unknown) {
  return typeof v === "string" ? v.slice(0, 2000) : "";
}

export async function POST(req: NextRequest) {
  const isJson = (req.headers.get("content-type") || "").includes(
    "application/json",
  );

  let raw: Record<string, unknown> = {};
  try {
    raw = isJson
      ? await req.json()
      : Object.fromEntries((await req.formData()).entries());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const input: QuoteInput = {
    name: pickString(raw.name).trim(),
    phone: pickString(raw.phone).trim(),
    from: pickString(raw.from),
    to: pickString(raw.to),
    type: pickString(raw.type),
    date: pickString(raw.date),
    message: pickString(raw.message).trim(),
    page: pickString(raw.page),
  };
  const page = isPageSlug(input.page) ? input.page : "";
  const backUrl = new URL(`/${page ? `${page}/` : ""}?sent=1#quote`, req.url);

  // Honeypot: pretend success so bots learn nothing.
  if (pickString(raw.company)) {
    return isJson
      ? NextResponse.json({ ok: true })
      : NextResponse.redirect(backUrl, 303);
  }

  const errors = validateQuote(input);
  if (Object.keys(errors).length > 0) {
    if (isJson)
      return NextResponse.json({ ok: false, errors }, { status: 422 });
    return NextResponse.redirect(
      new URL(`/${page ? `${page}/` : ""}#quote`, req.url),
      303,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("lp-quote: missing RESAND_API_KEY");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const phone = normalizePhone(input.phone);
  const intl = /^5\d{8}$/.test(phone)
    ? `971${phone}`
    : phone.replace(/^(?:\+971|00971|971|0)/, "971");
  const rows: [string, string][] = [
    ["Name", input.name],
    ["Phone", input.phone],
    ["Moving from", input.from],
    ["Moving to", input.to],
    ["Moving type", input.type],
    ["Moving date", input.date],
    ["Message", input.message || "-"],
    ["Landing page", page ? `/${page}/` : "unknown"],
  ];
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#202020">
      <h2 style="margin:0 0 12px;color:#14212A">New quote request</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="border-bottom:1px solid #eee;font-weight:bold">${esc(k)}</td><td style="border-bottom:1px solid #eee">${esc(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top:16px">
        <a href="tel:+${esc(intl)}">Call the customer</a> ·
        <a href="https://wa.me/${esc(intl)}">WhatsApp the customer</a>
      </p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: `New quote – ${page || "page"} – ${input.name}`,
      html,
    });
    if (error) {
      console.error("lp-quote: resend error", error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error("lp-quote: send failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return isJson
    ? NextResponse.json({ ok: true })
    : NextResponse.redirect(backUrl, 303);
}
