import { useState } from "react";
import {
  HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineClipboard, HiCheck, HiArrowDownTray,
  HiArrowUpRight,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useApp } from "../context.jsx";
import { profile, ui } from "../data/content.js";
import Section from "./Section.jsx";

function CopyButton({ value }) {
  const { t } = useApp();
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button className="copy-btn" onClick={copy} aria-label={t(ui.copy)}>
      {done ? <HiCheck /> : <HiOutlineClipboard />}
      <span>{done ? t(ui.copied) : t(ui.copy)}</span>
    </button>
  );
}

export default function Contact() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const channels = [
    { icon: HiOutlineEnvelope, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
    { icon: FaLinkedin, label: "LinkedIn", value: "in/jesus-a-dominguez-r", href: profile.linkedin, external: true },
    { icon: FaGithub, label: "GitHub", value: "JAlejandro99", href: profile.github, external: true },
    { icon: HiOutlinePhone, label: t({ en: "Phone", es: "Teléfono" }), value: profile.phone, href: profile.phoneHref, copy: true },
    { icon: HiOutlineMapPin, label: t({ en: "Location", es: "Ubicación" }), value: t(profile.location) },
  ];

  return (
    <Section id="contact" kicker={t(ui.sections.contactKicker)} title={t(ui.sections.contact)}>
      <div className="contact">
        <div className="contact__info">
          <p className="lead">{t(ui.contactText)}</p>
          <ul className="channels">
            {channels.map((c) => (
              <li key={c.label} className="channel card">
                <span className="channel__icon">
                  <c.icon />
                </span>
                <div className="channel__text">
                  <span className="muted">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                      {c.value} {c.external && <HiArrowUpRight className="ext" />}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </div>
                {c.copy && <CopyButton value={c.value} />}
              </li>
            ))}
          </ul>
          <a href={profile.cvFile} download className="btn btn--primary">
            <HiArrowDownTray /> {t(ui.downloadCv)}
          </a>
        </div>

        <form className="card contact__form" onSubmit={onSubmit}>
          <label>
            <span>{t(ui.form.name)}</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              autoComplete="name"
            />
          </label>
          <label>
            <span>{t(ui.form.email)}</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              autoComplete="email"
            />
          </label>
          <label>
            <span>{t(ui.form.message)}</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button type="submit" className="btn btn--primary btn--block">
            <HiOutlineEnvelope /> {t(ui.form.send)}
          </button>
          <p className="muted small">{t(ui.form.note)}</p>
        </form>
      </div>
    </Section>
  );
}
