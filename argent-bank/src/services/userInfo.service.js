import axios from 'axios';
const API_URL = 'http://localhost:3001/api/v1/user/profile';

//Récupération du NOM ET PRENOM
const getUserInfo = (token) => {
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
const editUserInfo = (token, firstName, lastName) => {
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
