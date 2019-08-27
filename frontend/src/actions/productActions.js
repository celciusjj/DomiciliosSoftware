import { MOSTRAR_PRODUCTOS } from "./types";
import axios from "axios";

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("http://localhost:4000/product/");
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};
