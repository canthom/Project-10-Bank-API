import styled from 'styled-components';

const StyledEditName = styled.form`
  width: 20%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  input[type='submit'],
  button {
    background-color: white !important;
    border-color: #00bc77;
    color: #00bc77 !important;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
  }

  input[type='text'] {
    flex-basis: 25%;
    padding: 10px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }
`;

export default StyledEditName;
