import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import shopCartReducer from './shopCartReducer'

export default combineReducers({
    productos: productosReducer,
    shopCart: shopCartReducer,
});
