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

  h2 {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
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
