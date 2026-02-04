import { Link } from "react-router-dom";
import "../styles/card.scss";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card_img" />
      <div className="card_overlay"></div>
      <h2 className="card_title">{title}</h2>
    </Link>
  );
}
