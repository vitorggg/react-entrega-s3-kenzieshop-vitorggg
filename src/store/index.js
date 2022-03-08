import { createStore, combineReducers } from "redux";

import allProducts from "./modules/products/reducers";
import cartReducer from "./modules/cart/reducers";

const reducers = combineReducers({ products: allProducts, cart: cartReducer });

const store = createStore(reducers);

export default store;
