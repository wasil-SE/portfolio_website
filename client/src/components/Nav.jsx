import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { label: "about", href: "#about" },
  { label: "stack", href: "#stack" },
  { label: "work", href: "#work" },
  { label: "faq", href: "#faq" },
  { label: "contact", href: "#contact" },
];

export default function Nav({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-mark" aria-label="IAmWasil, back to top">
          <span className="nav-mark-path">~/</span>iamwasil
          <span className="nav-cursor" aria-hidden="true" />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              <span className="nav-link-slash">/</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={onThemeToggle}
          >
            <span className={`theme-toggle-icon ${theme === "light" ? "is-light" : ""}`} aria-hidden="true">
              {theme === "dark" ? "☼" : "☾"}
            </span>
            <span>{theme === "dark" ? "light" : "dark"}</span>
          </button>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-label">{open ? "close" : "menu"}</span>
            <span className={`nav-toggle-glyph ${open ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav-overlay ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          <ul>
            {LINKS.map((link, i) => (
              <li key={link.href} style={{ transitionDelay: `${i * 30}ms` }}>
                <a href={link.href} onClick={handleLinkClick}>
                  <span className="nav-link-slash">/</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="mailto:hello@iamwasil.dev" className="nav-overlay-email">
          hello@iamwasil.dev
        </a>
      </div>
    </header>
  );
}
