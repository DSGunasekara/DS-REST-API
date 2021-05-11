import {FETCH_ALL, CREATE } from "../constants/actionsTypes";

const ProductReducer = (state = {products: null}, action) =>{

    switch (action.type){
        case FETCH_ALL:
            return {...state, products: action?.payload};

        case CREATE:
            return {...state, products: action?.payload};

        default:
            return state;

    }
}
export default ProductReducer;