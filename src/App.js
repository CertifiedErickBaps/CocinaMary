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
      <Route exact path="/agregado" render={routeProps => (<OrderSended {...routeProps} />)} />
      <Route exact path="/info-persona" render={routeProps => (<PersonalData {...routeProps} />)} />
      <Route exact path="/calendario" render={routeProps => (<ScheduleCalendar {...routeProps} />)} />
      <Route exact path="/shop" render={routeProps => (<Shop {...routeProps} />)} />
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
}

export default App;
