import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "../Components/BarreNavigation";
import OffrePerso from "../Components/OffrePerso";
import PrenezLaRoute from "../sectionspages/PrenezLaRoute";
import Golf7 from "../Video/Golf7.mp4";

const Accueil = () => {
  return (
    <div className="Accueil">
      <video className="Video-Golf7" src={Golf7} autoPlay loop muted />
      <Menu />
      <div className="Video-Text-Container">
        <h1>Découvrez nos engagements en faveur du progrés</h1>
        <h2>
          Volkswagen poursuit sa quête du progrès par l’électrique pour une
          mobilité plus durable.
        </h2>
      <NavLink to="/UIInnovationService">
        <div><button>Découvrir notre vision de l'avenir</button></div>
      </NavLink>
      </div>

      <div className="disponibilite">
        <h2>Véhicules immédiatement disponible</h2>

        {/* <div>
          <label name="voiture" id="voiture-selection" />
          <select>
            

            <option value="Taigo">Taigo</option>
            <option value="T-Cross">T-Cross</option>
            <option value="T-Roc">T-Roc</option>
            <option value="Tiguan">Tiguan</option>
            <option value="ID-4">ID-4</option>
            <option value="ID-5">ID-5</option>
            <option value="Passat SW">Passat SW</option>
            <option value="Touran">Touran</option>
          </select>
        </div> */}

        <label>Vehicules :</label>

        <NavLink to="/Taigo">
          <li>Taigo</li>
        </NavLink>
        <NavLink to="/Tiguan">
          <li>Tiguan</li>
        </NavLink>

        <p>Véhicule neuf</p>

        <p>Véhicules d'occasion</p>
      </div>

      <div id="ComponentPrenezLaRoute"><PrenezLaRoute /></div>

      
    </div>
  );
};

export default Accueil;
