import {
  MOSTRAR_PRODUCTOS,
  ELIMINAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  MOSTRAR_PRODUCTO,
  EDITAR_PRODUCTO
} from "../actions/types";

const initialState = {
  productos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return {
        ...state,
        productos: action.payload
      };
    default:
      return state;
  }
};
