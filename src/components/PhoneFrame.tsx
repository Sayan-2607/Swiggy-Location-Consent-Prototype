import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

/** Static device chrome (notch + rounded bezel) that wraps every screen. */
export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="phone">
      <div className="notch" />
      {children}
    </div>
  );
}
