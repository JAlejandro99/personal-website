import { useReveal } from "../hooks.js";

export default function Section({ id, kicker, title, children, className = "" }) {
  const ref = useReveal();
  return (
    <section id={id} className={`section ${className}`}>
      <div ref={ref} className="container reveal">
        <header className="section-head">
          <span className="kicker">{kicker}</span>
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
