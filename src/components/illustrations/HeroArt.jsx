import { FaJava, FaAws } from "react-icons/fa";
import { SiSpringboot, SiPython, SiApachespark, SiMongodb } from "react-icons/si";

// Illustrated "code editor + API response" composition for the hero section.
export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="glow glow--a" />
      <div className="glow glow--b" />

      <div className="editor">
        <div className="editor__bar">
          <span className="dot dot--r" />
          <span className="dot dot--y" />
          <span className="dot dot--g" />
          <span className="editor__file">TransactionController.java</span>
        </div>
        <pre className="editor__code">
          <code>
            <span className="c-ann">@RestController</span>{"\n"}
            <span className="c-ann">@RequestMapping</span>(<span className="c-str">"/api/v1/transactions"</span>){"\n"}
            <span className="c-kw">public class</span> <span className="c-type">TransactionController</span> {"{"}{"\n"}
            {"\n"}
            {"  "}<span className="c-kw">private final</span> <span className="c-type">TransactionService</span> service;{"\n"}
            {"\n"}
            {"  "}<span className="c-ann">@GetMapping</span>{"\n"}
            {"  "}<span className="c-kw">public</span> <span className="c-type">Page</span>&lt;<span className="c-type">TransactionDTO</span>&gt; <span className="c-fn">search</span>({"\n"}
            {"      "}<span className="c-ann">@Valid</span> <span className="c-type">TransactionFilter</span> filter,{"\n"}
            {"      "}<span className="c-type">Pageable</span> page) {"{"}{"\n"}
            {"    "}<span className="c-kw">return</span> service.<span className="c-fn">findAll</span>(filter, page);{"\n"}
            {"  }"}{"\n"}
            {"}"}
          </code>
        </pre>
      </div>

      <div className="terminal">
        <div className="terminal__line">
          <span className="c-green">$</span> python -m secure_model run
        </div>
        <div className="terminal__line c-muted">✔ license verified · ✔ weights decrypted</div>
        <div className="terminal__line">
          <span className="c-green">200 OK</span> <span className="c-muted">·</span> 27 ms
        </div>
      </div>

      <span className="float-badge fb-1" style={{ color: "#f89820" }}><FaJava /></span>
      <span className="float-badge fb-2" style={{ color: "#6db33f" }}><SiSpringboot /></span>
      <span className="float-badge fb-3" style={{ color: "#3776ab" }}><SiPython /></span>
      <span className="float-badge fb-4" style={{ color: "#e25a1c" }}><SiApachespark /></span>
      <span className="float-badge fb-5" style={{ color: "#ff9900" }}><FaAws /></span>
      <span className="float-badge fb-6" style={{ color: "#47a248" }}><SiMongodb /></span>
    </div>
  );
}
