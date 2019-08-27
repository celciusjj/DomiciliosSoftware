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
    default:
      return state;
  }
};
