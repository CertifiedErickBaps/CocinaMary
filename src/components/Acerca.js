import React from 'react';

//Image
import acercaImage from "../images/about.jpg";
import arrow from "../images/arrow.svg";
import {NavHashLink} from "react-router-hash-link";

const Acerca = () => {
  return (
    <>
      <div className="acerca" id="acerca">
        <div className="image-acerca">
          <img src={acercaImage} alt="Acerca de cocina mary"/>
        </div>
        <div className="information-acerca">
          <div className="title">
            <span>Acerca de cocina Mary</span>
          </div>
          <div className="information">
          <span>
            El negocio requiere adaptarse a las nuevas tecnologías y metodologías de manera rápida y concisa, requiere de una estrategia digital que concuerde con su modelo de negocios, así mismo, este modelo necesita un cambio en su metodología interna para que pueda adaptarse junto con las nuevas tecnologías, no dejando de lado el propósito puro del negocio. Se debe decidir el nuevo camino a seguir, y la manera de agrupar todas las partes del proyecto en una sola.
          </span>
          </div>
          <div className="btn-menu">
            <NavHashLink smooth className="waves-effect waves-light btn-large" to="/#slider"
            >Ver menu</NavHashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acerca;