import { createSlice } from "@reduxjs/toolkit";

const startState = {
  loading: '',
  data:[],
  error:'',
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState:startState,
  reducers: {
    startCharacters(state, action) {
      state.loading = 'start';
      state.data = [];
      state.error = '';
    },
    successCharacters(state, action) {
      state.loading = 'success';
      state.data = action.payload;
      state.error = '';
    },
    errorCharacters(state, action) {
      state.loading = 'error';
      state.data = [];
      state.error = action.payload;
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
