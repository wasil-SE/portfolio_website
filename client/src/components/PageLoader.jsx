import { useEffect, useState } from "react";
import "./PageLoader.css";

const LOADER_MESSAGES = ["initializing portfolio...", "loading projects...", "ready."];

export default function PageLoader() {
  const [leaving, setLeaving] = useState(false);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visible, setVisible] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const exitTimer = window.setTimeout(() => setLeaving(true), 1050);
    const removeTimer = window.setTimeout(() => setVisible(false), 1500);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, [prefersReducedMotion]);

  if (!visible) return null;

  return (
    <div className={`page-loader ${leaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="page-loader-content">
        <span className="page-loader-prompt">~/iamwasil $</span>
        <div className="page-loader-messages">
          {LOADER_MESSAGES.map((message, index) => (
            <p key={message} style={{ animationDelay: `${index * 260}ms` }}>
              <span aria-hidden="true">→ </span>
              {message}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
