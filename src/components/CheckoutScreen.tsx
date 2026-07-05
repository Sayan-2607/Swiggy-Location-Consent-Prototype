import HeaderNav from "./HeaderNav";
import { RESTAURANTS, DELIVERY_FEE } from "../data";

interface CheckoutScreenProps {
  onBack: () => void;
  onConfirm: () => void;
}

export default function CheckoutScreen({ onBack, onConfirm }: CheckoutScreenProps) {
  const item = RESTAURANTS[0].orderableItem!;
  const total = item.price + DELIVERY_FEE;

  return (
    <div className="screen active">
      <div className="status-space" />
      <HeaderNav title="Your Order" onBack={onBack} />

      <div className="card">
        <div className="row-between">
          <span style={{ fontSize: 13 }}>
            {item.name} <span className="muted">×{item.quantity}</span>
          </span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>₹{item.price}</span>
        </div>
        <div className="divider" />
        <div className="row-between">
          <span className="muted">Item total</span>
          <span className="muted">₹{item.price}</span>
        </div>
        <div className="row-between" style={{ marginTop: 6 }}>
          <span className="muted">Delivery fee</span>
          <span className="muted">₹{DELIVERY_FEE}</span>
        </div>
        <div className="divider" />
        <div className="row-between">
          <strong>To pay</strong>
          <strong>₹{total}</strong>
        </div>
      </div>

      <div className="card">
        <div className="row-between">
          <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13.5 }}>
            📍 Delivery address
          </span>
          <span className="muted" style={{ fontSize: 11.5 }}>
            Not set
          </span>
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          We'll ask how you'd like to share your location on the next step — you're always in
          control.
        </div>
      </div>

      <div className="footer-anchor" />
      <button className="primary-btn" onClick={onConfirm}>
        Confirm Order
      </button>
    </div>
  );
}
