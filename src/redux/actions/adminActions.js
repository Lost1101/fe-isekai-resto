import api from "../api";
import { FETCH_USER, NEW_USER, NEW_MENU, DELETE_USER, DELETE_MENU, EDIT_MENU } from "../reducers/adminReducer";

export const fetchUsers = () => async (dispatch) => {
    try{
        const response = await api.get('/user');
        dispatch({
            type: FETCH_USER,
            payload: response.data
        });
    } catch (error){
        console.log(error.message);
    }
}

export const addUser = (username, name, password, role) => async (dispatch) => {
    try{
        const response = await api.post('/user', {username, name, password, role});
        dispatch({
            type: NEW_USER,
            payload: response.data
        })
        alert('Adding user success!');
    } catch (error){
        alert(error);
    }
}

export const delUser = (id) => async (dispatch) => {
    if(window.confirm('Delete this user?')){
        try{
            const response = await api.delete(`/user/${id}`);
            dispatch({
                type: DELETE_USER,
                payload: response.data
            })
            alert('Delete user success!');
        } catch (error){
            alert(error);
        }
    }
}

export const addMenu = (name, price, time, stock, category) => async (dispatch) => {
    try{
        const response = await api.post('/menu', {name, price, time, stock, category});
        dispatch({
            type: NEW_MENU,
            payload: response.data
        })
        alert('Adding menu success!');
    } catch (error){
        alert(error);
    }
}

export const delMenu = (id) => async (dispatch) => {
    if(window.confirm('Delete this menu?')){
        try{
            const response = await api.delete(`/menu/${id}`);
            dispatch({
                type: DELETE_MENU,
                payload: response.data
            })
            alert('Delete menu success!');
        } catch (error){
            alert(error);
        }
    }
}

export const editMenu = (id, name, price, time, stock, category) => async (dispatch) => {
    try{
        const response = await api.put(`/menu/${id}`, {name, price, time, stock, category});
        dispatch({
            type: EDIT_MENU,
            payload: response.data
        })
        alert('Edit menu success!');
    } catch (error){
        alert(error);
    }
}