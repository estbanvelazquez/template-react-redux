import { createSlice } from "@reduxjs/toolkit";

const startState = {
  loadingUser: false,
  dataUser:localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : [],
  errorUser: false,
}


const loginSlice = createSlice({
  name: 'login',
  initialState:startState,
  reducers: {
    startLogin(state, action) {
      state.loadingUser = true;
      state.dataUser = [];
      state.errorUser = false;
    },
    successLogin(state, action) {
      state.loadingUser = false;
      state.dataUser = action.payload;
      state.errorUser = false;
    },
    errorLogin(state, action) {
      state.loadingUser = false;
      state.dataUser = "Error al cargar los personajes";
      state.errorUser = true;
    },
  }
});

export const {startLogin, successLogin, errorLogin} = loginSlice.actions
export default loginSlice.reducer


