import React from "react";
import BarreNavigation from "../../BarreNavigation";
import Tiguan_1 from "../../../images/Tiguan_1.jpg";
import GolfSW_1 from "../../../images/GolfSW_1.jpg";
import GolfSW_2 from "../../../images/GolfSW_2.jpeg";
import LouerVWHeader from "../../../images/LouerVWHeader.webp";
import Caddy_1 from "../../../images/Caddy_1.jpg";
import "./UILouerVolkswagen.css";

import VolkswagenRentCard from "./Components/VolkswagenRentCard";

const UILouerVolkswagen = () => {
  return (
    <div className="Main-Content">
      <BarreNavigation />

      <img className="BgHeader" src={LouerVWHeader} />

      <div className="VolkswagenLouer-Container">
        <h1 id="TitreVolkswagen-Rent">Volkswagen Rent</h1>

        <div className="VolkswagenLouer-Container-B">
          <b>Voyagez l'esprit tranquille</b>
          <br />
          En vacances, week-end ou encore déménagement… Choisissez le véhicule
          qui saura répondre à vos besoins. Louer une Volkswagen pour une courte
          durée(LCD)
        </div>

        <button>Découvrir Volkswagen Rent</button>
      </div>

      <h2 id="TitreDecouverteVolkswagen">Découvrir Volkswagen Rent</h2>

      <div className="DecouvrirVolkswagen">
        <div>
          <b>
            Quel que soit le motif de vos déplacements, Volkswagen vous
            accompagne dans vos moments de vie.
          </b>
        </div>
        <div>
          Profitez du meilleur service pour tous vos déplacements et prenez la
          route en toute sécurité.
        </div>
        <div>
          Découvrez l’ensemble de notre gamme, disponible partout en France
          grâce à nos experts formés à l’activité de location et bénéficiez des
          dernières technologies Volkswagen.
        </div>
      </div>
      <h1 id="TitreVolkswagenRent"> Nos solutions Volkswagen Rent</h1>
      <div className="VWRentCard-Container">
        <div>
          <VolkswagenRentCard
            texteImage="PARTEZ EN WEEK-END "
            VoitureURL={Tiguan_1}
            TitreTexte="Tous nos modèles à portée de main !"
            Texte="Il est grand temps de profiter des moments de la vie. Faites une pause le temps d’un week-end avec l’un de nos véhicules. Louer une voiture avec Volkswagen Rent, c’est la liberté d’aller où vous voulez et de voyager selon vos envies. "
          />
        </div>
        <div>
          <VolkswagenRentCard
            texteImage="PARTEZ EN Famille "
            VoitureURL={GolfSW_1}
            TitreTexte="Vos trajets n’auront plus la même allure !"
            Texte="C’est parce que les moments en famille sont précieux que nous prenons soin de vous et de vos proches.
            Nos véhicules peuvent accueillir jusqu’à 7 personnes à bord. Prenez la route en toute sérénité et profitez du confort de conduite Volkswagen.  "
          />
        </div>
        <div>
          <VolkswagenRentCard
            texteImage="POUR DES LOISIRS "
            VoitureURL={Caddy_1}
            TitreTexte="Prenez le large avec Volkswagen Rent !"
            Texte="On ne sait pas ce que l’avenir nous réserve, alors partez à l’aventure et faites de nouveaux voyages avec nos véhicules tout équipés. Seul, entre amis, en amoureux ou en famille, nos véhicules vous accueillent pour créer de nouveaux souvenirs. "
          />
        </div>
        <div>
          <VolkswagenRentCard
            texteImage="POUR VOS DEPLACEMENTS PROFESSIONNELS "
            VoitureURL={GolfSW_2}
            TitreTexte="Volkswagen vous accompagne tout au long de votre carrière."
            Texte="Parce que la première impression est souvent la plus importante, faites forte impression à bord d’une Volkswagen lors de vos séminaires, réunions, voyages d’affaire,  conventions, meeting professionnels… La sécurité et le confort sont les maîtres mots de nos modèles disponibles à la location."
          />
        </div>
      </div>
    </div>
  );
};

export default UILouerVolkswagen;
