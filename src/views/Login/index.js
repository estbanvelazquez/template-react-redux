import { Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../redux/loginSlice';


import './style.scss';
import Home from '../../views/Home' 

const LogIn = () => {
    const dispatch = useDispatch();
    const { loadingUser, dataUser, errorUser} = useSelector((state) => state.login);
    const { register, handleSubmit, watch, formState: { errors } }  = useForm();
    
    const onSubmit = (event) => {
      console.log(event);
    }

 

    return(
      <>
        {dataUser?.token? <Home /> :
          <div className="login-page">
            <div className='login-cont'>
              <h4>Inicio de Sesión</h4>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 cont-group" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Correo electrónico" 
                  { ...register("user", {
                    required: {
                      value:true,
                      message: "Ingresa tu correo electrónico"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Ingresa un email valido"
                    }
                  }) }/>
                  {errors.user &&
                    <Alert variant="danger">
                      <p>{errors.user.message}</p>
                    </Alert>
                  }
                </Form.Group>
                <Form.Group className="mb-3 cont-group" controlId="formBasicPassword">
                  <Form.Control  type="password" placeholder="Contraseña" 
                  { ...register("password", {
                    required:{
                      value: true,
                      message: "Ingresa una contraseña"
                    },
                    minLength:{
                      value: 8,
                      message: "La contraseña debe contener al menos 8 caracteres"
                    }
                  }) } />
                  {errors.password &&
                    <Alert variant="danger">
                      <p>{errors.password.message}</p>
                    </Alert>
                  }
                  <p>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </p>
                </Form.Group>
                <Button  variant="primary" type="submit" disabled={loadingUser}>
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