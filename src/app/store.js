import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from '../redux/charactersSlice';
import loginSlice from '../redux/charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    login: loginSlice,
  },
});
