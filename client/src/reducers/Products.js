import {FETCH_ALL } from "../constants/actionsTypes";

const ProductReducer = (state = {products: null}, action) =>{
    if(action.type === FETCH_ALL){
        console.log(action?.payload)
        return {...state, products: action?.payload};
    }else{
        return state;
    }
}
export default ProductReducer;