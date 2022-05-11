import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../redux/charactersSlice';
import loginReducer from '../redux/loginSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    login: loginReducer,
  },
});
