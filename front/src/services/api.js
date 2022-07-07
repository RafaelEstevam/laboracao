import axios from 'axios';

const API = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: 'http://localhost:8081',
  headers: {
    'Authorization': sessionStorage.getItem("token"),
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// API.interceptors.request.use(function (config) {
//   const token = sessionStorage.getItem("token");
//   config.headers.Authorization = token;
//   return config;
// });

const setTokenInStorage = (token) => {
  sessionStorage.setItem("token", token);
}

const setIdInStorage = (id) => {
  sessionStorage.setItem("userid", id);
}

const setUserDataInStorage = (user) => {
  sessionStorage.setItem('userData', JSON.stringify(user));
}

const getUserDataInStorage = () => {
  return JSON.parse(sessionStorage.getItem('userData'));
}

const getTokenInStorage = () => {
  return getUserDataInStorage();
}

const getUserIdInStorage = () => {
  return sessionStorage.getItem("userid");
}

function decodeToken(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  const data = JSON.parse(JSON.parse(jsonPayload).userDetails);

  sessionStorage.setItem("username", data.email);
  sessionStorage.setItem("permission", data.permission);

  return JSON.parse(JSON.parse(jsonPayload).userDetails);

};

function resetStorage() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("permission");
  sessionStorage.removeItem("userData");
  sessionStorage.removeItem("id");
}

export { API, setTokenInStorage, getTokenInStorage, decodeToken, resetStorage, setIdInStorage, getUserIdInStorage, setUserDataInStorage, getUserDataInStorage };