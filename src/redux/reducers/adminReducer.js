export const FETCH_USER = 'FETCH_USER';
export const NEW_USER = 'NEW_USER';
export const DELETE_USER = 'DELETE_USER';
export const NEW_MENU = 'NEW_MENU';
export const DELETE_MENU = 'DELETE_MENU';
export const EDIT_MENU = 'EDIT_MENU';

const initialState = {
    users: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USER:
            return{
                ...state,
                users: action.payload
            };
        case NEW_USER:
            return{
                ...state
            };
        case DELETE_USER:
            return{
                ...state
            };
        case NEW_MENU:
            return{
                ...state
            }
        case DELETE_MENU:
            return{
                ...state
            };
        case EDIT_MENU:
            return{
                ...state
            }
            default:
            return state;
    }
}