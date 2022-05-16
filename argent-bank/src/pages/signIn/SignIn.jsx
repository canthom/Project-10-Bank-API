import React, { useState, useEffect } from 'react';
import StyledSignIn from './SignIn.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './loginForm/LoginForm';

function SignIn() {
  // const dispatch = useDispatch();
  // const [hasError, setHasError] = useState(false);

  // // AFFICHAGE MESSAGE D'ERREUR
  // const toggleErrorMessage = () => {
  //   setHasError((prevState) => !prevState);
  // };

  // const Login = (details) => {
  //   dispatch(loading({ isLoading: true }));
  //   return authService
  //     .login(details)
  //     .then((response) => {
  //       dispatch(loading({ isLoading: false }));

  //       if (response.data.status === 200) {
  //         const userInfo = {
  //           token: response.data.body.token,
  //         };

  //         if (details.remember) {
  //           localStorage.setItem('token', response.data.body.token);
  //         }

  //         dispatch(login(userInfo));
  //         return userInfo.token;
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 400) {
  //         dispatch(loading({ isLoading: false }));
  //         toggleErrorMessage();
  //       }
  //     });
  // };

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
