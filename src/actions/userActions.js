import {SUBMIT_USER_SUCCESS, SUBMIT_USER_ERROR} from "./types";
import axios from "axios";

export const submit_user = async (data) => {
    try {
        const res = await axios.post("https://staging-api.recruitd.co.uk/professional_auth/", data);
        console.log(res)
        return {
            type: SUBMIT_USER_SUCCESS,
            payload: res.data.data
        }
    } catch(error){
        const errorResponse = error.response.data.errors;
        return {
            type: SUBMIT_USER_ERROR,
            payload: errorResponse.full_messages
        }
    }
    
}