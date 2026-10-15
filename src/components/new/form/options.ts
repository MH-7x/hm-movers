export const EMIRATES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
] as const;

export const DESTINATIONS = [...EMIRATES, "Outside UAE (GCC)"] as const;

export const MOVING_TYPES = [
  "Studio",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK+",
  "Villa",
  "Office",
  "Single item",
  "Packing only",
  "Other",
] as const;

export type Emirate = (typeof EMIRATES)[number];
export type MovingType = (typeof MOVING_TYPES)[number];

export const PAGE_SLUGS = [
  "movers-and-packers-in-dubai",
  "movers-in-abu-dhabi",
  "movers-in-sharjah",
  "movers-in-ajman",
  "movers-in-ras-al-khaimah",
  "movers-in-fujairah",
  "house-movers",
  "villa-movers",
  "office-movers",
  "packing-services",
  "apartment-movers",
  "affordable-movers",
] as const;

export type PageSlug = (typeof PAGE_SLUGS)[number];
