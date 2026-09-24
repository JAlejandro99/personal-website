import { HiOutlineBriefcase } from "react-icons/hi2";
import { useApp } from "../context.jsx";
import { experience, ui } from "../data/content.js";
import Section from "./Section.jsx";

export default function Experience() {
  const { t } = useApp();
  return (
    <Section id="experience" kicker={t(ui.sections.experienceKicker)} title={t(ui.sections.experience)}>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline__item">
            <span className="timeline__dot">
              <HiOutlineBriefcase />
            </span>
            <article className="card job">
              <header className="job__head">
                <div>
                  <h3>{t(job.role)}</h3>
                  <p className="job__company">{job.company}</p>
                </div>
                <span className="job__date">
                  {t(job.start)} — {job.end ? t(job.end) : t(ui.present)}
                </span>
              </header>
              <ul className="job__bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{t(b)}</li>
                ))}
              </ul>
              <ul className="tags">
                {job.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
