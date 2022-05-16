import axios from 'axios';
import store from '../redux/store';

const API_URL = 'http://localhost:3001/api/v1/user/profile';

//Récupération du NOM ET PRENOM
const getUserInfo = () => {
  const token = store.getState().user.token;

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  const bodyParameters = {
    key: 'value',
  };

  return axios.post(API_URL, bodyParameters, config).catch((error) => {
    console.log(error);
  });
};

// Edition du NOM ET PRENOM
const editUserInfo = (firstName, lastName) => {
  const token = store.getState().user.token;

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  const bodyParameters = {
    key: 'value',
    firstName: firstName,
    lastName: lastName,
  };

  return axios.put(API_URL, bodyParameters, config).catch((error) => {
    console.log(error);
  });
};

const userInfoService = {
  getUserInfo,
  editUserInfo,
};

export default userInfoService;
