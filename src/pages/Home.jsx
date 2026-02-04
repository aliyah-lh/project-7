import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import bannerImg from "../assets/banner.svg"; 
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Banner image={bannerImg} texte="Chez vous, partout et ailleurs" />

        <section className="home__cards">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

