interface HeaderNavProps {
  title: string;
  onBack: () => void;
}

export default function HeaderNav({ title, onBack }: HeaderNavProps) {
  return (
    <div className="header-nav">
      <button className="back-btn" onClick={onBack} aria-label="Go back">
        ←
      </button>
      <div className="header-title">{title}</div>
    </div>
  );
}
