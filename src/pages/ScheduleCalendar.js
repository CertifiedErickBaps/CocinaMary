import React from 'react';
import menuImage from "../images/home.jpg";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";
import DateTimePicker from 'react-datetime-picker'

import { Link } from "react-router-dom";

const ScheduleCalendar = () => {
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
           <DateTimePicker/>
          </div>

          <div className="calendar-btn">
            <div className="btn-calendar">
              <Link className="checkout waves-effect waves-light btn-large" to="/shop">
                Atras
              </Link>

            </div>
            <div className="btn-calendar">
              <Link className="checkout waves-effect waves-light btn-large" to="/info-persona">
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