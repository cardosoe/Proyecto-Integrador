import React from "react";
import Casa from "../../assets/Images/section3-image.png";
import "../Section3/Section3.scss";
import FlechaIzquierda from "../../assets/Images/Icon-feather-arrow-left-circle.svg";
import FlechaDerecha from "../../assets/Images/Icon-feather-arrow-right-circle.svg";

const Section3 = () => {
  return (
    <div>
      <div className="fotoCasa">
        <div className="RectanguloGris">
          <div className="FotoCasa">
            <img src={Casa} alt="Foto Casa" className="FotoCasa" />{" "}
            <div className="CuadradoNaranja">
              <p className="TextoCuadradoNaranja">Sed ut perspiciatis</p>
              <h4>Nemo Enim</h4>
              <p className="ParrafoCuadradoNaranja">
                Sed ut perspiciatis unde omnis iste natus error sit
                <br />
                voluptatem accusantium doloremque laudantium,
                <br /> totam rem aperiam.
              </p>
              <img
                src={FlechaIzquierda}
                alt="Flecha izquierda"
                className="FlechaIzquierda"
              />
              <img
                src={FlechaDerecha}
                alt="Flecha derecha"
                className="FlechaDerecha"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
