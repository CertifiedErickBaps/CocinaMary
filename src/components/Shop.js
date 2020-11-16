import React from 'react';
import shopBackground from "../images/shop.jpg";
import itemMenu from "../images/menu.jpg";

import less from "../images/less.svg";
import plus from "../images/plus.svg";
import trash from "../images/trash.svg";

import NavBar from "./NavBar";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import OrderSended from '../pages/OrderSended';


class Shop extends React.Component {
  state = {

  }


  render() {
    let carrito = this.props.location.state.carrito;
    let ordenes = [];
    let total = 0;
    carrito.forEach(orden => {
      total += orden.precio;
      ordenes.push(<Order imagen={orden.imagen} titulo={orden.titulo} precio={orden.precio}/>);
    })
    return (
      <>
        <div className="shop-main">
          <div className="background-image">
            <img src={shopBackground} alt="background" />
          </div>
          <div className="opacity" />
          <div className="shop">
            <NavBar />
            <div className="container-menu">
              <div className="title-shop">
                <span>
                  Mi orden
                </span>
              </div>
              <div className="container-white">
                {ordenes}
              </div>
              <div className="container-price">
                <div className="total">
                  <span>Total</span>
                  <span>${total} MXN</span>
                </div>
              </div>
              <div className="checkout-container">
                <Link className="checkout waves-effect waves-light btn-large" to="/calendario">
                  Checkout
                </Link>

              </div>
              <div className="more-info">
                <span>
                  Tu comida llegara en un tiempo estimado de 10 a 20 minutos, dependiendo de la cantidad de comida.
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

class Order extends React.Component {
  
  render() {
    let imagen = this.props.imagen;
    let precio = this.props.precio;
    let titulo = this.props.titulo;
    return <div className="container-order">
      <div className="order-container">
        <div className="image-order">
          <img src={imagen} alt="order" />
        </div>
        <div className="info-order">
          <div className="first">
            <div className="title-order">
              <span>{titulo}</span>
            </div>
           
          </div>
          <div className="second">
            <div className="price">
              <span>${precio }MXN</span>
            </div>
            <div className="piezas">
              
            </div>
          </div>
        </div>
        {/* <div className="trash">
          <img src={trash} alt="" />
        </div> */}
      </div>
    </div>
  }
}

export default Shop;