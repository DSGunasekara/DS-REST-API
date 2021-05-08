import { FETCH_ALL} from "../constants/actionsTypes";

const userReducer = (state = {userData: null}, action) =>{
    if(action.type === FETCH_ALL){

        return {...state, userData: action?.data};
    }else{
        return state;
    }
}

export default userReducer;