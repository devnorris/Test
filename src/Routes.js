import React from "react";
import { Switch, Route } from "react-router-dom";

import RestaurantsPage from "./Components/RestaurantsPage";
import OrdersPage from "./Components/OrdersPage";
import HomePage from "./Components/HomePage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/restaurants" component={RestaurantsPage} />
    <Route path="/orders" component={OrdersPage} />
  </Switch>
);

export default Router;
