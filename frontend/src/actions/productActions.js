import { MOSTRAR_PRODUCTOS } from "./types";
import axios from "axios";

const url = "http://localhost:4000"; // "https://backend-sendpa.herokuapp.com"

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get(`${url}/product/`);
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};
