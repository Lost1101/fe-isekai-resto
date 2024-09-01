export const FETCH_PAYMENT = 'FETCH_PAYMENT';
export const COMPLETE_PAYMENT = 'COMPLETE_PAYMENT';
export const COMPLETE_ORDER ='COMPLETE_ORDER';

const initialState = {
    payments: [],
};

export const paymentReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PAYMENT:
            return{
                ...state,
                payments: action.payload
            };
        case COMPLETE_PAYMENT:
            return{
                ...state,
            };
        case COMPLETE_ORDER:
            return{
                ...state,
            }
            default:
            return state;
    }
}