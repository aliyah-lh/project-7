import "../styles/footer.scss";
import logo from "../assets/logonoir.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Logo Kasa" />
      <p className="footer__text">
        © 2020 Kasa. All rights reserved.
      </p>
    </footer>
  );
}

