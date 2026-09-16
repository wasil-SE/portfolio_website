import "./Skills.css";

const LAYERS = [
  { name: "React", role: "assembling larger sites without repeating myself" },
  { name: "JavaScript", role: "the behavior — interaction, logic, motion" },
  { name: "CSS", role: "the look — layout, type, spacing, color" },
  { name: "HTML", role: "the structure everything else stands on" },
];

export default function Skills() {
  return (
    <section id="stack" className="stack-section">
      <div className="container">
        <div className="section-kicker">
          <div>
            <p className="eyebrow-path">/stack</p>
            <h2 className="section-heading">What your site is actually built from.</h2>
          </div>
        </div>

        <div className="stack" role="img" aria-label="Technology stack: React on top of JavaScript, CSS, and HTML">
          {LAYERS.map((layer, i) => (
            <div
              className="stack-layer"
              key={layer.name}
              style={{ "--layer-width": `${64 + i * 12}%` }}
            >
              <span className="stack-layer-name">{layer.name}</span>
              <span className="stack-layer-role">{layer.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
