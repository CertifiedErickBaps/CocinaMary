import React from 'react';
import {useForm} from "react-hook-form";
import map from "../images/map.png";

const Contacto = () => {
  const {register, handleSubmit, watch, errors} = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));

  return (
    <>
      <div className="contacto" id="contacto">
        <div className="title-contacto">
          <span>Contacto</span>
        </div>
        <div className="container-contacto">
          <div className="maps">
            <img src={map} alt="Ubicacion"/>
            <span>Telefono: 01 (800) 123 456 789</span>
            <span>Ubicación: Tec CEM, Hacienda de la Luz, Ciudad López Mateos, Estado de México</span>
          </div>
          <div className="form-contacto">
            <span className="title-form-contacto">¿Necesitas contactarte con nosotros?</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="entry">
                <label>Nombre</label>
                <input name="nombre" ref={register({required: true})}/>
                {errors.nombre && <span>Email is required</span>}
              </div>
              <div className="entry">
                <label>Correo</label>
                <input name="email" ref={register({required: true})}/>
                {errors.email && <span>Email is required</span>}
              </div>
              <div className="entry">
                <label>Telefono</label>
                <input name="phone" ref={register({required: true})}/>
                {errors.phone && <span>Phone is required</span>}
              </div>
              <div className="entry">
                <label>Comentarios</label>
                <input name="comentarios" ref={register}/>
                <div className="contacto-btn-container">
                  <input className="contacto-btn waves-effect waves-light btn" type="submit"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contacto;