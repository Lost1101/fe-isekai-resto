import api from '../api';
import { CHECKOUT_ORDER } from "../reducers/orderReducer";

export const checkoutOrder = (order_item, payment, waiter, customer, table) => async (dispatch) => {
    try{
        const response = await api.post('/order_item', {order_item, payment, waiter, customer, table});
        dispatch({
            type: CHECKOUT_ORDER,
            payload: response.data
        })
    } catch (error){
        alert(error);
    }
};
