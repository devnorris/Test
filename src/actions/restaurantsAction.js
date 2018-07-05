import { LIST_RESTAURANTS } from "./types";
import axios from "axios";

// making axios call to API to get the json data
export const listRestaurants = () => dispatch => {
  axios
    .get("https://huddolapi-next.herokuapp.com/v1/challenge")
    .then(res => {
      dispatch({
        type: LIST_RESTAURANTS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log("LIST RESTAURANTS error", error);
    });
};
