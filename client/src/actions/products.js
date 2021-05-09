import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionsTypes";
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