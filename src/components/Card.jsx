import { Link } from "react-router-dom";
import "../styles/card.scss";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />

      <div className="card__overlay"></div>

      <h2 className="card__title">{title}</h2>
    </Link>
  );
}
