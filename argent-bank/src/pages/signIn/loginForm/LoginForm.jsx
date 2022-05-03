import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../../selectors';

function LoginForm({ Login }) {
  const isLoading = useSelector(isLoadingSelector);
  const [details, setDetails] = useState({ email: '', password: '' });
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

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
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
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

      <div>
        <input type="checkbox" id="remember-me" />
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
