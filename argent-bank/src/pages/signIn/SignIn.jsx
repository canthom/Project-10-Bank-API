import React from 'react';
import StyledSignIn from './SignIn.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './loginForm/LoginForm';
import authService from '../../services/auth.service';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

function SignIn() {
  const Login = (details) => {
    authService.login();
  };

  const Logout = () => {
    console.log('Logout');
  };

  // TEST
  const dispatch = useDispatch();

  return (
    <StyledSignIn>
      <section>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>

        {/* TEST */}
        <button onClick={() => dispatch(login())}>Change State</button>

        <LoginForm Login={Login} />
      </section>
    </StyledSignIn>
  );
}

export default SignIn;
