export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const SET_PROFILE = 'SET_PROFILE';
export const LOGOUT = 'LOGOUT';

const initialState = {
  token: null,
  isAuthenticated: false,
  profile: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: !!action.payload.token,
        role: action.payload.role
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload.name,
        id: action.payload.userId
      };
    case LOGOUT:
      return {
        ...initialState,
        isAuthenticated: false,
      }
    default:
      return state;
  }
};