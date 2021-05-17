import { AUTH } from "../constants/actionsTypes";
import * as api from '../api/index';

export const signin = (formData, history)=> async (dispatch) =>{
    try{
        // log in the user
        console.log(formData);
        const  data  = await api.login({...formData});

        console.log(data);

        dispatch({type: AUTH, data});


        history.push('/')
    }catch (error){
        return {...error};
    }
}

export const signup = (formData, history)=> async (dispatch) =>{
    try{
        // sign in the user
        const  { data }  = await api.signUp(formData);
        console.log(data);
        dispatch({type: AUTH, data});

        history.push('/')
    }catch (error){
        return {...error}
    }
}