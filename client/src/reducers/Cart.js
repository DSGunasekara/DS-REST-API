import { CREATE } from "../constants/actionsTypes";

const CartReducer = (state = {cart:null}, action) =>{
    switch (action.type){
        case CREATE:
            return {...state, cart: action?.payload};

        default:
            return state;
    }
}

export default CartReducer;