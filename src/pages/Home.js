import React from 'react';
import NavBar from "../components/NavBar";
import {NavHashLink} from 'react-router-hash-link';
import '../styles/App.scss';
import menuImage from "../images/home.jpg";
//Icons
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import Acerca from "../components/Acerca";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    // console.log('Carrito', this.state.carrito);
    return (
      <>
        <div className="main">
          <div className="background-image">
            <img src={menuImage} alt="background"/>
          </div>
          <div className="opacity"/>
          <div className="home" id="home">
            <NavBar carrito={this.state.carrito}/>
            <div className="container-menu">
              <div className="title-CM">
                <span>
                  Bienvenido a Cocina Mary
              </span>
              </div>
              <div className="info-container-home">
                <div className="info-menu">
                  <div className="title-1">
                    <span>Si, nosotros hacemos eso, que tu comida este lista para cualquier ocasion</span>
                  </div>
                  <div className="title-2"><span>¿Quieres empezar a ordenar?</span></div>
                  <NavHashLink smooth className="waves-effect waves-light btn-large" to="/shop"
                  >Ordenar ahora</NavHashLink>
                </div>
                <div className="redes-sociales">
                  <div className="facebook">
                    <span>262k</span>
                    <img src={facebook} alt="Facebook"/>
                  </div>
                  <div className="instagram">
                    <span>16k</span>
                    <img src={instagram} alt="Instagram"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider/>
        <Acerca/>
        <Contacto/>
        <Footer/>
      </>
    );
  };
}


export default Home;