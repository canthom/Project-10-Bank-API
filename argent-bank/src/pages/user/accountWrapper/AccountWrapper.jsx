import React from 'react';
import StyledAccountWrapper from './AccountWrapper.styled';

function AccountWrapper(props) {
  return <StyledAccountWrapper>{props.children}</StyledAccountWrapper>;
}

export default AccountWrapper;
