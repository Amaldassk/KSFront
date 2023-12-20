import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import userReducer from './slice/userSlice'
import productReducer from './slice/productSlice'
import emailReducer from './slice/emailSlice'
import { initializeAuth } from './api/authMiddleware';

const appStore = async () => {
    try {
      const store = configureStore({
        reducer:{
            auth: authReducer,
            user: userReducer,
            product: productReducer,
            email: emailReducer,
        },
      });
      
      await store.dispatch(initializeAuth());

      return store;
    } catch (err) {
      throw new Error("Some error occurred");
    }
};

export default appStore;
