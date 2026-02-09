import { useState } from "react";
import "../styles/collapse.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title" onClick={display}>
        <h2>{title}</h2>

        <p>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>

      {isOpen && (
        <div className="collapse__dropdown__content">
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

