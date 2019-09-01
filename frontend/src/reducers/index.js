import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import searcherReducer from "./searcherReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  productos: productosReducer,
  searcher: searcherReducer,
  order: orderReducer
});
