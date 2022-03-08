import { createStore, combineReducers } from "redux";

import allProducts from "./modules/products/reducers";

const reducers = combineReducers({ products: allProducts });

const store = createStore(reducers);

export default store;
