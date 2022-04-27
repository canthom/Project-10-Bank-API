import axios from 'axios';
const API_URL = 'http://localhost:3001/api/v1/user/profile';

const getUserInfo = (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  return axios.post(API_URL, config).catch((error) => {
    console.log(error);
  });
};

const userInfoService = {
  getUserInfo,
};

export default userInfoService;
