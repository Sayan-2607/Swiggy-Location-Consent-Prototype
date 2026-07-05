import { CONSENT_OPTIONS } from "../data";
import type { ConsentChoice } from "../types";

interface ConsentModalProps {
  open: boolean;
  selected: ConsentChoice;
  onSelect: (choice: ConsentChoice) => void;
  onConfirm: () => void;
}

export default function ConsentModal({
  open,
  selected,
  onSelect,
  onConfirm,
}: ConsentModalProps) {
  return (
    <div className={open ? "modal-overlay active" : "modal-overlay"}>
      <div className="modal-sheet">
        <div className="modal-handle" />
        <div className="modal-icon">📍</div>
        <div className="modal-title">Share your location?</div>
        <div className="modal-sub">
          Choose how Swiggy can use your location. You can change this any time from Privacy
          &amp; Location settings.
        </div>

        {CONSENT_OPTIONS.map((option) => {
          const isChecked = selected === option.id;
          const classes = [
            "choice",
            option.recommended ? "recommended" : "",
            isChecked ? "checked" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={option.id} className={classes} onClick={() => onSelect(option.id)}>
              <div className="choice-top">
                <div className="choice-title">
                  {option.title}
                  {option.recommended && <span className="badge">RECOMMENDED</span>}
                </div>
                <div className="radio-dot" />
              </div>
              <div className="choice-desc">{option.description}</div>
            </div>
          );
        })}

        <button className="primary-btn" style={{ width: "100%", margin: "16px 0 4px" }} onClick={onConfirm}>
          Continue
        </button>
      </div>
    </div>
  );
}
