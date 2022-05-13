import { useDispatch, useSelector } from "react-redux";
import LogIn from "../views/Login";
import {  Outlet } from "react-router-dom";
const PrivateRoute = () => { 
  const {dataUser} = useSelector((state) => state.login);

  return (
    dataUser?.token? <Outlet /> : <LogIn />
  )
}

export default PrivateRoute;