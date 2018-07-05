import React, { Component } from "react";
import { connect } from "react-redux";
import { listOrders } from "../actions/ordersActions";
import { Table, Button } from "reactstrap";

class OrdersPage extends Component {
  componentDidMount() {
    this.props.listOrders();
  }

  // Was unable to get data back to populate orderslist
  // Hard coded for now but am looking into it
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Orders</h1>
        <Table striped className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>total</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>$45</td>
              <td>
                <Button>edit</Button>
              </td>
              <td>
                <Button color="danger">delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>$30</td>
              <td>
                <Button>edit</Button>
              </td>
              <td>
                <Button color="danger">delete</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
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
