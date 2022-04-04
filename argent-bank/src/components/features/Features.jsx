import React from 'react';
import StyledFeatures from './Features.styled';
import FeatureBox from './featureBox/FeatureBox';
import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';

function Features() {
  return (
    <StyledFeatures>
      <h2 className="sr-only">Features</h2>
      <FeatureBox>
        <img src={iconChat} alt="Chat Icon" />
        <h3>You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </FeatureBox>
      <FeatureBox>
        <img src={iconMoney} alt="Chat Icon" />
        <h3>More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </FeatureBox>
      <FeatureBox>
        <img src={iconSecurity} alt="Chat Icon" />
        <h3>Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </FeatureBox>
    </StyledFeatures>
  );
}

export default Features;
