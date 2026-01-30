import { useState } from "react";

export default function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  };

  const prev = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  };

  if (pictures.length === 1) {
    return <img src={pictures[0]} alt="logement" />;
  }

  return (
    <div>
      <button onClick={prev}>◀</button>
      <img src={pictures[index]} alt="logement" />
      <button onClick={next}>▶</button>
      <p>{index + 1} / {pictures.length}</p>
    </div>
  );
}
