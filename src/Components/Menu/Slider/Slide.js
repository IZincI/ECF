import React from "react";
import "./styles.css";
import Carousel from "better-react-carousel";
import E_Up from "../../../images/Carousel/e_up_1.webp";
import ID4_1 from "../../../images/Carousel/ID4_1.webp";
import ID4_2 from "../../../images/Carousel/ID4_2.webp";
import IDBuzz_1 from "../../../images/Carousel/IDBuzz_1.webp";
import BarreNavigation from "../../BarreNavigation";

const Gallery = () => {
  return (
    <div className="ContainerGallery">
      <BarreNavigation />

      <div className="LigneHorizontale"></div>

      <div className="spitch">Découvrez la gamme électrique</div>

      <div className="LigneHorizontale"></div>

      <div className="Carousel">
        <Carousel cols={2} rows={1} gap={10} loop>
          <Carousel.Item>
            <div>
              <img width="100%" src={E_Up} />
              <h1>Volkswagen e-up!</h1>
              <div>
                <b>L’e-mobilité up! gradée.</b>
              </div>
              <div>
                Plus d’autonomie que jamais. Plus d'équipements à un meilleur
                prix. Pour tous ceux qui évoluent avec leur temps : l'e-up!
                facilite encore plus l'éléctro-mobilité. Et même mieux.
              </div>
              <button>Découvrez-la</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={ID4_1} />
            <div>
              <h1>Volkswagen ID.4.</h1>
              <div>
                <b>Aussi polyvalent qu'un SUV, aussi performant qu'une ID.</b>
              </div>
              <div>
                L'ID.4 combine le meilleur des deux mondes : la polyvalence d'un
                SUV moderne et la performance durable que procure un véhicule
                électrique. Pour ceux qui veulent tout avoir. Sans aucun
                compromis.
              </div>
              <button>Découvrez-le</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={ID4_2} />
            <div>
              <h1>Volkswagen Nouveau ID.5 GTX.</h1>
              <div>
                <b>Le Nouveau SUV coupé sportif et 100% électrique.</b>
              </div>
              <div>
                Le Nouveau ID.5 GTX est le SUV Coupé 100% électrique au design
                athlétique et aux accélérations à couper le souffle. Grâce à sa
                transmission intégrale à deux moteurs, le Nouveau ID.5 GTX
                dispose de performances électriques sportives, tout en
                garantissant le plaisir de conduire.
              </div>
              <button>Découvrez-la</button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img width="100%" height="61.5%" src={IDBuzz_1} />
            <div>
              <h1>Volkswagen Nouveau ID. Buzz.</h1>
              <div>
                <b>
                  Nouveau ID. Buzz, entièrement électrique, entièrement
                  connecté, entièrement repensé.
                </b>
              </div>
              <div>
                100% électrique, le Nouveau ID. Buzz établit de nouveaux
                standards grâce à des technologies de pointe et à une conception
                flexible de l’espace. Découvrez le dès maintenant !
              </div>
              <button>Découvrez-la</button>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
