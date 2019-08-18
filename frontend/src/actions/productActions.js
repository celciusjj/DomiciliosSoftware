import {
  MOSTRAR_PRODUCTOS,
  ELIMINAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  MOSTRAR_PRODUCTO,
  EDITAR_PRODUCTO
} from "./types";
import axios from "axios";

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("http://localhost:4000/product/");
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: axios.get("http://localhost:4000/product/")
  });
};
