/**
 * Screens in the happy-path flow.
 * home -> checkout -> (consent modal) -> address -> tracking -> delivered
 * privacy is reachable from anywhere via the avatar icon.
 */
export type ScreenId =
  | "home"
  | "checkout"
  | "address"
  | "tracking"
  | "delivered"
  | "privacy";

/**
 * The three purpose-scoped consent options offered in the modal.
 * This is the core DPDP-aligned redesign: no single bundled
 * "allow or don't use the app" prompt.
 */
export type ConsentChoice = "session" | "foreground" | "manual";

export interface ConsentOption {
  id: ConsentChoice;
  title: string;
  description: string;
  recommended?: boolean;
}

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Restaurant {
  name: string;
  eta: string;
  rating: number;
  cuisine: string;
  avgCost: string;
  gradient: string;
  /** Only the first restaurant is orderable in this happy-path prototype */
  orderableItem?: CartItem;
}

export interface AppState {
  screen: ScreenId;
  cartAdded: boolean;
  showConsentModal: boolean;
  consentChoice: ConsentChoice;
  addressMode: ConsentChoice | null;
  manualEntryOpen: boolean;
  toastVisible: boolean;
  savedAddressDeleted: boolean;
}
