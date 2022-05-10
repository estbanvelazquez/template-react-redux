import { Button, Form } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../redux/loginSlice';

import './style.scss';

const LogIn = () => {
    const dispatch = useDispatch();
    const { loading, data, error} = useSelector((state) => state.login);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const passwordHandle = ({target:{value}}) => {
      setPassword(password);
    }
    const emailHandle = ({target:{value}}) => {
      setEmail(email);
    }
    const submitLog = (e) => {
      e.preventDefault();
      dispatch(loginUser());
    }
    useEffect(() =>{
      if(data?.token){
        localStorage.setItem('user', JSON.stringify(data));
      }
    },[data])
    return(
      <div className="login-page">
        <div className='login-cont'>
          <h4>Inicio de Sesión</h4>
          <Form>
            <Form.Group className="mb-3 cont-group" controlId="formBasicEmail">
              <Form.Control onChange={emailHandle} value={password} type="email" placeholder="Correo electrónico" />
            </Form.Group>
            <Form.Group className="mb-3 cont-group" controlId="formBasicPassword">
              <Form.Control onChange={passwordHandle} value={password} type="password" placeholder="Contraseña" />
              <p>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </p>
            </Form.Group>
            <Button onClick={submitLog} variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </div>
      </div>
    )
}

export default LogIn;