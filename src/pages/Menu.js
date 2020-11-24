import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import iconRate from "../images/rate.svg";
import {firestore} from '../firebase';

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
        // console.log(info)
        switch (info.tipo) {
          case("Clasico"):
            itemsClasico.push(<ItemFood titulo={info.titulo} precio={info.precio} imagen={info.imagen}
                                        handleCarrito={this.props.handleCarrito}/>);
            break;
          case("Temporada"):
            itemsTemporada.push(<ItemFood titulo={info.titulo} precio={info.precio} imagen={info.imagen}
                                          handleCarrito={this.props.handleCarrito}/>);
            break;
          case("Adicional"):
            itemsAdicional.push(<ItemFood titulo={info.titulo} precio={info.precio} imagen={info.imagen}
                                          handleCarrito={this.props.handleCarrito}/>);
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
    console.log(this.state.sectionClasico);
    console.log(this.state.sectionTemporada);
    console.log(this.state.sectionAdicional);
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
    console.log(showMenu);

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
          <div className="item">
            {showMenu}
          </div>
          {/*{(this.state.sectionClasico) && (this.state.sectionTemporada === false) && (this.state.sectionAdicional === false) && (*/}
          {/*  <div className="item">*/}
          {/*    {itemsClasico}*/}
          {/*  </div>*/}
          {/*)}*/}
          {/*{(this.state.sectionTemporada) && (this.state.sectionClasico === false) && (this.state.sectionAdicional === false) && (*/}
          {/*  <div className="item">*/}
          {/*    {itemsTemporada}*/}
          {/*  </div>*/}
          {/*)}*/}
          {/*{(this.state.sectionAdicional) && (this.state.sectionTemporada === false) && (this.state.sectionClasico === false) && (*/}
          {/*  <div className="item">*/}
          {/*    {itemsAdicional}*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      </div>
    </>)
  }
}

export default Menu;