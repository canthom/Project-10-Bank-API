import axios from 'axios';
const API_URL = 'http://localhost:3001/api/v1/user/login';

const login = ({ email, password }) => {
  let config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  return axios.post(
    API_URL,
    {
      email: email,
      password: password,
    },
    config
  );
};

const authService = {
  login,
};

export default authService;
