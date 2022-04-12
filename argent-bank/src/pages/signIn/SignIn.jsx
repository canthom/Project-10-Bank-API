import React, { useState } from 'react';
import StyledSignIn from './SignIn.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './loginForm/LoginForm';

function SignIn() {
  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');
  console.log(user);

  const Login = (details) => {
    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data.message);
          setUser({
            email: details.email,
          });
        } else if (data.status === 400) {
          console.log(data.message);
        }
      });
  };

  const Logout = () => {
    console.log('Logout');
  };

  return (
    <StyledSignIn>
      <section>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>

        <LoginForm Login={Login} Error={error} />
      </section>
    </StyledSignIn>
  );
}

export default SignIn;
