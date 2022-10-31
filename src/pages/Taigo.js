import React from "react";
import BarreNavigation from "../Components/BarreNavigation";
import VWTaigo from "../images/VWTaigo.jpg";
import VideoTaigo from "../Video/Taigo.mp4";
import "../CSS/Taigo.css"

const Taigo = () => {
  return (
    <div>
      <BarreNavigation />
      <div className="Text-Container">
        <h1>
          Découvrez le nouveau <strong>Véhicule</strong> en avant premiere
        </h1>
        <h2>
          Volkswagen poursuit sa quête du progrès par l’électrique pour une
          mobilité plus durable.4
        </h2>
        <button>Découvrir notre vision de l'avenir</button>
      </div>

      <img className="image-voiture" src={VWTaigo} />

      <span className="LigneHorizontale">a</span>
      <div className="spitch">Découvrez le véhicule, maintenant !</div>
      <span className="LigneHorizontale">a</span>
      <video className="Video-Taigo" src={VideoTaigo} autoPlay loop muted />

      <div className="Pitch-Taigo">
        <h2 id="Titre">Nouveau Taigo</h2>
        <h2>Le SUV coupé signé Volkswagen</h2>
        <div>
          <button>Réserver un essai</button>
          <button>Configurer</button>
        </div>
      </div>
      <div className="caracteristique">
        <div>
          <p>À partir de </p>
          <p>
            <b>24 590€ </b>
            TTC
          </p>
        </div>

        <div>
          <p>Volume du coffre</p>
          <p>
            <b>438</b> litres
          </p>
        </div>

        <div>
          <p>Puissance</p>
          <p>
            <b>95 à 150 </b>ch
          </p>
        </div>

        <div>
          <p>Consommation </p>
          <p>
            <b>5,5 - 6,8l </b>/100 km
          </p>
        </div>
      </div>

      <div className="Download">
        <span className="LigneHorizontale"></span>
        <button id="Download">Télécharger la documentation</button>
        <span className="LigneHorizontale"></span>
      </div>
    </div>
  );
};

export default Taigo;
