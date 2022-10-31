import { render } from "@testing-library/react";
import React from "react";
import "../CSS/CarteVoiture.css";
import Voiture from "../images/Taigo_2.png";

const CarteVoiture = (props) => {
  return (
    <div className="Voiture-Container">
      <div className="HautCarte" style={{ backgroundColor: props.color }}>
        <h1 className="Modele">{props.Titre}</h1>

        <div className="Miniature-Voiture">
          {/* <img src={Voiture} width="400vh" /> */}
          <img src={props.Voiture} id="ModeleMiniature" />
        </div>
      </div>
      <div className="BasCarte">
        <div>
          <p className="Prix">
            <strong>{props.Prix}</strong>
          </p>
        </div>
        <div>
          <p className="Info">{props.Info}</p>
        </div>
        <div>
          <button className="Bouton-Offre">Découvrir les offres</button>
        </div>
      </div>
    </div>
  );
};

export default CarteVoiture;
