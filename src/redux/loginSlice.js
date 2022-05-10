import { createSlice } from "@reduxjs/toolkit";

const startState = {
  loading: '',
  data:[],
  error:'',
}

const loginSlice = createSlice({
  name: 'employees',
  initialState:startState,
  reducers: {
    startLogin(state, action) {
      state.loading = 'start';
      state.data = [];
      state.error = '';
    },
    successLogin(state, action) {
      state.loading = 'success';
      state.data = {
        email: 'estebanvelazquez@test.com',
        name: 'Esteban',
        lastname: 'Velazquez',
        token:'ababababababababba'
      };
      state.error = '';
    },
    errorLogin(state, action) {
      state.loading = 'error';
      state.data = [];
      state.error = 'Usuario incorrecto /o contraseña';
    },
  }
});

export const {startLogin, successLogin, errorLogin} = loginSlice.actions
export default loginSlice.reducer

export const loginUser = (email,password) => async (dispatch) => {
  try{
    dispatch(startLogin());
    if(email === 'estebanvelazquez@test.com' && password === "123" ){
      setTimeout(()=>{
        dispatch(successLogin());
      }, 5000);
    }else{
      dispatch(errorLogin());
    }
  }catch(error){
    dispatch(errorLogin());
  }
}
