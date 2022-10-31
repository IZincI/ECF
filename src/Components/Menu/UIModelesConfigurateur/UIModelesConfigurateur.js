import React from "react";
import "./UIModelesConfigurateur.css";
import "../../Menu/UIModelesConfigurateur/UIModelesConfigurateur.css";
import ID4_3 from "../../../images/ID4_3.jpeg";
import BarreNavigation from "../../BarreNavigation";

const UIModelesConfigurateur = () => {
  return (
    <div className="ModeleConfig-Container">
      
      <div className="BarreMenu">
        <div>
        <BarreNavigation />
        </div>
        
      </div>
      <div className="UI">
   <h1 id="TitreModelesConfig">Modèles et configurateur</h1>
   <div className="ModeleConfigH1Out-Container">
     <div className="PartieGauche">
       <h2>Découvrir notre gamme</h2>
       <h2>Configurer un véhicule</h2>
       <h2>Comparer nos modèles</h2>
     </div>

     <span className="LigneVerticale">a</span>

     <div className="PartieDroite">
       <h2>Liens :</h2>
       <p>Découvrir nos offres</p>
       <p>Trouver un concessionnaire</p>
       <p>Télécharger une brochure</p>
       <p>Délais de livraison</p>
       <img src={ID4_3} width="200vh" />
       <p>
         Découvrez le nouvelle ID.4 élu
         <b>
           <p></p> « World Car of the Year 2021 »
         </b>
       </p>
     </div>
   </div>
   </div>
 </div>
    
  );
};

export default UIModelesConfigurateur;
