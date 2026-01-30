import { useState } from "react";

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
      </div>

      {open && (
        <div>
          {Array.isArray(content)
            ? content.map((item, i) => <p key={i}>{item}</p>)
            : <p>{content}</p>
          }
        </div>
      )}
    </div>
  );
}
