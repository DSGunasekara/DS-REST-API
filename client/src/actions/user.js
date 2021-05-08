import { FETCH_ALL} from "../constants/actionsTypes";
import * as api from '../api/index.js';

export const getId = () => async(dispatch) =>{
    try{

        const  {data} = await api.getId();
        console.log(data);
       // dispatch ({type: FETCH_ALL, payload: data});

    }catch (error){
        console.log(error)
    }
}