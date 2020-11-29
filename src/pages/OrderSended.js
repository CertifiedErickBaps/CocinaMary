import React from 'react';

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import maps from "../images/map.png";
import shopBackground from "../images/shop.jpg";
import {NavHashLink} from "react-router-hash-link";

const OrderSended = () => {
  return (
    <>
      <div className="order-sended-main">
        <div className="background-image">
          <img src={shopBackground} alt="background"/>
        </div>
        <div className="opacity"/>
        <div className="order-sended">
          <Navbar/>
          <div className="sucess">
            ¡Listo! Tu orden ha sido agregada.
          </div>
          <div className="order-map">
            <img src={maps} alt="order map"/>
          </div>
          <div className="order-info1">
          <span>
            <p>
            No te preocupes no se te cobrara nada hasta completar tu pedido.
            Te llamaremos en un plazo de 24hrs para confirmar tu pedido y pedirte más detalles.
            </p>
          </span>
          </div>
          <div className="order-info2">
          <span>
            En caso de tener más comentarios acerca de tu pedido llámanos al 55-29-60-70-10
          </span>
          </div>
          <div className="order-sended-btn">
            <NavHashLink smooth className="waves-effect waves-light btn-large" to="/#menu"
                         activeStyle={{color: '#ED6229'}}>
              Volver a ordenar
            </NavHashLink>
            {/*<a className="waves-effect waves-light btn-large" href="">Volver a ordenar</a>*/}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default OrderSended;