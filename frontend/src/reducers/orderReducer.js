import { OBTENER_ORDENES } from "../actions/types";

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
