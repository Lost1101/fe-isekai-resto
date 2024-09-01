export const FETCH_MENU = 'FETCH_MENU';

const initialState = {
    menus: [],
};

export const menuReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_MENU:
            return{
                ...state,
                menus: action.payload
            };
            default:
            return state;
    }
}