import { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiPython, SiJavascript, SiApachegroovy, SiC, SiSpringboot, SiFlask, SiNodedotjs, SiVuedotjs,
  SiGraphql, SiJsonwebtokens, SiApachespark, SiApachehive, SiCloudera, SiStreamlit,
  SiMongodb, SiMysql, SiGit, SiGradle,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import {
  TbLambda, TbDatabase, TbBrain, TbPuzzle, TbHierarchy3, TbTestPipe, TbLayoutKanban, TbShieldCheck, TbLeaf,
  TbSparkles, TbInfoCircle,
} from "react-icons/tb";
import { useApp } from "../context.jsx";
import { skillGroups, ui } from "../data/content.js";
import Section from "./Section.jsx";

// icon component + brand color
const ICONS = {
  java: [FaJava, "#f89820"],
  python: [SiPython, "#3776ab"],
  javascript: [SiJavascript, "#f7df1e"],
  sql: [TbDatabase, "#00758f"],
  groovy: [SiApachegroovy, "#4298b8"],
  c: [SiC, "#a8b9cc"],
  spring: [SiSpringboot, "#6db33f"],
  flask: [SiFlask, "currentColor"],
  grails: [TbLeaf, "#feb672"],
  node: [SiNodedotjs, "#5fa04e"],
  vue: [SiVuedotjs, "#4fc08d"],
  graphql: [SiGraphql, "#e10098"],
  jwt: [SiJsonwebtokens, "#d63aff"],
  spark: [SiApachespark, "#e25a1c"],
  ge: [TbShieldCheck, "#ff6310"],
  hive: [SiApachehive, "#fdee21"],
  cloudera: [SiCloudera, "#f96702"],
  streamlit: [SiStreamlit, "#ff4b4b"],
  ml: [TbBrain, "#a78bfa"],
  lambda: [TbLambda, "#ff9900"],
  azure: [VscAzure, "#0089d6"],
  mongodb: [SiMongodb, "#47a248"],
  mysql: [SiMysql, "#4479a1"],
  patterns: [TbPuzzle, "#22d3ee"],
  micro: [TbHierarchy3, "#818cf8"],
  test: [TbTestPipe, "#34d399"],
  claude: [TbSparkles, "#d97757"],
  git: [SiGit, "#f05032"],
  gradle: [SiGradle, "#02a3b4"],
  agile: [TbLayoutKanban, "#60a5fa"],
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Skills() {
  const { t } = useApp();
  // { group, name } of the technology whose description is open
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = (group, name) =>
    setOpen((cur) => (cur && cur.group === group && cur.name === name ? null : { group, name }));

  return (
    <Section id="skills" kicker={t(ui.sections.skillsKicker)} title={t(ui.sections.skills)}>
      <p className="skills__hint muted">
        <TbInfoCircle aria-hidden="true" /> {t(ui.skillsHint)}
      </p>
      <div className="skills">
        {skillGroups.map((g) => {
          const groupId = slug(g.title.en);
          const selected = open?.group === groupId ? g.items.find((s) => s.name === open.name) : null;
          const panelId = `skill-detail-${groupId}`;
          return (
            <div key={g.title.en} className="card skill-group">
              <h3>{t(g.title)}</h3>
              <ul>
                {g.items.map((s) => {
                  const [Icon, color] = ICONS[s.icon] ?? [TbPuzzle, "currentColor"];
                  const isOpen = selected?.name === s.name;
                  return (
                    <li key={s.name}>
                      <button
                        type="button"
                        className={`skill${isOpen ? " is-open" : ""}`}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(groupId, s.name)}
                      >
                        <span className="skill__icon" style={{ color }}>
                          <Icon aria-hidden="true" />
                        </span>
                        <span>{s.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div id={panelId} className={`skill-detail${selected ? " is-open" : ""}`} aria-live="polite">
                {selected && (
                  <p>
                    <strong>{selected.name}</strong> — {t(selected.desc)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
