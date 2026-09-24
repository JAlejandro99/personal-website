import { HiArrowDownTray, HiOutlineMapPin, HiArrowRight } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useApp } from "../context.jsx";
import { profile, stats, ui } from "../data/content.js";
import HeroArt from "./illustrations/HeroArt.jsx";

export default function Hero() {
  const { t } = useApp();
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="pill">
            <span className="pulse-dot" /> {t(profile.openTo)}
          </span>
          <p className="hero__hello">
            {t({ en: "Hi, I'm", es: "Hola, soy" })}
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role gradient-text">{t(profile.role)}</p>
          <p className="hero__headline">{t(profile.headline)}</p>
          <p className="hero__intro">{t(profile.intro)}</p>

          <div className="hero__cta">
            <a href={profile.cvFile} download className="btn btn--primary">
              <HiArrowDownTray /> {t(ui.downloadCv)}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="#contact" className="btn btn--link">
              {t(ui.contactMe)} <HiArrowRight />
            </a>
          </div>

          <div className="hero__meta">
            <span>
              <HiOutlineMapPin /> {t(profile.location)}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub /> JAlejandro99
            </a>
          </div>
        </div>

        <div className="hero__art">
          <HeroArt />
        </div>
      </div>

      <div className="container">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.value} className="stat">
              <strong className="gradient-text">{s.value}</strong>
              <span>{t(s.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
