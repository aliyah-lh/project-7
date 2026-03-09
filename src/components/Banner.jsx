import "../styles/banner.scss";

export default function Banner({ image, texte }) {
  return (
    <div className="banner">
      {image && <img className="banner__img" src={image} alt="Bannière" />}
      <div className="banner__sombre"></div>
      <h1 className="banner__txt">{texte}</h1>
    </div>
  );
}
