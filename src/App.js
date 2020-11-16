import React from "react";
import { Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import Home from "./pages/Home";
import Shop from "./components/Shop";
import PersonalData from "./pages/PersonalData";
import ScheduleCalendar from "./pages/ScheduleCalendar";
import OrderSended from "./pages/OrderSended";



function App() {
  return (
    <>
      <Route exact path="/agregado">
        <OrderSended />
      </Route>
      <Route exact path="/info-persona">
        <PersonalData />
      </Route>
      <Route exact path="/calendario">
        <ScheduleCalendar />
      </Route>
      <Route exact path="/shop" render={routeProps => (
        <Shop {...routeProps} />
      )} >
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
}

export default App;
