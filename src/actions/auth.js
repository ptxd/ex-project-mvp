import axios from 'axios';
var querystring = require('querystring');

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// const ROOT_URL = 'http://localhost:3000';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(profile) {
  console.log(profile);
  const userProfile = axios.post('http://localhost:3000/user',querystring.stringify(profile));
  console.log(userProfile);
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}
