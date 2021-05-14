import {FETCH_ALL_PRODUCTS, FETCH_ONE} from "../constants/actionsTypes";

const ProductReducer = (state = {products: null, product: null}, action) =>{

    switch (action.type){
        case FETCH_ALL_PRODUCTS:
            return {...state, products: action?.payload};
        case FETCH_ONE:
            return {...state, product: action?.payload};
        default:
            return state;

    }
}
export default ProductReducer;