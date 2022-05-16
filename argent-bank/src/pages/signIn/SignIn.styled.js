import styled from 'styled-components';

const StyledSignIn = styled.main`
  background-color: #12002b;

  p {
    color: red;
  }

  section {
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
  }

  svg {
    font-size: 5rem;
  }

  input[type='submit'] {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    cursor: pointer;
  }

  div:not(:last-of-type) {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    label {
      font-weight: bold;
    }

    input {
      padding: 5px;
      font-size: 1.2rem;
    }
  }

  div:last-of-type {
    display: flex;

    label {
      margin-left: 0.25rem;
    }
  }
`;

export default StyledSignIn;
