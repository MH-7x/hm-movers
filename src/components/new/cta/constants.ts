export const PHONE_DISPLAY = "056 665 1978";
export const PHONE_TEL = "tel:+971566651978";
export const PHONE2_DISPLAY = "050 362 6685";
export const PHONE2_TEL = "tel:+971503626685";
export const WHATSAPP_NUMBER = "971566651978";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
