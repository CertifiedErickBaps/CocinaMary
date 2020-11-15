import React from 'react';
import shopBackground from "../images/shop.jpg";
import {useForm} from "react-hook-form";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import user from "../images/user.svg";
import creditcard from "../images/creditcard.svg";
import phone from "../images/phone.svg";
import location from "../images/location.svg";
import email from "../images/mail.svg";

const PersonalData = () => {
  const {register, handleSubmit, watch, errors} = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));
  return (
    <>
      <div className="data-main">
        <div className="background-image">
          <img src={shopBackground} alt="background"/>
        </div>
        <div className="opacity"/>
        <div className="data">
          <Navbar/>
          <div className="data-price">
            <div className="container-price">
              <span>$1200.00</span>
              <span>MXN</span>
            </div>
          </div>
          <div className="data-information">
            <div className="data-title">
              <span>Datos personales</span>
            </div>
            <div className="data-inputs-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="data-inputs">
                  <div className="entry">
                    <img className="prefix" src={creditcard} alt=""/>
                    <input placeholder="Credit Card" name="creditcard" ref={register({required: true})}/>
                    {errors.creditcard && <span>Credit Card is required</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={user} alt=""/>
                    <input placeholder="Nombre Completo" name="nombre" ref={register({required: true})}/>
                    {errors.nombre && <span>Nombre is required</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={email} alt=""/>
                    <input placeholder="Correo electonico" name="email" ref={register({required: true})}/>
                    {errors.email && <span>Email is required</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={phone} alt=""/>
                    <input placeholder="Telefono" name="phone" ref={register({required: true})}/>
                    {errors.phone && <span>Phone is required</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={location} alt=""/>
                    <input placeholder="Ubicación" name="location" ref={register({required: true})}/>
                    {errors.location && <span>Location is required</span>}
                  </div>
                </div>
                <div className="contacto-btn-container">
                  <div className="personal-data-btn">
                    <input value="Pagar con TDC o TDD" className="waves-effect waves-light btn-large" type="submit"/>
                  </div>
                  <span>O si lo prefieres</span>
                  <div className="personal-data-btn">
                    <input value="Pagar con efectivo" className="waves-effect waves-light btn-large" type="submit"/>
                  </div>
                  <span>
                      No te preocupes nosotros contaremos con cambio en efectivo
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="data-phrase">
            <span>No te preocupes nosotros contaremos con cambio en efectivo</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PersonalData;