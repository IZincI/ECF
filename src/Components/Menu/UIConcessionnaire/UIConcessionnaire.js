import React from 'react';
import "../UIConcessionnaire/UIConcessionaire.css"
import BarreNavigation from '../../BarreNavigation';
import loupe from '../../../images/Icons/loupe.png';
import Carte from '../../../images/Carte.PNG';
import Menu from '../../../images/Icons/menu.png';

const UIConcessionnaire = () => {
    
    return (
        <div >
            <BarreNavigation />
            <div className='Container-Concessionnaire'>
            <div id="TitreMyVolkswagen">Trouvez votre partenaire <b>Volkswagen</b></div>
            <div className='filter'>
                <div className="RechercheAdresse"><div><img src={loupe}/></div><div><input type="text" placeholder='Veuillez saisir une adresse' className='Selection' ></input></div></div>
                <div className="RechercheAdresse"><div><img src={Menu}/></div><div><input type="select" placeholder='Afficher la liste des filtres' className='Selection'></input></div></div>
                
                
            </div>

                <div><img src={Carte} /></div>







            </div>
            
        </div>
    );
};

export default UIConcessionnaire;