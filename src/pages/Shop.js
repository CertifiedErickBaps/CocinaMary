import React from 'react';
import {Link} from "react-router-dom";

import shopBackground from "../images/shop.jpg";
import less from "../images/less.svg";
import plus from "../images/plus.svg";
import trash from "../images/trash.svg";
import itemMenu from "../images/menu.jpg";

import {firestore} from '../firebase';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OrderSended from './OrderSended';

class ItemFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let imagen = this.props.imagen;
    let titulo = this.props.titulo;
    let descripcion = this.props.descripcion;
    let piezas = this.props.piezas;
    let precio = this.props.precio;

    return (
      <>
        <div style={{width: 400}} className="container-item">
          <div className="food-opacity"/>
          <div className="food">
            <img src={imagen} alt="Food"/>
          </div>
          <div className="information-item">
            <span className="titulo">{titulo}</span>
            <span className="piezas">{piezas}</span>
            <span className="descripcion">{descripcion}</span>
            <button
              onClick={() => this.props.handleCarrito({titulo: titulo, precio: precio, imagen: imagen, piezas: 1})}
              className="waves-effect waves-light btn">Agregar a carrito
            </button>
          </div>
        </div>
      </>
    )
  }
}

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionClasico: true,
      sectionTemporada: false,
      sectionAdicional: false,
      carrito: [],
      total: 0,
      isSum: false
    }
  }

  componentDidMount() {
    firestore.collection('paquetes').get().then(snapshot => {
      let itemsClasico = [];
      let itemsTemporada = [];
      let itemsAdicional = [];
      snapshot.forEach(doc => {
        let info = doc.data();
        let item = <ItemFood piezas={info.piezas} titulo={info.titulo} precio={info.precio} imagen={info.imagen}
                             handleCarrito={this.handleCarrito} descripcion={info.descripcion}/>;
        switch (info.tipo) {
          case("Clasico"):
            itemsClasico.push(item);
            break;
          case("Temporada"):
            itemsTemporada.push(item);
            break;
          case("Adicional"):
            itemsAdicional.push(item);
            break;
          default:
            return null;
        }
      });
      this.setState({itemsClasico, itemsTemporada, itemsAdicional});
    });
  }

  handleCarrito = (objeto) => {
    // console.log(objeto.precio);
    // console.log(this.state.total);
    const titulo = objeto.titulo;
    let flag = false;
    this.state.carrito.forEach(el => {
      if (el.titulo === titulo) {
        flag = true;
        alert("Este paquete ya se encuentra dentro de tu carrito, si quieres modificar la cantidad dirígete a la parte inferior de esta pagina.");
      }
    });
    if (!flag) {
      this.setState(previousState => ({
          carrito: [...previousState.carrito, objeto],
          total: this.state.total + objeto.precio
        })
      );
    }


  };

  handleAdd = (addValue) => {
    this.setState({total: this.state.total + addValue});
  };

  handleLess = (lessValue) => {
    this.setState({total: this.state.total - lessValue});
  };

  handleDelete = (object) => {
    // console.log(object);
    let tempCarrito = [];
    for (let i = 0; i < this.state.carrito.length; i++) {
      if (!(this.state.carrito[i].titulo === object.titulo)) {
        tempCarrito.push(this.state.carrito[i]);
        // console.log("If - carrito", this.state.carrito[i]);
      } else {
        this.setState({total: this.state.total - object.precio * object.piezas});
      }
    }
    // console.log("TEMPO", tempCarrito);
    this.setState({carrito: tempCarrito});
  };

  handlePrecioPiezas = (object) => {
    let tempCarrito = [];
    for (let i = 0; i < this.state.carrito.length; i++) {
      if (!(this.state.carrito[i].titulo === object.titulo)) {
        tempCarrito.push(this.state.carrito[i]);
      } else {
        tempCarrito.push(object);
      }
    }
    console.log("New Carrito", tempCarrito);
    this.setState({carrito: tempCarrito});
  };

  showSection = (name) => {
    // console.log(name.target.id);
    switch (name.target.id) {
      case "clasico":
        this.setState({sectionClasico: !this.state.sectionClasico, sectionTemporada: false, sectionAdicional: false});
        break;
      case "temporada":
        this.setState({sectionTemporada: !this.state.sectionTemporada, sectionClasico: false, sectionAdicional: false});
        break;
      case "adicionales":
        this.setState({sectionAdicional: !this.state.sectionAdicional, sectionClasico: false, sectionTemporada: false});
        break;
      default:
        return null;
    }
  };

  render() {
    let {itemsClasico, itemsTemporada, itemsAdicional, carrito} = this.state;
    let showMenu;
    if (this.state.sectionClasico) {
      showMenu = null;
      showMenu = itemsClasico;
    }
    if (this.state.sectionTemporada) {
      showMenu = null;
      showMenu = itemsTemporada;
    }
    if (this.state.sectionAdicional) {
      showMenu = null;
      showMenu = itemsAdicional;
    }

    // console.log("Carro", carrito);

    let ordenes = [];
    let jsonObject = carrito.map(JSON.stringify);

    // console.log(jsonObject);
    let uniqueSet = new Set(jsonObject);
    let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    // console.log(uniqueArray);

    uniqueArray.forEach(el => {
      ordenes.push(<Order handlePrecioPiezas={this.handlePrecioPiezas} handleDelete={this.handleDelete} handleAdd={this.handleAdd}
                          handleLess={this.handleLess}
                          imagen={el.imagen}
                          titulo={el.titulo} precio={el.precio}/>);
    });

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
              <div className="menu" id="menu">
                <div className="phrase-menu">
                  <span>Nuestra especialidad a tu paladar</span>
                </div>
                <div className="container-menu">
                  <div className="title-item">
                    <button id="clasico" className="btn btn-large" onClick={e => this.showSection(e)}>Paquete Clásico
                    </button>
                    <button id="temporada" className="btn btn-large" onClick={e => this.showSection(e)}>Paquete de
                      Temporada
                    </button>
                    <button id="adicionales" className="btn btn-large" onClick={e => this.showSection(e)}>Adicionales
                    </button>
                  </div>
                  <div className="item">
                    {showMenu}
                  </div>
                </div>
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
                  pathname: "/info-persona", state: {
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
        <Footer/>
      </>
    );
  }
}

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piezas: 1, imagen: this.props.imagen, precio: this.props.precio, titulo: this.props.titulo
    }
  }

  handleAddOrder = () => {
    this.setState({piezas: this.state.piezas + 1});
    this.props.handleAdd(this.state.precio);
    console.log((this.state.piezas + 1) * this.state.precio);
    let tempObject = {piezas:(this.state.piezas + 1), precio: this.state.precio, titulo: this.state.titulo, imagen: this.state.imagen }
    this.props.handlePrecioPiezas(tempObject);
  };

  handleLessOrder = () => {
    if (this.state.piezas > 0) {
      this.setState({piezas: this.state.piezas - 1});
      this.props.handleLess(this.state.precio);
    }
    let tempObject = {piezas:(this.state.piezas - 1), precio: this.state.precio, titulo: this.state.titulo, imagen: this.state.imagen }
    this.props.handlePrecioPiezas(tempObject);
  };

  handleDeleteOrder = () => {
    this.props.handleDelete(this.state);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="container-order">
        <div className="order-container">
          <div className="image-order">
            <img src={this.state.imagen} alt="order"/>
          </div>
          <div className="info-order">
            <div className="first">
              <div className="title-order">
                <span>{this.state.piezas} paquete(s) - </span>
                <span>{this.state.titulo}</span>
              </div>
              <div className="icons-order">
                <div onClick={() => {
                  this.handleLessOrder()
                }} className="less">
                  <img src={less} alt=""/>
                </div>
                <div onClick={() => {
                  this.handleAddOrder()
                }} className="plus">
                  <img src={plus} alt=""/>
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
          <div onClick={() => {
            this.handleDeleteOrder()
          }} className="trash">
            <img src={trash} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;