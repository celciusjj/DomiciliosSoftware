import { PALABRA_BUSCADOR } from "../actions/types";

const initialState = {
  searcher: ""
};

export default (state = initialState, action) => {
  return action.type === PALABRA_BUSCADOR
    ? {
        ...state,
        searcher: action.payload
      }
    : {};
};
