interface DeliveredScreenProps {
  onReviewPrivacy: () => void;
  onBackHome: () => void;
}

export default function DeliveredScreen({ onReviewPrivacy, onBackHome }: DeliveredScreenProps) {
  return (
    <div className="screen active">
      <div className="status-space" />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--green-tint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            marginBottom: 16,
          }}
        >
          ✅
        </div>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 6 }}>
          Order Delivered!
        </div>
        <div className="muted" style={{ marginBottom: 22 }}>
          Enjoy your Paneer Butter Masala Bowl. Hope it hit the spot.
        </div>

        <div className="card" style={{ width: "100%", textAlign: "left" }}>
          <div className="row-between">
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 12.5 }}>
              🔒 Session location access ended
            </span>
          </div>
          <div className="muted" style={{ marginTop: 4, fontSize: 11.5 }}>
            Automatically revoked the moment your order arrived — no manual step needed. Nothing
            from this trip was saved.
          </div>
        </div>
      </div>

      <button className="secondary-btn" onClick={onReviewPrivacy}>
        Review my location &amp; privacy settings
      </button>
      <button className="primary-btn" onClick={onBackHome}>
        Back to Home
      </button>
    </div>
  );
}
