import { DESTINATIONS, EMIRATES, MOVING_TYPES, PAGE_SLUGS } from "./options";

export type QuoteInput = {
  name: string;
  phone: string;
  from: string;
  to: string;
  type: string;
  date: string;
  message: string;
  page: string;
};

export type QuoteField = Exclude<keyof QuoteInput, "page">;
export type QuoteErrors = Partial<Record<QuoteField, string>>;

// UAE mobile (05X XXX XXXX) or landline (0X XXX XXXX), with +971 / 00971 / 971 / 0 prefix,
// or a bare mobile number without the leading 0 (5X XXX XXXX).
const UAE_PHONE = /^(?:(?:\+971|00971|971|0)(?:5\d{8}|[234679]\d{7})|5\d{8})$/;

export function normalizePhone(raw: string) {
  return raw.replace(/[\s\-().]/g, "");
}

/** Today's date in the UAE (UTC+4) as YYYY-MM-DD. */
export function uaeToday(now = new Date()) {
  const uae = new Date(now.getTime() + 4 * 60 * 60 * 1000);
  return uae.toISOString().slice(0, 10);
}

export function validateField(field: QuoteField, value: string): string | undefined {
  const v = value.trim();
  switch (field) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Please enter at least 2 characters.";
      if (v.length > 80) return "Please keep your name under 80 characters.";
      return;
    case "phone":
      if (!v) return "Please enter your phone number.";
      if (!UAE_PHONE.test(normalizePhone(v)))
        return "Please enter a UAE number, for example 056 665 1978.";
      return;
    case "from":
      if (!(EMIRATES as readonly string[]).includes(v)) return "Please choose where you're moving from.";
      return;
    case "to":
      if (!(DESTINATIONS as readonly string[]).includes(v)) return "Please choose where you're moving to.";
      return;
    case "type":
      if (!(MOVING_TYPES as readonly string[]).includes(v)) return "Please choose your moving type.";
      return;
    case "date":
      if (!v) return "Please choose your moving date.";
      if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return "Please choose a valid date.";
      if (v < uaeToday()) return "Please choose today or a later date.";
      return;
    case "message":
      if (v.length > 1000) return "Please keep your message under 1,000 characters.";
      return;
  }
}

export const FIELD_ORDER: QuoteField[] = ["name", "phone", "from", "to", "type", "date", "message"];

export function validateQuote(input: QuoteInput): QuoteErrors {
  const errors: QuoteErrors = {};
  for (const f of FIELD_ORDER) {
    const err = validateField(f, input[f] ?? "");
    if (err) errors[f] = err;
  }
  return errors;
}

export function isPageSlug(v: string) {
  return (PAGE_SLUGS as readonly string[]).includes(v);
}
