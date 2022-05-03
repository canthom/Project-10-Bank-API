import React from 'react';
import StyledHeader from './Header.styled';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { firstNameSelector, isAuthSelector } from '../../selectors';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useSelector(firstNameSelector);
  const isAuth = useSelector(isAuthSelector);

  const Logout = () => {
    dispatch(logout());
    navigate('/', { replace: true });
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
        {isAuth === false ? (
          <NavLink to="sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        ) : (
          <>
            <button onClick={Navigate}>
              <FontAwesomeIcon icon={faCircleUser} />
              {firstName}
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
