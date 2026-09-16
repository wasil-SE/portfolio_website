import "./About.css";

const NOTES = [
  {
    tag: "understand",
    text: "Before any design happens, I want to know what the site actually needs to do for your business.",
  },
  {
    tag: "design",
    text: "Layouts are built for your content, not dropped in from a template and filled in after.",
  },
  {
    tag: "build",
    text: "Everything is coded by hand — fast, responsive, and easy to hand off or extend later.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-lead">
          <p className="eyebrow-path">/about</p>
          <h2 className="section-heading">Wasil. I build for people who'd rather not think about websites.</h2>
          <p className="about-copy">
            I'm a web developer who focuses on one thing: business websites and landing
            pages that work the first time someone visits. No filler pages, no
            unnecessary complexity — just a site that loads fast, reads clearly, and
            gets whoever lands on it to do the thing you built it for.
          </p>
        </div>

        <ul className="about-notes">
          {NOTES.map((note, i) => (
            <li key={note.tag} className="about-note">
              <span className="about-note-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="about-note-tag">{note.tag}</p>
                <p className="about-note-text">{note.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
