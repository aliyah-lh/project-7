import { useParams } from "react-router-dom";
import "../styles/logement.scss";

import rentalList from "../data/logements.json";

import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Error from "./Error";

export default function Logement() {
  const { id } = useParams();
  const rental = rentalList.find((rental) => rental.id === id);

  if (!rental) {
    return <Error />;
  }

  return (
    <main className="rental-page">
      <Carousel slides={rental.pictures} />

      <div className="rental-info-container">
        <div className="rental-title">
          <h1 className="rental-info__title">{rental.title}</h1>
          <p className="rental-info__location">{rental.location}</p>

          
          <div className="rental-tags">
            {rental.tags.map((tag, index) => (
              <span key={index} className="rental-tags__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="renter-info">
          <p className="renter-info__name">{rental.host.name}</p>
          <img
            className="renter-info__pic"
            src={rental.host.picture}
            alt={rental.host.name}
          />

          
          <div className="renter-info__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${
                  star <= rental.rating ? "star--filled" : "star--empty"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rental-collapse-container">
        <Collapse
          className="collapse collapse--small"
          title="Description"
          content={rental.description}
        />
        <Collapse
          className="collapse collapse--small"
          title="Équipements"
          content={rental.equipments}
        />
      </div>
    </main>
  );
}
