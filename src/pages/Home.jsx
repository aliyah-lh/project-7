import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import "../styles/home.scss";

export default function Home() {
  return (
    <main>
      <Banner />
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
  );
}
