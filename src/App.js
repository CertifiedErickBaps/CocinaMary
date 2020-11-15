import React from "react";
import {Route} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import Shop from "./components/Shop";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import OrderSended from "./pages/OrderSended";
import PersonalData from "./pages/PersonalData";
import Schedule from "./components/Schedule";
import ScheduleCalendar from "./pages/ScheduleCalendar";


function App() {
  return (
    <>
      <Route exact path="/shop">
        <ScheduleCalendar/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </>
  );
}

export default App;
