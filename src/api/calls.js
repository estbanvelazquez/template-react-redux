import  {startLogin, successLogin, errorLogin} from "../redux/loginSlice"

export const loginUser = (credentials) => async (dispatch) => {
    try{
      dispatch(startLogin());
      if(credentials.user === 'estebanvelazquez@test.com' && credentials.password === "12345678" ){
        setTimeout(()=>{
          const user = {
            email: 'estebanvelazquez@test.com',
            name: 'Esteban',
            lastname: 'Velazquez',
            token:'ababababababababba'
          };
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(successLogin(user));
        }, 5000);
      }else{
        dispatch(errorLogin());
      }
    }catch(error){
      dispatch(errorLogin());
    }
  }