import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

import itemMenu from "../images/menu.jpg";
import iconRate from "../images/rate.svg";
import { firestore } from '../firebase';

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
};

class ItemFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    let imagen = this.props.imagen;
    let precio = this.props.precio;
    let titulo = this.props.titulo;

    return (
      <>
        <div style={{ width: 300 }} className="container-item">
          <div className="food-opacity" />
          <div className="food">
            <img src={imagen} alt="Food" />
          </div>

          <div className="information-item">
            <span>$ {precio} MXN </span>
            <img className="rate" src={iconRate} alt="Rate" />
            <span>{titulo}</span>
            <button onClick={() => this.props.handleCarrito( { titulo: titulo, precio: precio, imagen: imagen })} className="waves-effect waves-light btn">Agregar a carrito</button>
          </div>
        </div>
      </>
    )
  }
};

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  async componentDidMount() {
    await firestore.collection('paquetes').get().then(snapshot => {
      this.setState({ snapshot });
    });
  }




  render() {
    let { snapshot } = this.state

    const itemsComidita = [];
    if (snapshot) {
      snapshot.forEach(doc => {
        let info = doc.data();
        itemsComidita.push(<ItemFood titulo={info.titulo} precio={info.precio} imagen={info.imagen} handleCarrito={this.props.handleCarrito} />);
      })
      return (<>
        <div className="menu" id="menu">
          <div className="phrase-menu">
            <span>Ordena ahora en linea</span>
          </div>
          <div className="phrase-menu2">
            <span>Nuestra especialidad a tu paladar</span>
          </div>
          <div className="container-menu">

            <div className="item">
              <Slider {...settings}>
                {itemsComidita}

              </Slider>
            </div>
          </div>
        </div>
      </>)
    } else {

      return (<>
        <div className="menu" id="menu">
          <div className="phrase-menu">
            <span>Cargando...</span>
          </div>

        </div>
      </>)


    }


  };
};

export default Menu;