import { CREATE, FETCH_CART_ITEMS } from "../constants/actionsTypes";

const CartReducer = (state = {cart:null}, action) =>{
    switch (action.type){
        case CREATE:
            return {...state, cart: action?.payload};
        case FETCH_CART_ITEMS:
            return { ...state, cart: action?.payload}
        default:
            return state;
    }
}

export default CartReducer;