import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import shop from "../images/shop.svg";
const Navbar = () => {
  return (
    <>

      <div className="navbar-fixed">
        <div className="opacity-fixed"/>
        <nav>
          <div className="nav-wrapper">
            <div className="flexbox-container">
              <img src={logo} alt="Logo Cocina Mary"/>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavHashLink smooth to="/#home" activeStyle={{color: '#ED6229'}}>Inicio</NavHashLink></li>
                <li><NavHashLink smooth to="/#acerca" activeStyle={{color: '#ED6229'}}>Acerca de cocina
                  Mary</NavHashLink></li>
                <li><NavHashLink smooth to="/#menu" activeStyle={{color: '#ED6229'}}>Menu</NavHashLink></li>
                <li><NavHashLink smooth to="/#contacto" activeStyle={{color: '#ED6229'}}>Donde encontrarnos</NavHashLink>
                </li>
                <li>
                  <Link to="/shop">
                    <img className="shop-icon" src={shop} alt=""/>
                  </Link>
                </li>
                {/*<li><NavHashLink smooth to="/#footer" activeStyle={{color: '#ED6229'}}>*/}
                {/*  <img className="shop" src={shop} alt=""/>*/}
                {/*</NavHashLink></li>*/}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;