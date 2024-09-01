import { configureStore} from '@reduxjs/toolkit';
import { authReducer }  from './reducers/authReducer';
import { menuReducer } from './reducers/menuReducer';
import { orderReducer } from './reducers/orderReducer';
import { queueReducer } from './reducers/queueReducer';
import { paymentReducer } from './reducers/paymentReducer';
import { userReducer } from './reducers/adminReducer';

const store = configureStore({
  reducer:{
    auth : authReducer,
    menus : menuReducer,
    order : orderReducer,
    queue : queueReducer,
    payments : paymentReducer,
    users : userReducer
  }
})

export default store;