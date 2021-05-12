import { combineReducers } from "redux";

import User from './user';
import auth from './auth';
import products from './Products'

export default combineReducers({  User ,auth, products });