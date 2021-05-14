import { FETCH_ALL_PRODUCTS, CREATE, FETCH_ONE } from "../constants/actionsTypes";
import * as api from '../api/index.js';


//Action Creators
export const getProducts = () => async (dispatch) => {

    try{

        const {data} = await api.fetchProducts();

        dispatch ({type: FETCH_ALL_PRODUCTS, payload: data});

    }catch (error) {
        console.log(error);
    }
};

export const createProduct = (product) => async(dispatch) => {
    try{
        await api.createProduct(product);
    }catch(error){
        console.log("create post error" + error);
    }
}

export const getProduct = (id) => async (dispatch) => {

    try{

        const {data} = await api.fetchProduct(id);

        dispatch ({type: FETCH_ONE, payload: data});

    }catch (error) {
        console.log(error);
    }
};

export const removeProduct = (id) => async (dispatch) => {

    try{

        await api.deleteProduct(id);

    }catch (error) {
        console.log(error);
    }
};

export const updateProduct = (item) => async (dispatch) => {

    try{
        console.log(item);
        await api.updateProductItem(item);

    }catch (error) {
        console.log(error);
    }
};