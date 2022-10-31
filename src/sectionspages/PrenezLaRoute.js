import React from "react";
import ID5_1 from "../images/ID5_1.jpg";
import ID5_2 from "../images/ID5_2.jpg";
import ID4_1 from "../images/ID4_1.jpg";
import Taigo_1 from "../images/Taigo_1.jpg";
import Rasso from "../images/Rasso.jpeg";
import "../sectionspages/PrenezLaRoute.css";

const PrenezLaRoute = () => {
  return (
    <div className="Body">
      <h1 align="center" className="spitch">
        Prenez La Route.
      </h1>
      <div className="PrenezLaRoute-Container">
        <div className="PartieGauchePrenezLaRoute">
          <div>
            <img src={ID5_1} />
          </div>
          <div>
            <p>
              <b align="center">
                L'application de recharge de véhicules électriques entre
                particuliers.
              </b>
            </p>
          </div>
          <div>
            <p>
              Toute personne souhaitant mettre à disposition sa borne de
              recharge ou même une prise extérieure pourra l’enregistrer sur
              l’application. Rejoignez la communauté !
            </p>
          </div>
        </div>
        <div className="PartieDroitePrenezLaRoute">
          <div className="Text-image-PrenezLaRoute">
            <div>
              <img src={Rasso} className="Photo" />
            </div>
            <div className="Text-PrenezLaRoute">
              <div>
                <p>
                  <b>Les offres du moment</b>
                </p>
              </div>
              <div>
                <p>En août profitez d’offres exceptionnelles.</p>
              </div>
            </div>
          </div>
          <div className="Text-image-PrenezLaRoute">
            <div>
              <img src={ID4_1} className="Photo" />
            </div>
            <div className="Text-PrenezLaRoute">
              <div>
                <p>
                  <b>ID.4 à partir de 309€/mois.</b>
                </p>
              </div>
              <div>
                <p>
                  Une petite pause suffit pour recharger ses batteries. Et les
                  vôtres.
                </p>
              </div>
            </div>
          </div>
          <div className="Text-image-PrenezLaRoute">
            <div>
              <img src={ID5_2} className="Photo" />
            </div>
            <div className="Text-PrenezLaRoute">
              <div>
                <p>
                  <b>Nouveau ID.5 GTX </b>
                </p>
              </div>
              <div>
                <p>
                  Découvrez ses performances électriques grâce à son système de
                  transmission intégrale.
                </p>
              </div>
            </div>
          </div>
          <div className="Text-image-PrenezLaRoute">
            <img src={Taigo_1} className="Photo" />
            <div className="Text-PrenezLaRoute">
              <div>
                <p>
                  <b>Nouveau Taigo</b>
                </p>
                <p>
                  Changez quand vous voulez avec le Forfait Volkswagen
                  Flexibilité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="LigneHorizontale"></div>
    </div>
  );
};

export default PrenezLaRoute;
