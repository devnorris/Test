import { LIST_RESTAURANTS } from "../actions/types";

const initialState = {
  restaurants: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload
      };
    default:
      return state;
  }
}
