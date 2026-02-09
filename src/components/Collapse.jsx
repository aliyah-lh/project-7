import { useRef } from "react";
import useAccordion from "../../hooks/useAccordion";
import "../styles/collapse.scss";

export default function Collapse({ title, content }) {
  const detailsRef = useRef(null);
  const summaryRef = useRef(null);
  const contentRef = useRef(null);

  useAccordion(detailsRef, summaryRef, contentRef);

  return (
    <details ref={detailsRef} className="collapse">
      <summary ref={summaryRef} className="collapse__title">
        <h2>{title}</h2>
        <i className="fa-solid fa-chevron-down collapse__icon"></i>
      </summary>

      <div ref={contentRef} className="collapse__content">
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </details>
  );
}
