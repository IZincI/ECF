import { NavLink } from "react-router-dom";
import React from "react";
import "../CSS/BarreNavigation.css";
import MenuIcon from "../images/Icons/menu.png";
import Utilisateur from "../images/Icons/utilisateur.png";
import Loupe from "../images/Icons/loupe.png";

const BarreNavigation = () => {
  return (
    <div className="Menu">
      <div>
      <button id="test">
        <NavLink to="/Navigation" className="CoteGauche">
          
          <img src={MenuIcon} className="Menu-image" />

          <p className="Text-Menu" id="TitreMenuNavigation">Menu</p>
        </NavLink>
        </button>
      </div>
      <div className="CoteDroit">
        <img src={Utilisateur} className="Menu-image" />

        <img src={Loupe} className="Menu-image" />
      </div>
    </div>
  );
};

export default BarreNavigation;
