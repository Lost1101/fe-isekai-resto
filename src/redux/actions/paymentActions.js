import api from "../api";
import { COMPLETE_PAYMENT, FETCH_PAYMENT, COMPLETE_ORDER } from "../reducers/paymentReducer";

export const fetchPayments = () => async (dispatch) => {
    try{
        const response = await api.get('/payment');
        dispatch({
            type: FETCH_PAYMENT,
            payload: response.data
        });
    } catch (error){
        console.log(error.message);
    }
}

export const handlePayments = (id, totalCash) => async (dispatch) => {
    try{
        const response = await api.put(`/payment/${id}`, {totalCash});
        dispatch({
            type: COMPLETE_PAYMENT,
            payload: response.data
        })
        alert('Payment Success!')
    } catch (error){
        alert(error.message);
    }
}

export const handleOrderList = (id) => async (dispatch) => {
    if(window.confirm('Complete Order?')) {
        try{
            const response = await api.put(`/order_item/${id}`);
            dispatch({
                type: COMPLETE_ORDER,
                payload: response.data
            })
            alert(' Success!')
        } catch (error){
            alert(error.message);
        }
    }
}