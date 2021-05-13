import { combineReducers } from "redux";

import User from './user';
import auth from './auth';
import products from './Products';
import Orders from './Orders';
import Cart from './Cart';

export default combineReducers({  User ,auth, products, Orders, Cart });