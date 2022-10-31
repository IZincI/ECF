import React from "react";
import "../CSS/Modeles.css";
import CarteVoiture from "../Components/CarteVoiture";
import BarreNavigation from "../Components/BarreNavigation";
import Golf8_2 from "../images/Golf8_2.png";
import Taigo_3 from "../images/Taigo_3.png";
import Tiguan_2 from "../images/Tiguan_2.png";
import TCross from "../images/T-Cross_1.png";
import Arteon from "../images/Arteon_1.png";
import Polo from "../images/Polo_1.png";
import Touran from "../images/Touran_1.png";
import TRoc from "../images/TRoc_1.png";

const Modeles = () => {
  return (
    <div>
      <BarreNavigation />
    
    <div className="Body">
      <h1 id="TitreModele">Les Modeles Volkswagen</h1>

      <span className="LigneHorizontale"></span>

      <div className="Modeles-Container">
        
        <div></div>
        <div className="CardModele">
          <CarteVoiture
          Voiture={Taigo_3}
          color="#6F0008"
          Titre="Nouveau Taigo"
          Prix="À partir de 209€/mois"
          Info="Avec apport, sous conditions de reprise et de la prime à la
          conversion déduite"
          />
        </div>
        <div className="CardModele">
          <CarteVoiture
          Voiture={Golf8_2}
          color="#A79B14"
          Titre="Golf 8"
          Prix="A partir de 309€/mois"
          Info="Avec apport, sous conditions de reprise"
          />
        </div>
        <div className="CardModele">
          <CarteVoiture Voiture={Tiguan_2}
          color="#2F4151"
          Titre="Tiguan"
          Prix="A partir de 439€/mois"
          Info="Avec apport, sous conditions de reprise"
          />
        </div>
        <div className="CardModele">
          <CarteVoiture Voiture={TCross}
          color="#AA5633"
          Titre="T-Cross"
          Prix="A partir de 239€/mois"
          Info="Avec apport, sous conditions de reprise"
          />
        </div>
        <div className="CardModele">
          <CarteVoiture 
          Voiture={TRoc}
          color="#5E6166"
          Titre="T-Roc"
          Prix="A partir de 289€/mois"
          Info="Avec apport, sous conditions de reprise"
          />
        </div>
        <div className="CardModele">
        <CarteVoiture
          Voiture={Arteon}
          color="#074E7C"
          Titre="Arteon"
          Prix="A partir de 669€/mois"
          Info="Avec apport, sous conditions de reprise"
          />
        </div>
        <div className="CardModele">
        <CarteVoiture
          Voiture={Polo}
          color="#1F3162"
          Titre="Polo"
          Prix="A partir de 189/mois"
          Info=" Avec apport, sous conditions de reprise et de la prime à la conversion déduite"
          />
        </div>
        <div className="CardModele">
          <CarteVoiture
          Voiture={Touran}
          color="#94979A"
          Titre="Touran"
          Prix="A partir de 309€/mois"
          Info="Avec apport, sous conditions de reprise"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Modeles;
