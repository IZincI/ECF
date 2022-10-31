import { NavLink } from "react-router-dom";
import React from "react";
import "../CSS/Menu.css";
import LogoFermer from "../images/Icons/fermer.png";
import Rasso from "../images/Rasso.jpeg";

const Menu = () => {
  return (
    <div className="Navigation-Container">
      <div className="Fermer">
        <NavLink to="/" className="Fermer">
          <img src={LogoFermer}></img>
          <p id="Text-Fermer">fermer</p>
        </NavLink>
      </div>

      

      <div className="Sommaire">
        <div className="Liste-1">
          <NavLink to="/UIModelesConfigurateur" className="Option">
            <li>- Modèles et configurateur</li>
          </NavLink>
          <NavLink to="/Modeles" className="Option">
            <li>- Acheter</li>
          </NavLink>
          <NavLink to="/UIRoulerElectrique" className="Option">
            <li>- Rouler en electrique</li>
          </NavLink>
          <NavLink to="/UIInnovationService" className="Option">
            <li>- Découvrir nos innovations et services</li>
          </NavLink>
          <NavLink to="/UIentretenirVolkswagen" className="Option">
            <li>- Entretenir ma Volkswagen</li>
          </NavLink>
          <NavLink to="/UILouerVolkswagen" className="Option">
            <li>- Louer une Volkswagen</li>
          </NavLink>
          <NavLink to="/UIConcessionnaire" className="Option">
            <li>- Trouver un concessionnaire</li>
          </NavLink>
        </div>

        <span id="LigneVerticaleMenu"></span>

        <div className="Liste-2">
          <div><h1 id="TitreLien">Liens</h1></div>
          <div className="Option"><li>Réserver un essai</li></div>
          <div className="Option"><li>Découvrir nos offres</li></div>
          <div className="Option"><li>Demander une reprise</li></div>
          <div id="ContainerImage"><img src={Rasso} id="Rasso"></img></div>
          <div >
            Profitez des offres exceptionnelles <b>pendant le mois d'août.</b>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
