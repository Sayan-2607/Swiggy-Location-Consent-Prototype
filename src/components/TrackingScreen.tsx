import HeaderNav from "./HeaderNav";

interface TimelineStep {
  label: string;
  sub: string;
  done: boolean;
}

interface TrackingScreenProps {
  onBack: () => void;
  onMarkDelivered: () => void;
}

const STEPS: TimelineStep[] = [
  { label: "Order placed", sub: "2:04 PM", done: true },
  { label: "Food is being prepared", sub: "2:07 PM", done: true },
  { label: "Out for delivery — live location shared for this order", sub: "2:19 PM", done: true },
  { label: "Delivered", sub: "Location access ends automatically here", done: false },
];

export default function TrackingScreen({ onBack, onMarkDelivered }: TrackingScreenProps) {
  return (
    <div className="screen active">
      <div className="status-space" />
      <HeaderNav title="Order on the way" onBack={onBack} />

      <div className="map-area">
        <div className="session-chip">
          <span className="pulse-dot" />
          Live location active · expires on delivery
        </div>
        <div className="map-dot" style={{ top: 100, left: 150 }} />
        <div
          className="map-dot"
          style={{ top: 60, left: 250, background: "var(--navy)", width: 10, height: 10 }}
        />
      </div>

      <div className="card" style={{ textAlign: "center", padding: 14 }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 20 }}>
          Arriving in 18 min
        </div>
        <div className="muted">Delivery partner: Ramesh K. · 🛵</div>
      </div>

      <div className="timeline">
        {STEPS.map((step, i) => (
          <div className="t-item" key={step.label}>
            <div className={step.done ? "t-dot" : "t-dot pending"}>
              {step.done ? "✓" : i + 1}
            </div>
            <div>
              <div className="t-text" style={{ color: step.done ? undefined : "var(--muted)" }}>
                {step.label}
              </div>
              <div className="t-sub">{step.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-anchor" />
      <button className="primary-btn" onClick={onMarkDelivered}>
        Simulate: Mark as Delivered
      </button>
    </div>
  );
}
