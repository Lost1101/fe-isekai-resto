import axios from 'axios';
import store from './index';
import { SET_CREDENTIALS, LOGOUT } from './reducers/authReducer';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

const token = localStorage.getItem('authToken');
const role = localStorage.getItem('role');
if (token) {
  store.dispatch({
    type: SET_CREDENTIALS,
    payload: { token, role }
  });
}

api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token && !config._retry) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry && originalRequest.url !== '/login') {
      originalRequest._retry = true;
      try {
        const response = await api.post('/refresh-token');
        const { accessToken } = response.data;
        store.dispatch({
          type: SET_CREDENTIALS,
          payload: { token: accessToken }
        });
        console.log(accessToken)
        localStorage.setItem('authToken', accessToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (e) {
        localStorage.removeItem('authToken');
        store.dispatch({ type: LOGOUT });
        return Promise.reject(e);
      }
    } else if (error.response.status === 403) {
      localStorage.removeItem('authToken');
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(error);
  }
);

export default api;