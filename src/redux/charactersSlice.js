import { createSlice } from "@reduxjs/toolkit";

const startState = {
  loadingCharacters: false,
  dataCharacters:[],
  errorCharacters:false,
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState:startState,
  reducers: {
    startCharacters(state, action) {
      state.loadingCharacters = true;
      state.dataCharacters = [];
      state.errorCharacters = false;
    },
    successCharacters(state, action) {
      state.loadingCharacters = false;
      state.dataCharacters = action.payload;
      state.errorCharacters = false;
    },
    errorCharacters(state, action) {
      state.loadingCharacters = false;
      state.dataCharacters = "Credenciales invalidas";
      state.errorCharacters = false;
    },
  }
});

export const {startCharacters, successCharacters, errorCharacters} = charactersSlice.actions
export default charactersSlice.reducer

export const getAllCharacters = () => async (dispatch) => {
  try{
    dispatch(startCharacters());
    const response = await fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json());
    const { results } = response;
    dispatch(successCharacters(results));
  }catch(error){
    dispatch(errorCharacters(error));
  }
}
