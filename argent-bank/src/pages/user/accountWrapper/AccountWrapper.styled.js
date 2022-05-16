import styled from 'styled-components';
import { devices } from '../../../components/styles/MediaQueries.js';

const StyledAccountWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  div:first-of-type {
    width: 100%;
    flex: 1;

    h3 {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: normal;
    }

    p:first-of-type {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
    }

    p:last-of-type {
      margin: 0;
    }
  }

  div:last-of-type {
    width: 100%;
    flex: 1;

    @media ${devices.tablet} {
      flex: 0;
    }

    button {
      display: block;
      width: 100%;
      padding: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 1rem;
      border-color: #00bc77;
      background-color: #00bc77;
      color: #fff;

      @media ${devices.tablet} {
        width: 200px;
      }
    }
  }
`;

export default StyledAccountWrapper;