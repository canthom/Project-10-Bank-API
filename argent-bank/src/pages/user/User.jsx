import React from 'react';
import StyledUser from './User.styled';
import AccountWrapper from './accountWrapper/AccountWrapper';

function User() {
  return (
    <StyledUser>
      <header>
        <h1>
          Welcome back <br />
          Tony Jarvis!
        </h1>
        <button>Edit Name</button>
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
