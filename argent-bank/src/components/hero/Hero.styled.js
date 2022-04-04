import styled from 'styled-components';
import { devices } from '../styles/MediaQueries.js';

const StyledHero = styled.div`
  background-image: url('../src/assets/bank-tree.jpeg');
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media ${devices.laptop} {
    height: 400px;
    background-position: 0% 33%;
  }

  section {
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;

    @media ${devices.laptop} {
      position: absolute;
      top: 50px;
      right: 50px;
      width: 300px;
      margin: 2rem;
    }
  }

  section p:not(:last-of-type) {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;

    @media ${devices.laptop} {
      font-size: 1.5rem;
    }
  }

  section p:last-of-type {
    margin-bottom: 0;
    font-size: 0.9rem;

    @media ${devices.laptop} {
      font-size: 1.2rem;
    }
  }
`;

export default StyledHero;
