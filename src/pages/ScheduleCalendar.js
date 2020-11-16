import React, { useState } from 'react';
import menuImage from "../images/home.jpg";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import DateTimePicker from 'react-datetime-picker'

import { Link } from "react-router-dom";

const ScheduleCalendar = (props) => {

  let carrito = props.location.state.carrito;
  let total = props.location.state.total;
  const [value, onChange] = useState(new Date());

  console.log('Calendar', total);
  return (
    <>
      <div className="calendar-main">
        <div className="background-image">
          <img src={menuImage} alt="background" />
        </div>
        <div className="opacity" />
        <Navbar />
        <div className="calendar">
          <div className="calendar-container">
            {/*  <Schedule /> */}
            <DateTimePicker onChange={onChange}
              value={value} />
          </div>

          <div className="calendar-btn">
            <div className="btn-calendar">
              <Link className="checkout waves-effect waves-light btn-large" to="/shop">
                Atras
              </Link>

            </div>
            <div className="btn-calendar">
              <Link className="checkout waves-effect waves-light btn-large" to={{
                pathname: "/info-persona", state: {
                  carrito:carrito,
                  total: total,
                  fecha:value,
                }
              }}>
                Siguente
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ScheduleCalendar;