import { CREATE } from "../constants/actionsTypes";
import * as api from '../api/index';

export const pushToCart = (item) => async(dispatch)=>{
    try {
        const {data} = await api.addToCart(item);
        dispatch ({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}