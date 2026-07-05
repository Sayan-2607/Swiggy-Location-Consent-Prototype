import { RESTAURANTS } from "../data";

interface HomeScreenProps {
  cartAdded: boolean;
  onAddToCart: () => void;
  onOpenCart: () => void;
  onOpenPrivacy: () => void;
}

export default function HomeScreen({
  cartAdded,
  onAddToCart,
  onOpenCart,
  onOpenPrivacy,
}: HomeScreenProps) {
  const [primary, ...rest] = RESTAURANTS;

  return (
    <div className="screen active">
      <div className="status-space" />

      <div className="topbar">
        <div className="addr-block">
          <div className="addr-label">DELIVER TO</div>
          <div className="addr-value">🏠 HSR Layout, Bengaluru ▾</div>
        </div>
        <button className="avatar" onClick={onOpenPrivacy} aria-label="Open privacy dashboard">
          P
        </button>
      </div>

      <div className="brand-row">
        <div className="brand-mark">S</div>
        <div className="brand-name">swiggy</div>
      </div>

      <div className="search">🔍 Search for restaurants or dishes</div>
      <div className="section-title">Popular near you</div>

      <div className="rest-card">
        <div className="rest-img" style={{ background: primary.gradient }}>
          <div className="rest-tag">{primary.eta}</div>
        </div>
        <div className="rest-body">
          <div className="rest-name">{primary.name}</div>
          <div className="rest-meta">
            <span>⭐ {primary.rating}</span>
            <span>{primary.cuisine}</span>
            <span>{primary.avgCost}</span>
          </div>
          {primary.orderableItem && (
            <>
              <div className="divider" />
              <div className="add-row">
                <span className="price">
                  {primary.orderableItem.name} — ₹{primary.orderableItem.price}
                </span>
                <button
                  className={cartAdded ? "btn-add added" : "btn-add"}
                  onClick={onAddToCart}
                >
                  {cartAdded ? "ADDED" : "ADD"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {rest.map((r) => (
        <div className="rest-card" key={r.name}>
          <div className="rest-img" style={{ background: r.gradient }}>
            <div className="rest-tag">{r.eta}</div>
          </div>
          <div className="rest-body">
            <div className="rest-name">{r.name}</div>
            <div className="rest-meta">
              <span>⭐ {r.rating}</span>
              <span>{r.cuisine}</span>
              <span>{r.avgCost}</span>
            </div>
          </div>
        </div>
      ))}

      <div style={{ height: 90 }} />

      {cartAdded && (
        <div className="cart-float" onClick={onOpenCart}>
          <span>🛒 View Cart · 1 item</span>
          <span className="arrow">→</span>
        </div>
      )}
    </div>
  );
}
