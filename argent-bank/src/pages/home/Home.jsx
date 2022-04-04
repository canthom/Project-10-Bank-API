import React from 'react';
import StyledHome from './Home.styled';
import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';

function Home() {
  return (
    <StyledHome>
      <Hero />
      <Features />
    </StyledHome>
  );
}

export default Home;
