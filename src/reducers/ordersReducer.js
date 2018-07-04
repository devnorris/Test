import {
  ADD_ORDER,
  LIST_ORDERS,
  EDIT_ORDER,
  DELETE_ORDER
} from "../actions/types";

const initialState = {
  orders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
