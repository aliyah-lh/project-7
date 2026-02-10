import { NavLink } from "react-router-dom";
import "../styles/error.scss";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>

      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <NavLink to="/" className="error__redirect">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}
