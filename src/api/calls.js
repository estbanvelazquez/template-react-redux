import  { startLogin, successLogin, errorLogin } from "../redux/loginSlice"
import authHeader from "./header-auth";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(startLogin());
    const resul = await fetch('http://localhost:3001/api/login', { headers:authHeader()})
    .then(response => response.json());
    localStorage.setItem('user', JSON.stringify(resul));
    dispatch(successLogin(resul));
  } catch (error) {
    dispatch(errorLogin());
  }
}