import { useState } from "react";
import HeaderNav from "./HeaderNav";
import { formatAddressLabel, RESTAURANTS, DELIVERY_FEE } from "../data";
import type { ConsentChoice } from "../types";

interface AddressScreenProps {
  addressMode: ConsentChoice | null;
  onBack: () => void;
  onPlaceOrder: () => void;
}

export default function AddressScreen({ addressMode, onBack, onPlaceOrder }: AddressScreenProps) {
  const [manualOverride, setManualOverride] = useState(false);
  const isManual = addressMode === "manual" || manualOverride;
  const total = RESTAURANTS[0].orderableItem!.price + DELIVERY_FEE;

  const label =
    addressMode && addressMode !== "manual" ? formatAddressLabel(addressMode) : null;

  return (
    <div className="screen active">
      <div className="status-space" />
      <HeaderNav title="Confirm Delivery Address" onBack={onBack} />

      {!isManual && label && (
        <div className="card">
          <div className="row-between">
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13.5 }}>
              {label.icon}
            </span>
            <span className={label.badgeClass}>{label.badgeText}</span>
          </div>
          <div className="muted" style={{ marginTop: 8, fontSize: 12.5 }}>
            142, 4th Cross, HSR Layout Sector 2, Bengaluru 560102
          </div>
          <div
            className="ghost-link"
            style={{ textAlign: "left", marginTop: 10 }}
            onClick={() => setManualOverride(true)}
          >
            Not accurate? Enter address manually instead
          </div>
        </div>
      )}

      {isManual && (
        <div className="card">
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 600,
              fontSize: 13,
              marginBottom: 8,
            }}
          >
            Enter address manually
          </div>
          <input
            type="text"
            defaultValue="142, 4th Cross, HSR Layout Sector 2"
            className="text-input"
          />
          <input
            type="text"
            defaultValue="Bengaluru, Karnataka — 560102"
            className="text-input"
            style={{ marginTop: 8 }}
          />
        </div>
      )}

      <div className="info-banner">
        ℹ️ This location will only be used for this delivery and clears automatically once your
        order arrives. Nothing is saved unless you choose "Save as Home."
      </div>

      <div className="footer-anchor" />
      <button className="primary-btn" onClick={onPlaceOrder}>
        Place Order — ₹{total}
      </button>
    </div>
  );
}
