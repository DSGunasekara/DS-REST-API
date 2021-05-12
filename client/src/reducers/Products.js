import {FETCH_ALL, CREATE, FETCH_ONE} from "../constants/actionsTypes";

const ProductReducer = (state = {products: null, product: null}, action) =>{

    switch (action.type){
        case FETCH_ALL:
            return {...state, products: action?.payload};
        case FETCH_ONE:
            return {...state, product: action?.payload};
        case CREATE:
            return {...state, products: action?.payload};

        default:
            return state;

    }
}
export default ProductReducer;