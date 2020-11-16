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

const itemFood = (titulo, imagen, precio) => {
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
          <a className="waves-effect waves-light btn">Agregar a carrito</a>
        </div>
      </div>
    </>
  )
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
      console.log('didmount',snapshot);
    });
  }




  render() {
    let { snapshot } = this.state
    console.log('render',snapshot);

    const itemsComidita = []; 
    if(snapshot){
      snapshot.forEach(doc => {
        let info = doc.data();
        console.log(info);
        itemsComidita.push(itemFood(info.titulo, info.imagen, info.precio)) ;
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
            <div className="title-item">
              <span className="">Desayuno</span>
              <span className="">Comida</span>
              <span className="">Cena</span>
              <span className="">Postres</span>
            </div>
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