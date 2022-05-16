import React, { useEffect, useState } from 'react';
import StyledUser from './User.styled';
import AccountWrapper from './accountWrapper/AccountWrapper';
import EditName from './editName/EditName';
import userInfoService from '../../services/userInfo.service';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/userSlice';
import { firstNameSelector, lastNameSelector } from '../../selectors';

function User() {
  const [isEditActive, setIsEditActive] = useState(false);
  const dispatch = useDispatch();
  const firstName = useSelector(firstNameSelector);
  const lastName = useSelector(lastNameSelector);

  useEffect(() => {
    // Récupération du NOM ET PRENOM
    userInfoService.getUserInfo().then((response) => {
      if (response.data.status === 200) {
        const userInfo = {
          email: response.data.body.email,
          firstName: response.data.body.firstName,
          lastName: response.data.body.lastName,
        };
        dispatch(getProfile(userInfo));

        // LOCAL STORAGE
        localStorage.setItem('firstName', response.data.body.firstName);
      }
    });
  }, []);

  // Edition du NOM ET PRENOM
  const SaveChanges = (details) => {
    userInfoService
      .editUserInfo(details.firstName, details.lastName)
      .then((response) => {
        if (response.data.status === 200) {
          userInfoService.getUserInfo().then((response) => {
            if (response.data.status === 200) {
              const userInfo = {
                email: response.data.body.email,
                firstName: response.data.body.firstName,
                lastName: response.data.body.lastName,
              };
              dispatch(getProfile(userInfo));

              // LOCAL STORAGE
              localStorage.setItem('firstName', response.data.body.firstName);
            }
          });
        }
      });
  };

  // Afficher l'édition du NOM ET PRENOM
  const toggleEditName = () => {
    setIsEditActive((prevState) => !prevState);
  };

  return (
    <StyledUser>
      <header>
        {isEditActive ? (
          <>
            <h1>
              Welcome back <br />
            </h1>
            <EditName SaveChanges={SaveChanges} toggleEdit={toggleEditName} />
          </>
        ) : (
          <>
            <h1>
              Welcome back <br />
              {firstName + ' ' + lastName}!
            </h1>
            <button onClick={toggleEditName}>Edit Name</button>
          </>
        )}
      </header>
      <h2 className="sr-only">Accounts</h2>

      <AccountWrapper>
        <div>
          <h3>Argent Bank Checking (x8349)</h3>
          <p>$2,082.79</p>
          <p>Available Balance</p>
        </div>

        <div>
          <button>View transactions</button>
        </div>
      </AccountWrapper>

      <AccountWrapper>
        <div>
          <h3>Argent Bank Savings (x6712)</h3>
          <p>$10,928.42</p>
          <p>Available Balance</p>
        </div>
        <div>
          <button>View transactions</button>
        </div>
      </AccountWrapper>

      <AccountWrapper>
        <div>
          <h3>Argent Bank Credit Card (x8349)</h3>
          <p>$184.30</p>
          <p>Current Balance</p>
        </div>
        <div>
          <button>View transactions</button>
        </div>
      </AccountWrapper>
    </StyledUser>
  );
}

export default User;
