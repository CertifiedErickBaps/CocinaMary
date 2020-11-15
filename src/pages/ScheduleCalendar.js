import React from 'react';
import menuImage from "../images/home.jpg";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";

const ScheduleCalendar = () => {
  return (
    <>
      <div className="calendar-main">
        <div className="background-image">
          <img src={menuImage} alt="background"/>
        </div>
        <div className="opacity"/>
        <Navbar/>
        <div className="calendar">
          <div className="calendar-container">
            <Schedule/>
          </div>

          <div className="calendar-btn">
            <div className="btn-calendar">
              <a className="waves-effect waves-light btn-large" href="">Atras</a>
            </div>
            <div className="btn-calendar">
              <a className="waves-effect waves-light btn-large" href="">Siguiente</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ScheduleCalendar;