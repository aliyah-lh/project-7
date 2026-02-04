import { Link } from "react-router-dom";
import "../styles/header.scss";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo Kasa" />
      </Link>

      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
