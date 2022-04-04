import React from 'react';
import StyledHeader from './Header.styled';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        <NavLink to="sign-in">
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </NavLink>
      </div>
    </StyledHeader>
  );
}

export default Header;
