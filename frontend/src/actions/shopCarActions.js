import Axios from "axios";

export const addProductToCar = producto => dyspatch => {
  dyspatch({
    type: "AGREGAR_PRODUCTO_CARRO",
    payload: producto
  });
};

export const removeProductToCar = id => dyspatch => {
  dyspatch({
    type: "ELIMINAR_PRODUCTO_CARRO",
    payload: id
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
  const respuesta = await Axios.delete(`http://localhost:4000/order/${id}`);
  dyspatch({
    type: "ELIMINAR_PEDIDO",
    payload: respuesta.data
  });
};

export const deleteOrder = () => dyspatch => {
  console.log("entra")
  dyspatch({
    type: "DELETE_ORDER",
    payload: []
  })
}
