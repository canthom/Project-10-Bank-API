import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoadingSelector } from '../../../selectors';
import authService from '../../../services/auth.service';
import { login, loading } from '../../../redux/userSlice';

function LoginForm({}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const [details, setDetails] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [hasError, setHasError] = useState(false);

  // CONNEXION
  const Login = (details) => {
    dispatch(loading({ isLoading: true }));
    return authService
      .login(details)
      .then((response) => {
        dispatch(loading({ isLoading: false }));

        if (response.data.status === 200) {
          const userInfo = {
            token: response.data.body.token,
          };

          if (details.remember) {
            localStorage.setItem('token', response.data.body.token);
          }

          dispatch(login(userInfo));
          navigate('/user', { replace: true });
          return userInfo.token;
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          dispatch(loading({ isLoading: false }));
          setHasError(true);
        }
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const usnHandler = useCallback(
    (e) => setDetails({ ...details, email: e.target.value }),
    [details]
  );

  const pwdHandler = useCallback(
    (e) => setDetails({ ...details, password: e.target.value }),
    [details]
  );

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          autoComplete="username"
          type="text"
          id="username"
          onChange={usnHandler}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          autoComplete="current-password"
          type="password"
          id="password"
          onChange={pwdHandler}
        />
      </div>

      <p>
        {hasError
          ? `Erreur dans l'identifiant ou dans le mot de passe.`
          : undefined}
      </p>

      <div>
        <input
          type="checkbox"
          id="remember-me"
          checked={details.remember}
          onChange={(e) => {
            setDetails((prevDetails) => {
              return { ...prevDetails, remember: !prevDetails.remember };
            });
          }}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <input
        type="submit"
        value="Sign In"
        disabled={isLoading ? true : false}
      />
    </form>
  );
}

export default LoginForm;
