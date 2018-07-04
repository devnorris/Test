import { LIST_RESTAURANTS } from "./types";
import axios from "axios";

export function listRestaurants() {
  axios.get("https://huddolapi-next.herokuapp.com/v1/challenge");
}
