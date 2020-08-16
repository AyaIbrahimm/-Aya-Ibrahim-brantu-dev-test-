import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import {productListReducer, productDetailsReducer, productSaveReducer} from './Reducers/productReducers';
import thunk from 'redux-thunk';
const initialState={};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    productSave : productSaveReducer
    

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducer,initialState, compose(applyMiddleware(thunk)));

export default store;