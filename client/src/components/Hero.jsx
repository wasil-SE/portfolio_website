import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const HERO_LEAD = "I turn ";
const HERO_QUOTE = "“we need a website”";
const HERO_TRAIL = " into a website.";
const HERO_TEXT = `${HERO_LEAD}${HERO_QUOTE}${HERO_TRAIL}`;

export default function Hero() {
  const fieldRef = useRef(null);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [typedText, setTypedText] = useState(reduceMotion ? HERO_TEXT : "");

  useEffect(() => {
    const field = fieldRef.current;
    if (!field || reduceMotion) return;

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      field.style.setProperty("--tx", `${x}px`);
      field.style.setProperty("--ty", `${y}px`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || typedText.length >= HERO_TEXT.length) return undefined;

    const timeout = window.setTimeout(() => {
      setTypedText(HERO_TEXT.slice(0, typedText.length + 1));
    }, 45);

    return () => window.clearTimeout(timeout);
  }, [reduceMotion, typedText]);

  const quoteStart = Math.min(typedText.length, HERO_LEAD.length);
  const quoteEnd = Math.max(0, Math.min(typedText.length - HERO_LEAD.length, HERO_QUOTE.length));
  const trailStart = HERO_LEAD.length + HERO_QUOTE.length;
  const typedTrail = typedText.length > trailStart ? typedText.slice(trailStart) : "";
  const isTyping = typedText.length < HERO_TEXT.length;

  return (
    <section id="top" className="hero">
      <div className="hero-field" ref={fieldRef} aria-hidden="true" />
      <div className="container hero-inner">
        <p className="eyebrow-path">iamwasil / web developer</p>

        <h1 className="hero-heading" aria-label={HERO_TEXT}>
          <span aria-hidden="true">
            {typedText.slice(0, quoteStart)}
            <span className="hero-heading-quote">{HERO_QUOTE.slice(0, quoteEnd)}</span>
            {typedTrail}
            {isTyping && <span className="hero-typing-cursor" />}
          </span>
        </h1>

        <p className="hero-sub">
          Business sites and landing pages for people who don't have the time, or the
          patience, to figure out the internet themselves.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
          <a href="#work" className="btn btn-ghost">
            View my work
          </a>
        </div>

        <div className="hero-status">
          <span className="hero-status-dot" aria-hidden="true" />
          Currently taking on new projects
        </div>
      </div>
    </section>
  );
}
