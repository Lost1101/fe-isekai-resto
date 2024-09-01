export const CHECKOUT_ORDER = 'CHECKOUT_ORDER';

const initialState = {
    order: null,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type){
        case CHECKOUT_ORDER:
            return{
                ...state,
                order: action.payload
            };
        default:
            return state;
    }
};