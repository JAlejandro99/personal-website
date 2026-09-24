import { HiCheck } from "react-icons/hi2";
import { useApp } from "../context.jsx";
import { about, profile, ui } from "../data/content.js";
import Section from "./Section.jsx";

export default function About() {
  const { t } = useApp();
  return (
    <Section id="about" kicker={t(ui.sections.aboutKicker)} title={t(ui.sections.about)}>
      <div className="about">
        <div className="about__card card">
          {/* To use a real photo: add public/profile.jpg and set profile.photo = "/profile.jpg" in content.js */}
          {profile.photo ? (
            <img className="avatar" src={profile.photo} alt={profile.name} />
          ) : (
            <div className="avatar avatar--initials" aria-hidden="true">
              {profile.initials}
            </div>
          )}
          <h3>{profile.shortName}</h3>
          <p className="muted">{t(profile.role)}</p>

          <div className="about__langs">
            <h4>{t(ui.languages)}</h4>
            {about.languages.map((l) => (
              <div key={l.name.en} className="lang-row">
                <div className="lang-row__label">
                  <span>{t(l.name)}</span>
                  <span className="muted">{t(l.level)}</span>
                </div>
                <div className="bar">
                  <span style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
          <ul className="focus-list">
            {about.focus.map((f) => (
              <li key={f.en}>
                <HiCheck /> {t(f)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
