import { HiOutlineAcademicCap, HiOutlineCheckBadge, HiOutlineCodeBracket } from "react-icons/hi2";
import { useApp } from "../context.jsx";
import { education, ui } from "../data/content.js";
import Section from "./Section.jsx";

const ICON = { degree: HiOutlineAcademicCap, cert: HiOutlineCheckBadge, service: HiOutlineCodeBracket };

export default function Education() {
  const { t } = useApp();
  return (
    <Section id="education" kicker={t(ui.sections.educationKicker)} title={t(ui.sections.education)}>
      <div className="edu">
        {education.map((e) => {
          const Icon = ICON[e.type];
          return (
            <article key={e.title.en} className="card edu__item">
              <span className="edu__icon">
                <Icon />
              </span>
              <div>
                <span className="edu__period">{e.period}</span>
                <h3>{t(e.title)}</h3>
                <p className="muted">{e.org}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
