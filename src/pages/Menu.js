import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


import iconRate from "../images/rate.svg";
import {firestore} from '../firebase';
import SweetAlert from "sweetalert";

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
    this.state = {};
  }


  render() {

    let imagen = this.props.imagen;
    let precio = this.props.precio;
    let titulo = this.props.titulo;

    return (
      <>
        <div style={{width: 300}} className="container-item">
          <div className="food-opacity"/>
          <div className="food">
            <img src={imagen} alt="Food"/>
          </div>

          <div className="information-item">
            <span>$ {precio} MXN </span>
            <img className="rate" src={iconRate} alt="Rate"/>
            <span>{titulo}</span>
            <button onClick={() => this.props.handleCarrito({titulo: titulo, precio: precio, imagen: imagen})}
                    className="waves-effect waves-light btn">Agregar a carrito
            </button>
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
      sectionClasico: true,
      sectionTemporada: false,
      sectionAdicional: false
    }
  }

  showSection = (name) => {
    console.log(name.target.id);
    switch (name.target.id) {
      case "clasico":
        this.setState({sectionClasico: !this.state.sectionClasico});
        break;
      case "temporada":
        this.setState({sectionTemporada: !this.state.sectionTemporada});
        break;
      case "adicionales":
        this.setState({sectionAdicional: !this.state.sectionAdicional});
        break;
      default:
        return null;
    }
  };

  componentDidMount() {
    firestore.collection('paquetes').get().then(snapshot => {
      let itemsComidita = [];
      snapshot.forEach(doc => {
        let info = doc.data();
        itemsComidita.push(<ItemFood titulo={info.titulo} precio={info.precio} imagen={info.imagen}
                                     handleCarrito={this.props.handleCarrito}/>);
      });
      this.setState({itemsComidita});
    });
  }

  render() {
    let {itemsComidita} = this.state;

    // let menu;
    // if (sectionClasico) {
    //   menu = <div>Holaaa</div>;
    // } else if (sectionTemporada) {
    //   menu = itemsComidita;
    // } else if (sectionAdicional) {
    //   menu = itemsComidita;
    // }


    // console.log(this.state.itemsComidita);

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
            <span id="clasico" className="" onClick={e => this.showSection(e)}>Menú Clásico</span>
            <span id="temporada" className="" onClick={e => this.showSection(e)}>Menú de Temporada</span>
            <span id="adicionales" className="" onClick={e => this.showSection(e)}>Adicionales</span>
          </div>
          {(this.state.sectionClasico) && (this.state.sectionTemporada === false) && (this.state.sectionAdicional === false) && (
            <div className="item">
              <Slider {...settings}>
                {itemsComidita}
              </Slider>
            </div>
          )}
          {(this.state.sectionTemporada) && (this.state.sectionClasico === false) && (this.state.sectionAdicional === false) && (
            <div className="item">
              <Slider {...settings}>
                {itemsComidita}
              </Slider>
            </div>
          )}
          {(this.state.sectionAdicional) && (this.state.sectionTemporada === false) && (this.state.sectionClasico === false) &&(
            <div className="item">
              <Slider {...settings}>
                {itemsComidita}
              </Slider>
            </div>
          )}
          {/*<div className="item">*/}
          {/*  <Slider {...settings}>*/}
          {/*    {itemsComidita}*/}
          {/*  </Slider>*/}
          {/*</div>*/}

        </div>
      </div>
    </>)
  }
}

export default Menu;