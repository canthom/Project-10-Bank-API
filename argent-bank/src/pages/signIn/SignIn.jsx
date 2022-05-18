import React, { useState, useEffect } from 'react';
import StyledSignIn from './SignIn.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './loginForm/LoginForm';

function SignIn() {
  return (
    <StyledSignIn>
      <section>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </StyledSignIn>
  );
}

export default SignIn;
