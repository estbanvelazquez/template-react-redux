import { Button, Form, Spinner } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../redux/loginSlice';

import './style.scss';
import Home from '../../views/Home' 

const LogIn = () => {
    const dispatch = useDispatch();
    const { loading, data, error} = useSelector((state) => state.login);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const passwordHandle = ({target:{value}}) => {
      setPassword(value);
    }
    const emailHandle = ({target:{value}}) => {
      setEmail(value);
    }

    const submitLog = () => {
      dispatch(loginUser(email,password));
    }
    
    useEffect(() =>{
      if(data?.token){
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('token', data.token);
      }
    },[data])

    return(
      <>
        {localStorage.getItem('token') || data?.token ? <Home /> :
          <div className="login-page">
            <div className='login-cont'>
              <h4>Inicio de Sesión</h4>
              <Form>
                <Form.Group className="mb-3 cont-group" controlId="formBasicEmail">
                  <Form.Control onChange={emailHandle} value={email} type="email" placeholder="Correo electrónico" />
                </Form.Group>
                <Form.Group className="mb-3 cont-group" controlId="formBasicPassword">
                  <Form.Control onChange={passwordHandle} value={password} type="password" placeholder="Contraseña" />
                  <p>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </p>
                </Form.Group>
                <Button onClick={submitLog} variant="primary" type="button" disabled={loading}>
                  {loading ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
                    : "Iniciar sesión"
                  }
                </Button>
              </Form>
            </div>
          </div>
        }
      </>
    )
}

export default LogIn;