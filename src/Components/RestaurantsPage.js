import React from "react";
import {
  Table,
  Form,
  Input,
  Label,
  FormGroup,
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";
import { listRestaurants } from "../actions/restaurantsAction";
import { saveAmount } from "../actions/ordersActions";
import { getTotal } from "../actions/ordersActions";
import { createOrder } from "../actions/ordersActions";

class RestaurantsPage extends React.Component {
  componentDidMount() {
    this.props.listRestaurants();
  }

  handleAmount = e => {
    e.preventDefault();
    const amount = e.target.value;
    this.props.saveAmount(amount);
  };

  handleTotal = e => {
    e.preventDefault();
    const total = [];
    total.push(e.target.value);
    this.props.getTotal(total);
  };

  onSubmit = e => {
    e.preventDefault();
    let order = {
      total: this.props.orders.total,
      orderNum: Math.floor((1 + Math.random()) * 0x1000000)
        .toString(16)
        .substring(1)
    };
    this.props.createOrder(order);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <CardDeck className="restaurantList">
              {this.props.restaurants.map(restaurant => {
                return (
                  <Card className="card">
                    <CardBody key={restaurant.id}>
                      <CardTitle>{restaurant.name}</CardTitle>
                      <CardSubtitle>Menu</CardSubtitle>
                      <CardText>
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Cost</th>
                            </tr>
                          </thead>
                          {restaurant.menu.map((item, index) => {
                            return (
                              <tbody>
                                <tr>
                                  <td>{item.name}</td>
                                  <td>${item.price}</td>
                                  <td>
                                    <Label for="exampleSelect" />
                                    <Input
                                      type="select"
                                      name="select"
                                      id="exampleSelect"
                                      onChange={this.handleAmount}
                                    >
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                    </Input>
                                  </td>
                                  {this.props.orders.amount ? (
                                    <td>
                                      {item.price * this.props.orders.amount}
                                      <button
                                        type="button"
                                        value={
                                          item.price * this.props.orders.amount
                                        }
                                        onClick={this.handleTotal}
                                      >
                                        Add
                                      </button>
                                    </td>
                                  ) : (
                                    <td>0</td>
                                  )}
                                </tr>
                              </tbody>
                            );
                          })}
                        </Table>
                      </CardText>
                      {this.props.orders.total ? (
                        <p>
                          Your Total: $
                          {this.props.orders.total.reduce((a, b) => a + b)}
                          <Button type="Submit">Submit Order</Button>
                          <a href="/orders">Order List</a>
                        </p>
                      ) : (
                        <p>Your Total: $0</p>
                      )}
                    </CardBody>
                  </Card>
                );
              })}
            </CardDeck>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

// getting state from redux and maping to props so we have access to it
const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants,
  orders: state.orders
});

export default connect(
  mapStateToProps,
  { listRestaurants, saveAmount, getTotal, createOrder }
)(RestaurantsPage);
