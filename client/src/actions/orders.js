import {FETCH_ALL} from "../constants/actionsTypes";
import * as api from '../api/index';


export const getOrders = () => async (dispatch) => {

    try{

        const {data} = await api.getOrders();
        console.log(data);
        dispatch ({type: FETCH_ALL, payload: data});

    }catch (error) {
        console.log(error);
    }
};