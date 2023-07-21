import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  // fetchs accepts an options obj ad the 2nd arg, used to include a data payload,
  // set headers, specify the method, etc
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // add authorization header
    // use logical OR assignment operator
    // ensures the headers obj exists
    options.headers ||= {};
    // add token to an aithorization header
    // prefacing bearer is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  //   if res.ok if false then something went wrong
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
