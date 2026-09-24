import { FaJava, FaAws } from "react-icons/fa";
import {
  SiPython, SiJavascript, SiApachegroovy, SiC, SiSpringboot, SiFlask, SiNodedotjs, SiVuedotjs,
  SiGraphql, SiJsonwebtokens, SiApachespark, SiApachehive, SiCloudera, SiStreamlit, SiFirebase,
  SiMongodb, SiMysql, SiGit, SiGradle,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbLambda, TbDatabase, TbBrain, TbPuzzle, TbHierarchy3, TbTestPipe, TbLayoutKanban, TbShieldCheck, TbLeaf } from "react-icons/tb";
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
  aws: [FaAws, "#ff9900"],
  azure: [VscAzure, "#0089d6"],
  firebase: [SiFirebase, "#ffca28"],
  mongodb: [SiMongodb, "#47a248"],
  mysql: [SiMysql, "#4479a1"],
  patterns: [TbPuzzle, "#22d3ee"],
  micro: [TbHierarchy3, "#818cf8"],
  test: [TbTestPipe, "#34d399"],
  git: [SiGit, "#f05032"],
  gradle: [SiGradle, "#02a3b4"],
  agile: [TbLayoutKanban, "#60a5fa"],
};

export default function Skills() {
  const { t } = useApp();
  return (
    <Section id="skills" kicker={t(ui.sections.skillsKicker)} title={t(ui.sections.skills)}>
      <div className="skills">
        {skillGroups.map((g) => (
          <div key={g.title.en} className="card skill-group">
            <h3>{t(g.title)}</h3>
            <ul>
              {g.items.map((s) => {
                const [Icon, color] = ICONS[s.icon] ?? [TbPuzzle, "currentColor"];
                return (
                  <li key={s.name} className="skill">
                    <span className="skill__icon" style={{ color }}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span>{s.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
