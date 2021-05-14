import { CREATE_CART, FETCH_CART_ITEMS } from "../constants/actionsTypes";
import * as api from '../api/index';

export const pushToCart = (item) => async(dispatch)=>{
    try {
        const {data} = await api.addToCart(item);
        dispatch ({type: CREATE_CART, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getCartItems = (id) => async(dispatch)=>{
    try {
        const {data} = await api.fetchCartItems(id);
        dispatch ({type: FETCH_CART_ITEMS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const removeCartItem = (id) => async(dispatch)=>{
    try {
        await api.deleteCartItem(id);
    } catch (error) {
        console.log(error);
    }
}