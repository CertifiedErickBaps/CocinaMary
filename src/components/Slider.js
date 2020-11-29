import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.scss";

import {firestore} from '../firebase';
import {NavHashLink} from "react-router-hash-link";


const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
};

class ItemSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let imagen = this.props.imagen;
    let titulo = this.props.titulo;
    let descripcion = this.props.descripcion;
    let piezas = this.props.piezas;

    return (
      <>
        <div style={{width: 300}} className="container-slider">
          <div className="food-opacity"/>
          <div className="food">
            <img src={imagen} alt="Food"/>
          </div>
          <div className="information-slider">
            <span className="titulo">{titulo}</span>
            <span className="piezas">{piezas}</span>
            <span className="descripcion">{descripcion}</span>
          </div>
        </div>
      </>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionClasico: true,
      sectionTemporada: false,
      sectionAdicional: false
    }
  }

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

  componentDidMount() {
    firestore.collection('paquetes').get().then(snapshot => {
      let itemsClasico = [];
      let itemsTemporada = [];
      let itemsAdicional = [];
      snapshot.forEach(doc => {
        let info = doc.data();
        console.log(info);
        let item = <ItemSlider piezas={info.piezas} titulo={info.titulo} imagen={info.imagen}
                               descripcion={info.descripcion}/>;
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

  render() {
    let {itemsClasico, itemsTemporada, itemsAdicional} = this.state;
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
    // console.log(itemsAdicional);

    return (<>
      <div className="slider" id="slider">
        <div className="phrase-menu2">
          <span>Nuestros paquetes</span>
        </div>
        <div className="container-menu">
          <div className="title-slider">
            <span id="clasico" className="" onClick={e => this.showSection(e)}>Paquetes Clásicos</span>
            <span id="temporada" className="" onClick={e => this.showSection(e)}>Paquetes de Temporada</span>
            <span id="adicionales" className="" onClick={e => this.showSection(e)}>Adicionales</span>
          </div>
          <div className="slider">
            <Slider {...settings}>
              {showMenu}
            </Slider>
          </div>
          <div className="btn-menu right-align">
            <NavHashLink smooth className="waves-effect waves-light btn-large" to="/shop"
            >Ordenar ahora</NavHashLink>
          </div>
        </div>
      </div>
    </>)
  }
}

export default Menu;