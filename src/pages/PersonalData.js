import React from 'react';
import shopBackground from "../images/shop.jpg";
import { useForm } from "react-hook-form";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import user from "../images/user.svg";
import creditcard from "../images/creditcard.svg";
import phone from "../images/phone.svg";
import location from "../images/location.svg";
import email from "../images/mail.svg";
import { Link } from "react-router-dom";
import { firestore } from '../firebase';

import { withRouter } from "react-router";

const PersonalData = (props) => {
  let carrito = props.location.state.carrito;
  let total = props.location.state.total;
  let fecha = props.location.state.fecha;


  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    let info = {
      carrito: carrito,
      total: total,
      fecha: fecha,
      contacto: data
    }

    firestore.collection('ordenes').add(info).then(
      props.history.push({ pathname: '/agregado', state: { data: info } })

    ).catch((e) => {
      console.log(e);
    })
  };

  return (
    <>
      <div className="data-main">
        <div className="background-image">
          <img src={shopBackground} alt="background" />
        </div>
        <div className="opacity" />
        <div className="data">
          <Navbar />
          <div className="data-price">
            <div className="container-price">
              <span>$ {total} </span>
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
                    <img className="prefix" src={creditcard} alt="" />
                    <input placeholder="Tarjeta de crédito" name="creditcard" ref={register({ required: true })} />
                    {errors.creditcard && <span>Tarjeta de crédito es requerida</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={user} alt="" />
                    <input placeholder="Nombre Completo" name="nombre" ref={register({ required: true })} />
                    {errors.nombre && <span>Nombre es requerido</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={email} alt="" />
                    <input placeholder="Correo electrónico" name="email" ref={register({ required: true })} />
                    {errors.email && <span>Email es requerido</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={phone} alt="" />
                    <input placeholder="Teléfono" name="phone" ref={register({ required: true })} />
                    {errors.phone && <span>Teléfono es requerido</span>}
                  </div>
                  <div className="entry">
                    <img className="prefix" src={location} alt="" />
                    <input placeholder="Ubicación" name="location" ref={register({ required: true })} />
                    {errors.location && <span>Ubicación es requerida</span>}
                  </div>
                </div>
                <div className="contacto-btn-container">
                  <div className="personal-data-btn">
                    <input value="Pagar" className="waves-effect waves-light btn-large" type="submit" />
                    <Link to="/agregado" >



                    </Link>
                  </div>


                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(PersonalData);