import type { ConsentOption, Restaurant } from "./types";

export const CONSENT_OPTIONS: ConsentOption[] = [
  {
    id: "session",
    title: "Share live location for this delivery",
    description:
      "Used only from pickup to delivery, then automatically switched off. Nothing is stored after your order arrives.",
    recommended: true,
  },
  {
    id: "foreground",
    title: "Only while I'm using the app",
    description:
      "Helps find restaurants near you. No background or delivery tracking access.",
  },
  {
    id: "manual",
    title: "Don't share — I'll enter my address",
    description:
      "You can still order normally. Live delivery tracking will show partner location only, not yours.",
  },
];

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Bowl & Broth Kitchen",
    eta: "25–30 min",
    rating: 4.3,
    cuisine: "North Indian",
    avgCost: "₹300 for one",
    gradient: "linear-gradient(135deg,#FFD9A8,#FC8019)",
    orderableItem: { name: "Paneer Butter Masala Bowl", price: 249, quantity: 1 },
  },
  {
    name: "Green Leaf Salads",
    eta: "30–35 min",
    rating: 4.5,
    cuisine: "Healthy",
    avgCost: "₹220 for one",
    gradient: "linear-gradient(135deg,#B7E4C7,#1FAA59)",
  },
  {
    name: "Spice Route Express",
    eta: "20–25 min",
    rating: 4.1,
    cuisine: "Biryani",
    avgCost: "₹280 for one",
    gradient: "linear-gradient(135deg,#FFD9E4,#D64545)",
  },
];

export const DELIVERY_FEE = 28;

export function formatAddressLabel(mode: "session" | "foreground"): {
  icon: string;
  badgeText: string;
  badgeClass: string;
} {
  if (mode === "session") {
    return { icon: "📍 Detected from live location", badgeText: "SESSION-ONLY", badgeClass: "status-pill session" };
  }
  return { icon: "📍 Detected while using the app", badgeText: "FOREGROUND ONLY", badgeClass: "status-pill on" };
}
