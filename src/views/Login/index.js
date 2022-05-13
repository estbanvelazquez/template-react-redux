import { Button, Form, Spinner } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../redux/loginSlice';

import './style.scss';
import Home from '../../views/Home' 

const LogIn = () => {
    const dispatch = useDispatch();
    const { loadingUser, dataUser, errorUser} = useSelector((state) => state.login);
    
    const initialCredentials = {
      user: '',
      password: '',
    }
    const [credentials, setCredentials] = useState(initialCredentials);

    const crediantalsHandle = ({target:{value, name}}) => {
      setCredentials({
        ...credentials,
        [name]: value,
      }
      );
    }

    const submitLog = () => {
      dispatch(loginUser(credentials));
    }    

    return(
      <>
        {dataUser?.token? <Home /> :
          <div className="login-page">
            <div className='login-cont'>
              <h4>Inicio de Sesión</h4>
              <Form>
                <Form.Group className="mb-3 cont-group" controlId="formBasicEmail">
                  <Form.Control name="user" onChange={crediantalsHandle} value={credentials.user} type="email" placeholder="Correo electrónico" />
                </Form.Group>
                <Form.Group className="mb-3 cont-group" controlId="formBasicPassword">
                  <Form.Control name="password" onChange={crediantalsHandle} value={credentials.password} type="password" placeholder="Contraseña" />
                  <p>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </p>
                </Form.Group>
                <Button onClick={submitLog} variant="primary" type="button" disabled={loadingUser}>
                  {loadingUser ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
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