import { useState } from "react";
import faq from "../data/faq.js";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow-path">/faq</p>
          <h2 className="section-heading">Common questions.</h2>
        </div>

        <ul className="faq-list">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.q} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className={`faq-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true" />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`faq-answer ${isOpen ? "is-open" : ""}`}
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
