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
          <div className="order-map">
            <img src={maps} alt="order map"/>
          </div>
          <div className="order-info1">
          <span>
            Listo! Tu pedido sera entregado a tu domicilio en la fecha estimada y en un tiempo estimado de 20 minutos
            antes del horario seleccionado.
          </span>
          </div>
          <div className="order-info2">
          <span>
            No te preocupes! Nosotros te llamaremos cuando estemos cerca de tu domicilio
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