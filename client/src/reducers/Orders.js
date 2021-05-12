import {FETCH_ALL} from "../constants/actionsTypes";

const OrderReducer = (state = {orders:null}, action) =>{
    switch (action.type){
        case FETCH_ALL:
            return {...state, orders: action?.payload};

        default:
            return state;
    }
}

export default OrderReducer;