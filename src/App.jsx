import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Abouts";
import Logement from "./pages/Logement";
import Error from "./pages/Error";
import "./styles/app.scss";
import Header from "./components/Header"; 
import Footer from "./components/Footers";


function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
