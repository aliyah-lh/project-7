import { Outlet } from "react-router-dom";
import "../styles/layout.scss";



export default function Layout() {
  return (
    <>
      <header>
        <h1>Kasa</h1>
        {/* Ici tu peux mettre les liens navigation si tu veux */}
      </header>

      <main>
        <Outlet /> {/* C’est ici que les pages (Home, About…) vont s’afficher */}
      </main>

      <footer>
        <p>© 2026 Kasa. Tous droits réservés.</p>
      </footer>
    </>
  );
}
