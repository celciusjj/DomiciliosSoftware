import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import shopCartReducer from "./shopCartReducer";
import searcherReducer from "./searcherReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  productos: productosReducer,
  shopCart: shopCartReducer,
  searcher: searcherReducer,
  order: orderReducer
});
