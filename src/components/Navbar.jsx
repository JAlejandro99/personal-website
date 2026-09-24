import { useEffect, useState } from "react";
import { HiBars3, HiXMark, HiOutlineSun, HiOutlineMoon, HiArrowDownTray } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useApp } from "../context.jsx";
import { useActiveSection, useScrolled } from "../hooks.js";
import { profile, ui } from "../data/content.js";

const IDS = ["about", "experience", "projects", "skills", "education", "contact"];

export default function Navbar() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const scrolled = useScrolled();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Home">
          <span className="logo-badge">{profile.initials}</span>
          <span className="nav__name">{profile.shortName}</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {t(ui.nav[id])}
            </a>
          ))}
          <div className="nav__mobile-extra">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={profile.cvFile} download className="btn btn--primary">
              <HiArrowDownTray /> {t(ui.downloadCv)}
            </a>
          </div>
        </nav>

        <div className="nav__actions">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn hide-sm" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn hide-sm" aria-label="GitHub">
            <FaGithub />
          </a>
          <button className="icon-btn lang-btn" onClick={toggleLang} aria-label="Change language">
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
          <a href={profile.cvFile} download className="btn btn--primary btn--sm hide-md">
            <HiArrowDownTray /> CV
          </a>
          <button
            className="icon-btn nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>
    </header>
  );
}
