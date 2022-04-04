import React from 'react';
import StyledFeatureBox from './FeatureBox.styled';

function FeatureBox(props) {
  return <StyledFeatureBox>{props.children}</StyledFeatureBox>;
}

export default FeatureBox;
