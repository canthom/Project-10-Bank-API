import React from 'react';
import StyledSignIn from './SignIn.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './loginForm/LoginForm';
import authService from '../../services/auth.service';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import store from '../../redux/store';
import { Navigate } from 'react-router-dom';

function SignIn() {
  const dispatch = useDispatch();

  const Login = (details) => {
    authService.login(details).then((response) => {
      if (response.data.status === 200) {
        const userInfo = {
          email: details.email,
          token: response.data.body.token,
        };
        dispatch(login(userInfo));
      }
    });
  };

  if (store.getState().user.isAuth === true) {
    return <Navigate to="/user" />;
  }

  return (
    <StyledSignIn>
      <section>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <LoginForm Login={Login} />
      </section>
    </StyledSignIn>
  );
}

export default SignIn;
