import React, { Component } from "react";
import Router from "./Routes";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = props => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">
      <h2>Feet Up Delivery</h2>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/orders">
          <h3>Your Orders</h3>
        </NavLink>
      </NavItem>
      <br />
      <NavItem>
        <NavLink href="/restaurants">
          <h3>Restaurants</h3>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
