import {
  SAVE_AMOUNT,
  GET_TOTAL,
  CREATE_ORDER,
  LIST_ORDERS,
  EDIT_ORDER,
  DELETE_ORDER
} from "./types";
import axios from "axios";

export const saveAmount = amount => dispatch => {
  dispatch({
    type: SAVE_AMOUNT,
    payload: amount
  });
};

export const getTotal = total => dispatch => {
  dispatch({
    type: GET_TOTAL,
    payload: total
  });
};

export const createOrder = order => dispatch => {
  fetch("https://huddolapi-next.herokuapp.com/v1/challenge/", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    mode: "no-cors",
    data: {
      orderData: order
    }
  })
    .then(order => {
      dispatch({
        type: CREATE_ORDER,
        payload: order
      });
    })
    .catch(error => {
      console.log("CREATE ORDER error", error);
    });
};
