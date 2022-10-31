import React from "react";
import { NavLink } from "react-router-dom";
import ImageFond from "../../../../images/ID4_1.jpg";
import "./VolkswagenRentCard.css";

function VolkswagenRentCard(props) {
  return (
    <div className="Body">
      <div className="Container">
        <div className="TexteImage">{props.texteImage}</div>

        <img src={props.VoitureURL} id="VoitureURL" />

        <div className="TitreTexte VWRentBloc">{props.TitreTexte}</div>

        <div className="Texte VWRentBloc">{props.Texte}</div>

        <NavLink to="../../../Menu">
          <div id="MonVehicule" className="VWRentBloc">
            Réserver mon véhicule
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default VolkswagenRentCard;
