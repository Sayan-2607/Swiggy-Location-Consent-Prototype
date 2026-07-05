import { useEffect, useRef, useState } from "react";
import PhoneFrame from "./components/PhoneFrame";
import HomeScreen from "./components/HomeScreen";
import CheckoutScreen from "./components/CheckoutScreen";
import ConsentModal from "./components/ConsentModal";
import AddressScreen from "./components/AddressScreen";
import TrackingScreen from "./components/TrackingScreen";
import DeliveredScreen from "./components/DeliveredScreen";
import PrivacyScreen from "./components/PrivacyScreen";
import Toast from "./components/Toast";
import type { AppState, ConsentChoice, ScreenId } from "./types";

const INITIAL_STATE: AppState = {
  screen: "home",
  cartAdded: false,
  showConsentModal: false,
  consentChoice: "session",
  addressMode: null,
  manualEntryOpen: false,
  toastVisible: false,
  savedAddressDeleted: false,
};

export default function App() {
  const [state, setState] = useState<AppState>(INITIAL_STATE);
  const toastTimer = useRef<number | null>(null);

  function goTo(screen: ScreenId) {
    setState((s) => ({ ...s, screen }));
  }

  function handleAddToCart() {
    setState((s) => ({ ...s, cartAdded: true }));
  }

  function handleOpenConsentModal() {
    setState((s) => ({ ...s, showConsentModal: true }));
  }

  function handleSelectConsent(choice: ConsentChoice) {
    setState((s) => ({ ...s, consentChoice: choice }));
  }

  function handleConfirmConsent() {
    setState((s) => ({
      ...s,
      showConsentModal: false,
      addressMode: s.consentChoice,
      screen: "address",
      toastVisible: true,
    }));
  }

  function handleDeleteAddress() {
    setState((s) => ({ ...s, savedAddressDeleted: true }));
  }

  // Auto-hide the toast after it appears, cleaning up on unmount.
  useEffect(() => {
    if (state.toastVisible) {
      toastTimer.current = window.setTimeout(() => {
        setState((s) => ({ ...s, toastVisible: false }));
      }, 2600);
    }
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, [state.toastVisible]);

  function renderScreen() {
    switch (state.screen) {
      case "home":
        return (
          <HomeScreen
            cartAdded={state.cartAdded}
            onAddToCart={handleAddToCart}
            onOpenCart={() => goTo("checkout")}
            onOpenPrivacy={() => goTo("privacy")}
          />
        );
      case "checkout":
        return (
          <CheckoutScreen onBack={() => goTo("home")} onConfirm={handleOpenConsentModal} />
        );
      case "address":
        return (
          <AddressScreen
            addressMode={state.addressMode}
            onBack={() => goTo("checkout")}
            onPlaceOrder={() => goTo("tracking")}
          />
        );
      case "tracking":
        return (
          <TrackingScreen onBack={() => goTo("home")} onMarkDelivered={() => goTo("delivered")} />
        );
      case "delivered":
        return (
          <DeliveredScreen
            onReviewPrivacy={() => goTo("privacy")}
            onBackHome={() => setState(INITIAL_STATE)}
          />
        );
      case "privacy":
        return (
          <PrivacyScreen
            savedAddressDeleted={state.savedAddressDeleted}
            onDeleteAddress={handleDeleteAddress}
            onBack={() => goTo("home")}
            onDone={() => goTo("home")}
          />
        );
      default: {
        // Exhaustiveness check: TS will error here if a ScreenId case is missing.
        const _exhaustive: never = state.screen;
        return _exhaustive;
      }
    }
  }

  return (
    <div className="stage">
      <aside className="side-note">
        <h4>Prototype Guide</h4>
        Happy path only. Tap through: Home → Order → Location Consent → Address → Live Tracking →
        Delivered → Privacy Dashboard.
        <br />
        <br />
        Tap the avatar icon (top right) on any screen to jump straight to the Privacy &amp;
        Location dashboard.
      </aside>

      <PhoneFrame>
        {renderScreen()}
        <ConsentModal
          open={state.showConsentModal}
          selected={state.consentChoice}
          onSelect={handleSelectConsent}
          onConfirm={handleConfirmConsent}
        />
        <Toast visible={state.toastVisible} message="✓ Consent saved — you're always in control from Privacy & Location" />
      </PhoneFrame>

      <aside className="side-note right">
        <h4>Why It's Designed This Way</h4>
        No bundled "allow or don't use the app" prompt. Each choice is purpose-specific,
        session-based access auto-expires, and manual entry is a first-class option — not a
        punishment.
      </aside>
    </div>
  );
}
