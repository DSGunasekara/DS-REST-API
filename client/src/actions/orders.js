import { FETCH_ALL } from "../constants/actionsTypes";
import * as api from '../api/index';


export const getOrders = () => async (dispatch) => {

    try{

        const {data} = await api.getOrders();

        dispatch ({type: FETCH_ALL, payload: data});

    }catch (error) {
        console.log(error);
    }
};


export const putOrder = (order) => async (dispatch) => {

    try{

        await api.createOrder(order);

    }catch (error) {
        console.log(error);
    }
};

