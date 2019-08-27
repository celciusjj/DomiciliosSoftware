import { OBTENER_ORDENES } from "./types";
import axios from "axios";

export const getOrders = () => async dyspatch => {
  const ordersData = await axios.get("http://localhost:4000/orders");

  dyspatch({
    type: OBTENER_ORDENES,
    payload: ordersData.data.data
  });
};
