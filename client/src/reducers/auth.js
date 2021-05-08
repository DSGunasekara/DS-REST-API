import { AUTH, LOGOUT } from "../constants/actionsTypes";

const authReducer = (state = {authData: null}, action) =>{
    switch (action.type){
        case AUTH:
            console.log({...action?.data.data.payload});
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return {...state, authData: action?.data.data.payload.user};

        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};

        default:
            return state;
    }
}
export default authReducer;