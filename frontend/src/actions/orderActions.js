import { OBTENER_ORDENES } from "./types";
import Axios from "axios";

export const getOrders = () => async dyspatch => {
  const ordersData = await Axios.get("http://localhost:4000/orders");

  dyspatch({
    type: OBTENER_ORDENES,
    payload: ordersData.data.data
  });
};

export const addOrder = order => async dyspatch => {
  const respuesta = await Axios.post("http://localhost:4000/order/add", order);

  dyspatch({
    type: "REALIZAR_PEDIDO",
    payload: respuesta
  });
};

export const removeOrder = id => async dyspatch => {
  const respuesta = Axios.delete(`http://localhost:4000/order/${id}`);
  dyspatch({
    type: "ELIMINAR_PEDIDO",
    payload: respuesta
  });
};

export const deleteOrder = () => dyspatch => {
  dyspatch({
    type: "DELETE_ORDER",
    payload: []
  });
};
