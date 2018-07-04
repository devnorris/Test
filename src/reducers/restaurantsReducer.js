import { LIST_RESTAURANTS } from "../actions/types";

const initialState = {
  restaurants: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
