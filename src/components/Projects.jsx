import { useApp } from "../context.jsx";
import { projects, ui } from "../data/content.js";
import Section from "./Section.jsx";
import ProjectArt from "./illustrations/ProjectArt.jsx";

export default function Projects() {
  const { t } = useApp();
  return (
    <Section id="projects" kicker={t(ui.sections.projectsKicker)} title={t(ui.sections.projects)}>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title.en} className="card project">
            <div className="project__art">
              <ProjectArt kind={p.art} />
              <span className="project__metric">{t(p.metric)}</span>
            </div>
            <div className="project__body">
              <span className="project__org">{p.org}</span>
              <h3>{t(p.title)}</h3>
              <p>{t(p.desc)}</p>
              <ul className="tags">
                {p.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
