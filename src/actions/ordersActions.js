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
  console.log("order", order);
  fetch("https://huddolapi-next.herokuapp.com/v1/challenge/", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    mode: "no-cors",
    data: {
      orderData: order
    },
    body: JSON.stringify(order)
  })
    .then(order => {
      console.log("res", order);
      dispatch({
        type: CREATE_ORDER,
        payload: order
      });
    })
    .catch(error => {
      console.log("CREATE ORDER error", error);
    });
};

export const listOrders = order => dispatch => {
  fetch("https://huddolapi-next.herokuapp.com/v1/challenge/", {
    method: "get",
    headers: {
      "content-type": "application/json"
    },
    mode: "no-cors",
    data: {
      orderData: order
    },
    body: JSON.stringify(order)
  })
    .then(res => {
      console.log("res", res.type);
      dispatch({
        type: LIST_ORDERS,
        payload: order
      });
    })
    .catch(error => {
      console.log("LIST RESTAURANTS error", error);
    });
};
