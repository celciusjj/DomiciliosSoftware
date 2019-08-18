import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import shopCartReducer from "./shopCartReducer";
import searcherReducer from "./searcherReducer";

export default combineReducers({
  productos: productosReducer,
  shopCart: shopCartReducer,
  searcher: searcherReducer 
});
