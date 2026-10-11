import { useState } from "react";
import {
  HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineClipboard, HiCheck, HiArrowDownTray,
  HiArrowUpRight, HiOutlineCheckCircle, HiOutlineExclamationTriangle,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useApp } from "../context.jsx";
import { profile, ui, contactForm } from "../data/content.js";
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

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const hasKey = () => contactForm.web3formsKey && !contactForm.web3formsKey.startsWith("PEGA_AQUI");

export default function Contact() {
  const { t } = useApp();
  const empty = { name: "", email: "", message: "", botcheck: false };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // No key configured yet → fall back to opening the visitor's email client.
    if (!hasKey()) {
      const subject = encodeURIComponent(`Opportunity — ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contactForm.web3formsKey,
          subject: `Nuevo mensaje desde jesusdominguezr.com — ${form.name}`,
          from_name: "jesusdominguezr.com",
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: form.message,
          botcheck: form.botcheck,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        setStatus("success");
        setForm(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (status === "success" || status === "error") setStatus("idle");
  };

    // Email link → opens the visitor's mail app with a draft in the current language
  const mailtoDraft = `mailto:${profile.email}?subject=${encodeURIComponent(
    t(ui.emailDraft.subject)
  )}&body=${encodeURIComponent(t(ui.emailDraft.body))}`;

  const channels = [
    { icon: HiOutlineEnvelope, label: "Email", value: profile.email, href: mailtoDraft, copy: true },
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
              onChange={update("name")}
              autoComplete="name"
            />
          </label>
          <label>
            <span>{t(ui.form.email)}</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={update("email")}
              autoComplete="email"
            />
          </label>
          <label>
            <span>{t(ui.form.message)}</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
            />
          </label>
          {/* Honeypot: hidden from people, bots fill it and get rejected */}
          <input
            type="checkbox"
            name="botcheck"
            className="hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            checked={form.botcheck}
            onChange={(e) => setForm({ ...form, botcheck: e.target.checked })}
          />
          <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
            <HiOutlineEnvelope /> {status === "sending" ? t(ui.form.sending) : t(ui.form.send)}
          </button>
          <div aria-live="polite">
            {status === "success" && (
              <p className="form-status form-status--ok">
                <HiOutlineCheckCircle /> {t(ui.form.success)}
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status--err">
                <HiOutlineExclamationTriangle /> {t(ui.form.error)}{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            )}
          </div>
          {status !== "success" && hasKey() && <p className="muted small">{t(ui.form.note)}</p>}
        </form>
      </div>
    </Section>
  );
}
