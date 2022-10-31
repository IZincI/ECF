import React from "react";
import "../CSS/OffrePerso.css";
import "../index.css";

const OffrePerso = () => {
  return (
    <div className="body">
      <div className="Questionnaire">
        <h1>Vos Coordonnées</h1>
        <input type="text" placeholder="Nom*" />
        <input type="text" placeholder="Prénom*" />
        <input type="text" placeholder="E-mail*" />
        <input type="text" placeholder="Téléphone*" />
        <input type="text" placeholder="Code Postal*" />
        <input type="text" placeholder="Votre concessionnaire*" />
        <button type="submit" placeholder="envoyez">
          envoyez
        </button>
      </div>
    </div>
  );
};

export default OffrePerso;
