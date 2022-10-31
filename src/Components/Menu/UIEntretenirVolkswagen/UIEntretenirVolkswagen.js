import React from "react";
import "./UIEntretenirVolkswagen.css";
import BarreNavigation from "../../BarreNavigation";
import ConfigurationImg from "../../../images/ID4_1.jpg";
import { NavLink } from "react-router-dom";
import OffrePerso from "../../OffrePerso";

const UIEntretenirVolkswagen = () => {
  return (
    <div className="BodyEntretenirVolkswagen">
      <div>
        <BarreNavigation />
      </div>

      <div id="TitreMyVolkswagen">
        my<b> Volkswagen</b>
      </div>

      <span className="LigneHorizontale" id="LigneHorizontaleEntretenir"></span>

      <div className="Container-boxes">
        <ul id="liste-Card-Entretien">
          <li id="Titre-Entretien">Vos Configurations</li>
          <li id="Config-Entretien">configuration enregistrées</li>
          <li></li>
          <NavLink to="/Modeles" className="Option">
            <li id="Lien-Entretien">Créer une nouvelle configuration</li>
            <div id="Plus">+</div>
          </NavLink>
        </ul>
      </div>
      <span className="LigneHorizontale" id="LigneHorizontaleEntretenir"></span>

      <OffrePerso />
    </div>
  );
};

export default UIEntretenirVolkswagen;
