import { useState } from "react";
import projects from "../data/projects.js";
import "./Projects.css";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-kicker">
          <div>
            <p className="eyebrow-path">/projects</p>
            <h2 className="section-heading">A few things I've built.</h2>
          </div>
        </div>

        <div className="work-grid">
          <ul className="work-list">
            {projects.map((project) => {
              const isActive = project.id === activeId;
              return (
                <li key={project.id} className={`work-item ${isActive ? "is-active" : ""}`}>
                  <button
                    className="work-item-trigger"
                    onMouseEnter={() => setActiveId(project.id)}
                    onFocus={() => setActiveId(project.id)}
                    onClick={() => setActiveId(project.id)}
                    aria-expanded={isActive}
                  >
                    <span className="work-item-index">{project.index}</span>
                    <span className="work-item-name">{project.name}</span>
                    <span className="work-item-tech">{project.tech.join(" · ")}</span>
                  </button>

                  {/* Inline details for mobile / no-hover contexts */}
                  <div className="work-item-details">
                    <p>{project.description}</p>
                    <div className="work-item-links">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        live demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        repository
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="work-preview" aria-live="polite">
            <div className="work-preview-frame">
              <span className="work-preview-index">{active.index}</span>
              <p className="work-preview-name">{active.name}</p>
              <p className="work-preview-desc">{active.description}</p>
              <p className="work-preview-tech">{active.tech.join(" · ")}</p>
              <div className="work-preview-links">
                <a href={active.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost">
                  Live demo
                </a>
                <a href={active.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost">
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
