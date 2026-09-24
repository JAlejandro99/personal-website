import { useEffect, useState } from "react";
import { HiChevronUp, HiOutlineEnvelope } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useApp } from "../context.jsx";
import { profile, ui } from "../data/content.js";

export default function Footer() {
  const { t } = useApp();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t(ui.footer)}
        </p>
        <div className="footer__social">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <HiOutlineEnvelope />
          </a>
        </div>
      </div>
      <a href="#top" className={`to-top ${showTop ? "is-visible" : ""}`} aria-label="Back to top">
        <HiChevronUp />
      </a>
    </footer>
  );
}
