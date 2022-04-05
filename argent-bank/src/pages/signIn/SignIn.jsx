import React from 'react';
import StyledSignIn from './SignIn.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
  return (
    <StyledSignIn>
      <section>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>

        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input autoComplete="username" type="text" id="username" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              autoComplete="current-password"
              type="password"
              id="password"
            />
          </div>

          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <Link to="/user">Sign In</Link>
        </form>
      </section>
    </StyledSignIn>
  );
}

export default SignIn;
