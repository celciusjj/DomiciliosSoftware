import {
  OBTENER_ORDENES,
  OBTENER_ORDENES_TODAS,
  EDITAR_ESTADO_PEDIDO
} from "../actions/types";

const initialState = {
  order: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_ORDENES:
      return {
        ...state,
        order: action.payload
      };
    case OBTENER_ORDENES_TODAS:
      return {
        ...state,
        order: action.payload
      };
    case EDITAR_ESTADO_PEDIDO:
      return {
        ...state,
        order: action.payload
      };
    case "ELIMINAR_PEDIDO":
      return {
        ...state,
        order: action.payload
      };
    case "DELETE_ORDER":
      return {
        ...state,
        order: action.payload
      };
    case "REALIZAR_PEDIDO":
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};
