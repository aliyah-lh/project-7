import { useState } from "react";
import "../styles/collapse.scss";

export default function Collapse({ title, content, className = "" }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={className}>
      <button className="collapse__title-container" onClick={toggle}>
        <h2 className="collapse__title-container__title">{title}</h2>

        <i
          className={
            !open
              ? "fa-solid fa-chevron-down expand_icon"
              : "fa-solid fa-chevron-down expand_icon expand_icon--opened"
          }
        ></i>
      </button>

      {open && (
        <div className="collapse__text">
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
      )}
    </div>
  );
}
