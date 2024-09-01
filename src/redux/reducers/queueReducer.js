export const FETCH_QUEUE = 'FETCH_QUEUE';

const initialState = {
    queue: [],
}

export const queueReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_QUEUE:
            return{
                ...state,
                queue: action.payload
            }
        default:
            return state;
    }
}