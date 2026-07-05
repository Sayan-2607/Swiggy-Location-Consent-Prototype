import HeaderNav from "./HeaderNav";

interface PrivacyScreenProps {
  savedAddressDeleted: boolean;
  onDeleteAddress: () => void;
  onBack: () => void;
  onDone: () => void;
}

export default function PrivacyScreen({
  savedAddressDeleted,
  onDeleteAddress,
  onBack,
  onDone,
}: PrivacyScreenProps) {
  return (
    <div className="screen active">
      <div className="status-space" />
      <HeaderNav title="Privacy & Location" onBack={onBack} />

      <div className="priv-stat">
        <div className="lbl">CURRENT CONSENT STATUS</div>
        <div className="big">Purpose-Scoped</div>
        <div className="lbl">2 active grants · 1 saved address · nothing unused &gt; 12 months</div>
      </div>

      <div className="section-title" style={{ paddingLeft: 20 }}>
        Location permissions
      </div>

      <div className="perm-row">
        <div className="perm-top">
          <span className="perm-name">📍 Find restaurants near you</span>
          <span className="status-pill on">ALWAYS ON, FOREGROUND ONLY</span>
        </div>
        <div className="perm-desc">
          Used only while the app is open, to show nearby restaurants. Last used: today, 2:01 PM.
        </div>
        <div className="perm-actions">
          <button className="mini-btn danger">Revoke</button>
        </div>
      </div>

      <div className="perm-row">
        <div className="perm-top">
          <span className="perm-name">🚴 Live delivery tracking</span>
          <span className="status-pill session">SESSION-ONLY</span>
        </div>
        <div className="perm-desc">
          Only active from "out for delivery" to "delivered." Auto-expires every time — most
          recently, today at 2:24 PM.
        </div>
        <div className="perm-actions">
          <button className="mini-btn">View history</button>
        </div>
      </div>

      <div className="section-title" style={{ paddingLeft: 20, marginTop: 6 }}>
        Saved addresses
      </div>

      <div className="addr-row" style={{ opacity: savedAddressDeleted ? 0.35 : 1 }}>
        <div className="addr-left">
          <div className="addr-icon">🏠</div>
          <div>
            <div className="addr-name">Home</div>
            <div className="addr-sub">HSR Layout, Sector 2 · last used today</div>
          </div>
        </div>
        <button className="trash-btn" onClick={onDeleteAddress} disabled={savedAddressDeleted}>
          🗑
        </button>
      </div>

      <div className="info-banner">
        ⏳ Unused addresses are flagged for deletion after 12 months — we'll always ask before
        removing anything.
      </div>

      <button className="secondary-btn" onClick={onDone}>
        Done
      </button>
    </div>
  );
}
