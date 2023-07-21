import sendRequest from './send-request';

const BASE_URL = '/api/users';

export async function signUpApi(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function loginApi(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function checkTokenApi() {
  return sendRequest(`${BASE_URL}/check-token`);
}
