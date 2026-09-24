import { useId } from "react";

// Custom vector illustrations for each project card (no external images needed).
// viewBox 400x220. Colors: indigo #6366f1, cyan #22d3ee, violet #a78bfa, emerald #34d399, amber #fbbf24, rose #fb7185

const PALETTES = {
  secure: ["#312e81", "#0e7490"],
  data: ["#1e3a8a", "#065f46"],
  fintech: ["#4c1d95", "#1e40af"],
  micro: ["#0f172a", "#3730a3"],
  fingerprint: ["#134e4a", "#1e3a8a"],
  vitals: ["#4c0519", "#312e81"],
};

function Secure() {
  return (
    <g>
      {/* chain of blocks */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${36 + i * 62} ${150 - (i % 2) * 10})`}>
          <rect width="46" height="34" rx="7" fill="rgba(255,255,255,.08)" stroke="#22d3ee" strokeOpacity=".7" />
          <rect x="8" y="9" width="30" height="4" rx="2" fill="#22d3ee" opacity=".7" />
          <rect x="8" y="18" width="20" height="4" rx="2" fill="#a78bfa" opacity=".7" />
          {i < 3 && <path d={`M46 17 h16`} stroke="#22d3ee" strokeDasharray="3 3" />}
        </g>
      ))}
      {/* shield */}
      <g transform="translate(270 34)">
        <path d="M50 0 L96 18 V62 C96 100 72 122 50 134 C28 122 4 100 4 62 V18 Z" fill="rgba(99,102,241,.35)" stroke="#a5b4fc" strokeWidth="2" />
        <rect x="32" y="60" width="36" height="30" rx="6" fill="#e0e7ff" />
        <path d="M39 60 V50 a11 11 0 0 1 22 0 V60" fill="none" stroke="#e0e7ff" strokeWidth="5" />
        <circle cx="50" cy="73" r="4" fill="#4338ca" />
        <rect x="48" y="75" width="4" height="8" rx="2" fill="#4338ca" />
      </g>
      {/* key + timer */}
      <g transform="translate(24 36)" stroke="#fbbf24" strokeWidth="4" fill="none" strokeLinecap="round">
        <circle cx="18" cy="18" r="14" />
        <path d="M32 18 H86 M72 18 v12 M84 18 v9" />
      </g>
      <text x="132" y="50" fill="#e0f2fe" fontFamily="JetBrains Mono, monospace" fontSize="22" fontWeight="600">&lt;30ms</text>
      <text x="132" y="70" fill="#a5f3fc" fontFamily="JetBrains Mono, monospace" fontSize="11" opacity=".8">sha256 · signed</text>
    </g>
  );
}

function Data() {
  const bars = [60, 92, 74, 118, 96, 132];
  return (
    <g>
      {/* database stack */}
      <g transform="translate(40 40)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${i * 38})`}>
            <ellipse cx="50" cy="14" rx="50" ry="14" fill="#34d399" opacity={0.9 - i * 0.2} />
            <rect x="0" y="14" width="100" height="24" fill="#10b981" opacity={0.55 - i * 0.12} />
            <ellipse cx="50" cy="38" rx="50" ry="14" fill="#065f46" opacity=".6" />
          </g>
        ))}
      </g>
      {/* bars */}
      <g transform="translate(180 180)">
        {bars.map((h, i) => (
          <rect key={i} x={i * 32} y={-h} width="20" height={h} rx="5" fill={i % 2 ? "#22d3ee" : "#6366f1"} opacity=".9" />
        ))}
        <path d="M-6 0 H190" stroke="rgba(255,255,255,.35)" />
      </g>
      {/* checks */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${196 + i * 62} 24)`}>
          <circle cx="12" cy="12" r="12" fill="#34d399" />
          <path d="M6 12 l4 4 l8 -8" stroke="#064e3b" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
}

function Fintech() {
  return (
    <g>
      {/* card */}
      <g transform="translate(36 52) rotate(-8)">
        <rect width="170" height="106" rx="14" fill="url(#cardg)" />
        <rect x="18" y="26" width="30" height="22" rx="4" fill="#fde68a" />
        <rect x="18" y="66" width="120" height="8" rx="4" fill="rgba(255,255,255,.7)" />
        <rect x="18" y="82" width="70" height="6" rx="3" fill="rgba(255,255,255,.45)" />
        <circle cx="138" cy="34" r="12" fill="rgba(255,255,255,.35)" />
        <circle cx="152" cy="34" r="12" fill="rgba(255,255,255,.2)" />
      </g>
      {/* arrows to API */}
      <path d="M220 90 C250 90 250 60 280 60" stroke="#22d3ee" strokeWidth="2.5" fill="none" strokeDasharray="5 5" />
      <path d="M220 130 C250 130 250 160 280 160" stroke="#a78bfa" strokeWidth="2.5" fill="none" strokeDasharray="5 5" />
      <g transform="translate(280 36)">
        <rect width="92" height="46" rx="10" fill="rgba(255,255,255,.1)" stroke="#22d3ee" />
        <text x="46" y="29" textAnchor="middle" fill="#e0f2fe" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="600">REST</text>
      </g>
      <g transform="translate(280 138)">
        <rect width="92" height="46" rx="10" fill="rgba(255,255,255,.1)" stroke="#a78bfa" />
        <text x="46" y="29" textAnchor="middle" fill="#ede9fe" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="600">JWT</text>
      </g>
      <text x="300" y="112" fill="#fbbf24" fontFamily="JetBrains Mono, monospace" fontSize="11">webhook ⇄</text>
    </g>
  );
}

function Micro() {
  const nodes = [
    [200, 110, "#6366f1"],
    [90, 60, "#22d3ee"],
    [90, 160, "#a78bfa"],
    [310, 60, "#34d399"],
    [310, 160, "#fbbf24"],
  ];
  const hex = (r) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`;
    }).join(" ");
  return (
    <g>
      {nodes.slice(1).map(([x, y], i) => (
        <line key={i} x1="200" y1="110" x2={x} y2={y} stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeDasharray="4 4" />
      ))}
      {nodes.map(([x, y, c], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <polygon points={hex(i === 0 ? 40 : 28)} fill={c} opacity=".25" stroke={c} strokeWidth="2" />
          <polygon points={hex(i === 0 ? 22 : 14)} fill={c} opacity=".85" />
        </g>
      ))}
      <text x="200" y="115" textAnchor="middle" fill="#fff" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600">API</text>
    </g>
  );
}

function Fingerprint() {
  return (
    <g>
      <g transform="translate(120 110)" fill="none" stroke="#5eead4" strokeWidth="3" strokeLinecap="round">
        {[16, 28, 40, 52, 64, 76].map((r, i) => (
          <path key={r} d={`M ${-r} ${10 + i * 2} A ${r} ${r * 1.15} 0 0 1 ${r} ${6 - i}`} opacity={1 - i * 0.1} />
        ))}
        <path d="M0 -10 V40" />
      </g>
      <rect x="36" y="104" width="170" height="3" fill="#22d3ee" opacity=".9">
        <animate attributeName="y" values="40;180;40" dur="3.5s" repeatCount="indefinite" />
      </rect>
      {/* neural net */}
      <g transform="translate(250 40)">
        {[
          [0, 20], [0, 70], [0, 120],
          [60, 0], [60, 50], [60, 100], [60, 140],
          [120, 45], [120, 95],
        ].map(([x, y], i, arr) => (
          <g key={i}>
            {x < 120 &&
              arr
                .filter(([x2]) => x2 === x + 60)
                .map(([x2, y2], j) => (
                  <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke="rgba(255,255,255,.22)" />
                ))}
          </g>
        ))}
        {[
          [0, 20], [0, 70], [0, 120],
          [60, 0], [60, 50], [60, 100], [60, 140],
          [120, 45], [120, 95],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill={x === 120 ? "#34d399" : "#60a5fa"} />
        ))}
      </g>
    </g>
  );
}

function Vitals() {
  return (
    <g>
      <rect x="30" y="34" width="250" height="152" rx="16" fill="rgba(0,0,0,.35)" stroke="rgba(255,255,255,.2)" />
      <path d="M40 110 H100 L112 80 L126 150 L142 60 L156 124 L166 110 H270" fill="none" stroke="#fb7185" strokeWidth="3" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0 600;600 0" dur="2.6s" repeatCount="indefinite" />
      </path>
      <text x="46" y="62" fill="#fecdd3" fontFamily="JetBrains Mono, monospace" fontSize="13">BPM 72</text>
      <text x="190" y="62" fill="#a5f3fc" fontFamily="JetBrains Mono, monospace" fontSize="13">SpO₂ 98%</text>
      {/* heart */}
      <path transform="translate(300 72) scale(1.5)" d="M30 52 C10 38 0 26 0 14 A14 14 0 0 1 30 8 A14 14 0 0 1 60 14 C60 26 50 38 30 52 Z" fill="#fb7185" opacity=".9">
        <animateTransform attributeName="transform" type="scale" additive="sum" values="1;1.06;1" dur="1s" repeatCount="indefinite" />
      </path>
    </g>
  );
}

const SCENES = { secure: Secure, data: Data, fintech: Fintech, micro: Micro, fingerprint: Fingerprint, vitals: Vitals };

export default function ProjectArt({ kind }) {
  const id = useId().replace(/:/g, "");
  const [a, b] = PALETTES[kind] ?? PALETTES.micro;
  const Scene = SCENES[kind] ?? Micro;
  return (
    <svg viewBox="0 0 400 220" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
        <linearGradient id="cardg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <pattern id={`dots${id}`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(255,255,255,.12)" />
        </pattern>
      </defs>
      <rect width="400" height="220" fill={`url(#bg${id})`} />
      <rect width="400" height="220" fill={`url(#dots${id})`} />
      <Scene />
    </svg>
  );
}
