import React, { Component } from "react";
import { connect } from "react-redux";
import { listOrders } from "../actions/ordersActions";

class OrdersPage extends Component {
  componentDidMount() {
    this.props.listOrders();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Orders</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants,
  orders: state.orders
});

export default connect(
  mapStateToProps,
  { listOrders }
)(OrdersPage);
