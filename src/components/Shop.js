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
  constructor(props) {
    super()
    var handleAdd = this.handleAdd.bind(this);
    var handleLess = this.handleLess.bind(this);

  }

  state = {
    total: 0,
  }


  handleAdd(addValue) {
    this.setState({ total: this.state.total + addValue })
  }

  handleLess(lessValue) {
    this.setState({ total: this.state.total - lessValue })
  }

  componentDidMount() {
    let tempTotal = 0;
    let arrayLocal = Array.from(new Set(this.props.location.state.carrito.map(JSON.stringify))).map(JSON.parse);
    arrayLocal.forEach(orden => {
      tempTotal+= orden.precio
    }

    )
    this.setState({ total: tempTotal })
  }



  render() {
    let carrito = this.props.location.state.carrito;
    let ordenes = [];
    var handleAdd = this.handleAdd;
    var handleLess = this.handleLess;

    let jsonObject = carrito.map(JSON.stringify);

    console.log(jsonObject);

    let uniqueSet = new Set(jsonObject);
    let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    console.log(uniqueArray);


    uniqueArray.forEach(el => {
      ordenes.push(<Order handleAdd={handleAdd.bind(this)} handleLess={handleLess.bind(this)} imagen={el.imagen} titulo={el.titulo} precio={el.precio} />);
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
                <div className="container-total-order">
                  {ordenes}
                </div>
              </div>
              <div className="container-price">
                <div className="total">
                  <span>Total</span>
                  <span>${this.state.total} MXN</span>
                </div>
              </div>
              <div className="checkout-container">
                <Link className="checkout waves-effect waves-light btn-large" to={{
                  pathname: "/calendario", state: {
                    carrito: carrito,
                    total: this.state.total,
                  }
                }}>
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
  //Aqui pasa directamente el objeto a eliminar, solo seria eliminar por array o algo
  state = { piezas: 1, imagen: this.props.imagen, precio: this.props.precio, titulo: this.props.titulo }
  handleDelete(object) {
    console.log(object)
  }

  handlePlus(object) {
    console.log(object)
  }

  handleLess(object) {
    console.log(object)
  }

  render() {

    var handleAdd = this.props.handleAdd;
    var handleLess = this.props.handleLess;


    return (
      <div className="container-order">
        <div className="order-container">
          <div className="image-order">
            <img src={this.state.imagen} alt="order" />
          </div>
          <div className="info-order">
            <div className="first">
              <div className="title-order">
                <span>{this.state.piezas} pzas - </span>
                <span>{this.state.titulo}</span>
              </div>
              <div className="icons-order">
                <div onClick={() => {
                  if (this.state.piezas > 0) {
                    handleLess(this.state.precio);
                    this.setState({ piezas: this.state.piezas - 1 })
                    this.handleLess(this.props)
                  }
                

                }} className="less">
                  <img src={less} alt="" />
                </div>
                <div onClick={() => {
                  handleAdd(this.state.precio);
                  this.setState({ piezas: this.state.piezas + 1 })
                  this.handlePlus(this.props)

                }} className="plus">
                  <img src={plus} alt="" />
                </div>
              </div>
            </div>
            <div className="second">
              <div className="price">
                <span>${this.state.precio * this.state.piezas}MXN</span>
              </div>
              <div className="piezas">
              </div>
            </div>
          </div>
          <div onClick={() => this.handleDelete(this.props)} className="trash">
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;