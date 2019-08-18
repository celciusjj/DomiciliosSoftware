import Axios from "axios";

export const addProductToCar = producto => dyspatch => {
  dyspatch({
    type: "AGREGAR_PRODUCTO_CARRO",
    payload: producto
  });
};

export const removeProductToCar = name => dyspatch => {
  dyspatch({
    type: "ELIMINAR_PRODUCTO_CARRO",
    payload: name
  });
};

export const addOrder = order => async dyspatch => {
  const respuesta = await Axios.post("http://localhost:4000/order/add", order);
  dyspatch({
    type: "REALIZAR_PEDIDO",
    payload: respuesta
  });
};
