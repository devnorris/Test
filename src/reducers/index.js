import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import restaurantsReducer from "./restaurantsReducer";

export default combineReducers({
  restaurants: restaurantsReducer,
  orders: ordersReducer
});
