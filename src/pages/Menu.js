import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

import itemMenu from "../images/menu.jpg";
import iconRate from "../images/rate.svg";

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

const itemFood = () => {
  return (
    <>
      <div style={{width: 300}} className="container-item">
        <div className="food-opacity"/>
        <div className="food">
          <img src={itemMenu} alt="Food"/>
        </div>

        <div className="information-item">
          <span>$120</span>
          <img className="rate" src={iconRate} alt="Rate"/>
          <span>Chiles en nogada</span>
          <a className="waves-effect waves-light btn" href="">Agregar a carrito</a>
        </div>
      </div>
    </>
  )
};

const Menu = () => {
  return (
    <>
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
              {itemFood()}
              {itemFood()}
              {itemFood()}
              {itemFood()}
              {itemFood()}
              {itemFood()}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;