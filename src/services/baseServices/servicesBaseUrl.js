export let servicesBaseUrl =
  'http://localhost:3000/https://api.muranomlbb.com/';
const endpointList = require('./endpoints.json');
let environment = process.env.REACT_APP_ENVIRONMENT || 'development';
export const endpoints = endpointList[environment];
