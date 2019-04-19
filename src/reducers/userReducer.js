import {SUBMIT_USER_SUCCESS, SUBMIT_USER_ERROR} from "../actions/types";

export default function(state = {}, action){
    switch(action.type){
        case SUBMIT_USER_SUCCESS: 
            return {
                ...state,
                user_data: action.payload,
                errors: [],
                login_status: true
            }
        case SUBMIT_USER_ERROR: 
            return {
                ...state,
                errors: action.payload
            }
        default: 
            return state
    }
}