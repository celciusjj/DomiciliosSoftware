import {
  OBTENER_ORDENES,
  OBTENER_ORDENES_TODAS,
  EDITAR_ESTADO_PEDIDO,
  OBTENER_HISTORIAL
} from "./types";
import Axios from "axios";

const url = "http://localhost:4000"; //"https://backend-sendpa.herokuapp.com";

/**
 * This function gets the orders from a user
 * @param {String} userId
 */
export const getOrders = userId => async dyspatch => {
  const userOrdersData = await Axios.get(`${url}/order/${userId}`);

  dyspatch({
    type: OBTENER_ORDENES,
    payload: userOrdersData.data.data
  });
};

/**
 * This function gets all orders from that have been registered
 */
export const getAllOrders = () => async dyspatch => {
  const ordersData = await Axios.get(`${url}/orders`);

  dyspatch({
    type: OBTENER_ORDENES_TODAS,
    payload: ordersData.data.data
  });
};

/**
 * Given an object this function adds it to the data base.
 * @param {Object} order
 */
export const addOrder = order => async dyspatch => {
  const respuesta = await Axios.post(`${url}/order/add`, order);

  dyspatch({
    type: "REALIZAR_PEDIDO",
    payload: respuesta
  });
};

/**
 * Given an id this function removes an order from the database
 * @param {String} id
 */
export const removeOrder = id => async dyspatch => {
  const respuesta = Axios.delete(`${url}/order/${id}`);
  dyspatch({
    type: "ELIMINAR_PEDIDO",
    payload: respuesta
  });
};

/**
 * This function updates the state of a order given this parameters:
 * @param {Int} orderId
 * @param {Object} newState
 */
export const updateOrderState = (orderId, newState) => async dyspatch => {
  const respuesta = Axios.put(`${url}/order/${orderId}`, newState);
  dyspatch({
    type: EDITAR_ESTADO_PEDIDO,
    payload: respuesta
  });
};

/**
 * This function retrieves the data who has been delivered
 */
export const getOrdersDelivered = () => async dyspatch => {
  const respuesta = await Axios.get(`${url}/ordersDelivered`);
  dyspatch({
    type: OBTENER_HISTORIAL,
    payload: respuesta.data.data
  });
};
