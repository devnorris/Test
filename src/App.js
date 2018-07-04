import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import RestaurantsPage from "./Components/RestaurantsPage";
import OrdersPage from "./Components/OrdersPage";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <OrdersPage />
          <RestaurantsPage />
        </div>
      </Provider>
    );
  }
}

export default App;
