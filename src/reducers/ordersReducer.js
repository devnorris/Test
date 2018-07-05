import {
  SAVE_AMOUNT,
  GET_TOTAL,
  CREATE_ORDER,
  LIST_ORDERS,
  EDIT_ORDER,
  DELETE_ORDER
} from "../actions/types";

const initialState = {
  orders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };
    case GET_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
}
