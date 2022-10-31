import "./CSS/Accueil.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Modeles from "./pages/Modeles";
import Taigo from "./pages/Taigo";
import Menu from "./Components/BarreNavigation";
import Navigation from "./Components/Menu";
import UIModelesConfigurateur from "./Components/Menu/UIModelesConfigurateur/UIModelesConfigurateur";
import Test from "./Test/Test";
import UIInnovationService from "./Components/Menu/UIInnovationService/UIInnovationService";
import UIEntretenirVolkswagen from "./Components/Menu/UIEntretenirVolkswagen/UIEntretenirVolkswagen";
import UILouerVolkswagen from "./Components/Menu/UILouerVolkswagen/UILouerVolkswagen";
import UIConcessionnaire from "./Components/Menu/UIConcessionnaire/UIConcessionnaire";
import UIRoulerElectrique from "./Components/Menu/UIRoulerElectrique/UIRoulerElectrique";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Modeles" element={<Modeles />} />
          <Route path="/Taigo" element={<Taigo />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/UILouerVolkswagen" element={<UILouerVolkswagen />} />
          <Route path="/UIConcessionnaire" element={<UIConcessionnaire />} />
          <Route
            path="/UIEntretenirVolkswagen"
            element={<UIEntretenirVolkswagen />}
          />
          <Route path="/UIRoulerElectrique" element={<UIRoulerElectrique />} />
          <Route
            path="/UIInnovationService"
            element={<UIInnovationService />}
          />
          <Route
            path="/UIModelesConfigurateur"
            element={<UIModelesConfigurateur />}
          />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <script type="module" src="/src/main.js"></script>
    </div>
  );
}

export default App;
