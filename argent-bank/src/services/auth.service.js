import axios from 'axios';
const API_URL = 'http://localhost:3001/api/v1/user/login';

const login = (email, password) => {
  let config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  return axios
    .post(
      API_URL,
      {
        email: 'steve@rogers.com',
        password: 'password456',
      },
      config
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const authService = {
  login,
};

export default authService;
