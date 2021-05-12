import { combineReducers } from "redux";

import User from './user';
import auth from './auth';
import products from './Products';
import Orders from './Orders';

export default combineReducers({  User ,auth, products, Orders });