/*service modules export business/app logic such as managing tokens, etc
service modules often depend upon API modules for making AJAX requests to the server */

import * as usersAPI from './users-api';

export async function signUpService(userData) {
  const token = await usersAPI.signUpApi(userData);
  // TODO: return user obj from token instead
  localStorage.setItem('token', token);
  return getUserFromToken();
}

export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // a JWT's expiration is expressed in seconds, not milliseconds
  if (payload.exp * 1000 < Date.now()) {
    // token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUserFromToken() {
  const token = getToken();
  //  if theres a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function loginService(credentials) {
  const token = await usersAPI.loginApi(credentials);
  localStorage.setItem('token', token);
  return getUserFromToken();
}

export function checkTokenService() {
  // need to use .then with promises
  return usersAPI.checkTokenApi().then((dateStr) => new Date(dateStr));
}
