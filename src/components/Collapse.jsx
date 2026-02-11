import { useState } from "react";
import "../styles/collapse.scss";
import { FaChevronDown } from "react-icons/fa6";

export default function Collapse({ title, content, className = "" }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`collapse ${className}`}>
      <button className="collapse__title-container" onClick={toggle}>
        <h2 className="collapse__title-container__title">{title}</h2>

        <FaChevronDown
          className={
            !open
              ? "expand_icon"
              : "expand_icon expand_icon--opened"
          }
        />
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
