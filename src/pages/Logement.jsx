import { useParams, Navigate } from "react-router-dom";
import "../styles/logement.scss";


import rentalList from "../data/logements.json";


import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";

export default function Logement() {
  const { rentalId } = useParams();
  const rental = rentalList.find((i) => i.id === rentalId);

 
  if (!rental) {
    return <Navigate to="/adresse-introuvable" />;
  }

  return (
    <main className="rental-page">
      
      <Carousel slides={rental.pictures} />

      
      <div className="rental-info-container">
        <h1 className="rental-info__title">{rental.title}</h1>
        <p className="rental-info__location">{rental.location}</p>

       
        <div className="renter-info">
          <p className="renter-info__name">{rental.host.name}</p>
          <img
            className="renter-info__pic"
            src={rental.host.picture}
            alt={rental.host.name}
          />
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
          content={rental.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </main>
  );
}

