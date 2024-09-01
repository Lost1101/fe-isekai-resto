import api from '../api';
import { FETCH_MENU } from "../reducers/menuReducer";

export const fetchMenus = () => async (dispatch) => {
    try{
        const response = await api.get('/menu');
        dispatch({
            type: FETCH_MENU,
            payload: response.data
        });
    } catch (error){
        console.log(error.message);
    }
}