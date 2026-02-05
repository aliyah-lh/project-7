import { useState } from "react";
import "../styles/collapse.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className="collapse__icon">
          {isOpen ? "▲" : "▼"} 
        </span>
      </div>

      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content)
            ? content.map((item, i) => <p key={i}>{item}</p>)
            : <p>{content}</p>
          }
        </div>
      )}
    </div>
  );
}
