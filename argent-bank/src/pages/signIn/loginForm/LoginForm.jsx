import React, { useState } from 'react';

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: '', password: '' });
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
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
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
      </div>

      <div>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <input type="submit" value="Sign In" />
    </form>
  );
}

export default LoginForm;
