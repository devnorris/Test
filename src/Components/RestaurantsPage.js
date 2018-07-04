import React from "react";
import { connect } from "react-redux";
import { listRestaurants } from "../actions/restaurantsAction";

class RestaurantsPage extends React.Component {
  componentDidMount() {
    this.props.listRestaurants();
  }

  render() {
    const restaurantList = this.props.restaurants.map(restaurant => {
      return (
        <div key={restaurant.id}>
          <h1>{restaurant.name}</h1>
        </div>
      );
    });

    return <div className="restuarantList">{restaurantList}</div>;
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
