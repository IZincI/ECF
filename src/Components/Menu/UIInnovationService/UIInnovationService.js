import React from "react";
import BarreNavigation from "../../BarreNavigation";
import "./UIInnovationService.css";
import ExpandWeConnect from "../../../images/Expand-WeConnect.jpg";

const UIInnovationService = () => {
  return (
    <div className="BodyInnovationService">
      <div className="MenuUI">
        <BarreNavigation />
      </div>

      <div className="ModeleConfig-Container">
        <h1 id="TitreModelesConfig">Découvrir nos innovations et services</h1>
        <div className="ModeleConfigH1Out-Container">
          <div className="PartieGauche">
            <h2>Motorisations</h2>
            <h2>Applications et services connectés</h2>
            <h2>Technologies embarquées</h2>
            <h2>Mobilité électrique</h2>
          </div>

          <span className="LigneVerticale"></span>

          <div className="PartieDroite">
            <h2>Liens :</h2>
            <p>Se connecter à MyVolkswagen</p>
            <p>Activer Car-Net</p>
            <p>Centre d'aide et de dialogue</p>
            
            <img src={ExpandWeConnect} width="200vh" />
            <p>
              Rester connecté en toute simplicité. Avec les services de We Connect
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIInnovationService;
