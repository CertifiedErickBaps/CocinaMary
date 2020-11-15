import React from 'react';
import shopBackground from "../images/shop.jpg";
import itemMenu from "../images/menu.jpg";

import less from "../images/less.svg";
import plus from "../images/plus.svg";
import trash from "../images/trash.svg";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Shop = () => {
  return (
    <>
      <div className="shop-main">
        <div className="background-image">
          <img src={shopBackground} alt="background"/>
        </div>
        <div className="opacity"/>
        <div className="shop">
          <NavBar/>
          <div className="container-menu">
            <div className="title-shop">
              <span>
                Mi orden
              </span>
            </div>
            <div className="container-white">
              <div className="container-order">
                <div className="order-container">
                  <div className="image-order">
                    <img src={itemMenu} alt="order"/>
                  </div>
                  <div className="info-order">
                    <div className="first">
                      <div className="title-order">
                        <span>Chiles en nogada</span>
                      </div>
                      <div className="icons-order">
                        <div className="less">
                          <img src={less} alt=""/>
                        </div>
                        <div className="plus">
                          <img src={plus} alt=""/>
                        </div>
                      </div>
                    </div>
                    <div className="second">
                      <div className="price">
                        <span>$120 MXN</span>
                      </div>
                      <div className="piezas">
                        <span>2 piezas</span>
                      </div>
                    </div>
                  </div>
                  <div className="trash">
                    <img src={trash} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-price">
              <div className="total">
                <span>Total</span>
                <span>$1200 MXN</span>
              </div>
            </div>
            <div className="checkout-container">
              <a className="checkout waves-effect waves-light btn-large" href="">Checkout</a>
            </div>
            <div className="more-info">
              <span>
                Tu comida llegara en un tiempo estimado de 10 a 20 minutos, dependiendo de la cantidad de comida.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Shop;