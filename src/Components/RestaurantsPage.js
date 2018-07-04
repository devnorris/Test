import React from "react";
import {
  Table,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { connect } from "react-redux";
import { listRestaurants } from "../actions/restaurantsAction";

class RestaurantsPage extends React.Component {
  componentDidMount() {
    this.props.listRestaurants();
  }

  render() {
    const restaurantList = this.props.restaurants.map(restaurant => {
      return (
        <CardDeck>
          <Card className="card">
            <CardImg
              top="50%"
              width="50%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
              alt="Card image cap"
            />
            <CardBody key={restaurant.id}>
              <CardTitle>{restaurant.name}</CardTitle>
              <CardSubtitle>Menu</CardSubtitle>
              <CardText>
                <Table>
                  <tbody>
                    <tr>
                      <td>{restaurant.menu[0].name}</td>
                      <td>{restaurant.menu[0].price}</td>
                      <td>amount</td>
                    </tr>
                    <tr>
                      <td>{restaurant.menu[1].name}</td>
                      <td>{restaurant.menu[1].price}</td>
                      <td>amount</td>
                    </tr>
                    <tr>
                      <td>{restaurant.menu[2].name}</td>
                      <td>{restaurant.menu[2].price}</td>
                      <td>amount</td>
                    </tr>
                    <tr>
                      <td>{restaurant.menu[3].name}</td>
                      <td>{restaurant.menu[3].price}</td>
                      <td>amount</td>
                    </tr>
                  </tbody>
                </Table>
              </CardText>
              total
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardDeck>
      );
    });

    return <div className="restaurantList">{restaurantList}</div>;
  }
}

// getting state from redux and maping to props so we have access to it
const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants
});

export default connect(
  mapStateToProps,
  { listRestaurants }
)(RestaurantsPage);
