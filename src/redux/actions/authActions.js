import { SET_CREDENTIALS, SET_PROFILE, LOGOUT } from "../reducers/authReducer";
import api from '../api';

export const handleLogin = ({ username, password }) => async (dispatch) => {
  try {
    const response = await api.post('/login', { username, password });
    const { accessToken } = response.data;
    const { role } = response.data;

    localStorage.setItem('authToken', accessToken);
    localStorage.setItem('role', role);

    dispatch({
      type: SET_CREDENTIALS,
      payload: { token: accessToken, role: role }
    });


  } catch {
    alert('Username or password is wrong');
  }
};

export const fetchProfile = () => async (dispatch) => {
  try {
    const response = await api.get('/profile');
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    });
  } catch (error) {
    console.log('Failed to fetch profile', error);
  }
};

export const handleLogout = () => async (dispatch) => {
  if (window.confirm('Are you sure you want to log out?')) {
      try {
        const response = await api.post('/logout');
        dispatch({
          type: LOGOUT,
          payload: response.data
        });

          localStorage.removeItem('authToken');
          localStorage.removeItem('role');
          dispatch({ type: LOGOUT });
      } catch (error) {
          console.error(error.message);
      }
  }
};