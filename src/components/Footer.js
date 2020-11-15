import React from 'react';
import logo from "../images/logo.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="contact">
          <div className="title-contact">
            <p>
              <span>¿Quieres ordernar algo? Mandanos un mensaje y nos pondemos en contacto.</span>
            </p>
          </div>
          <div className="input-contact">
            <input placeholder="Leave your email" type="email" className="validate"/>
          </div>
          <div className="button-container">
            <a className="btn waves-effect waves-light">Enviar</a>
          </div>
        </div>
        <div className="logo-footer">
          <img src={logo} alt="Logo Face Mask"/>
        </div>
        <div className="other-socialmedia">
          <div className="social-media">
            <img src={facebook} alt="Github repository"/>
          </div>
          <div className="social-media">
            <img src={instagram} alt="Github repository"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;