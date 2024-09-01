import api from "../api";
import { FETCH_QUEUE } from "../reducers/queueReducer";

export const fetchQueue = () => async (dispatch) => {
    try{
        const response = await api.get('/queue');
        dispatch({
            type: FETCH_QUEUE,
            payload: response.data
        });
    } catch (error){
        console.log(error.message);
    }
}