import { FETCH_ALL, CREATE, FETCH_ONE } from "../constants/actionsTypes";
import * as api from '../api/index.js';


//Action Creators
export const getProducts = () => async (dispatch) => {

    try{

        const {data} = await api.fetchProducts();
        console.log(data);
        dispatch ({type: FETCH_ALL, payload: data});

    }catch (error) {
        console.log(error);
    }
};

export const createProduct = (product) => async(dispatch) => {
    try{
        const { data } = await api.createProduct(product);

        dispatch({type: CREATE, payload:data});

    }catch(error){
        console.log("create post error" + error);
    }
}

export const getProduct = () => async (dispatch, id) => {

    try{

        const {data} = await api.fetchProduct(id);
        console.log(data);
        dispatch ({type: FETCH_ONE, payload: data});

    }catch (error) {
        console.log(error);
    }
};