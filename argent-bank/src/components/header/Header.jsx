import React from 'react';
import StyledHeader from './Header.styled';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import store from '../../redux/store';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(logout());
  };

  const Navigate = () => {
    navigate('/user', { replace: true });
  };

  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {store.getState().user.isAuth === false ? (
          <NavLink to="sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        ) : (
          <>
            <button onClick={Navigate}>
              <FontAwesomeIcon icon={faCircleUser} />
              Tony
            </button>
            <button onClick={Logout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </button>
          </>
        )}
      </div>
    </StyledHeader>
  );
}

export default Header;
