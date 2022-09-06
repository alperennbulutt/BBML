import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://localhost:3000/https://api.muranomlbb.com/',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('access_token')}`
  // }
  headers: {
    authorization:
      'BEARER eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiVXNlcm5hbWUiOiJzdHJpbmciLCJFbWFpbCI6InN0cmluZyIsIkZyb20iOiIxMDAiLCJMYW5ndWFnZSI6InRyIiwiTGFuZ3VhZ2VJZCI6Ijc1MyIsIm5iZiI6MTY2MjE1MDMwNiwiZXhwIjoxNjYyMjEwMzA2LCJpc3MiOiJN77-9cmFubyIsImF1ZCI6Ik11cmFubyJ9.pe_oo9ifjHINPUdYrsZ51_Gc4rrAYAmdLuMAcBFc5x',
  },
});

instance.interceptors.request.use(
  (config) => {
    const apiToken =
      'BEARER eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiVXNlcm5hbWUiOiJzdHJpbmciLCJFbWFpbCI6InN0cmluZyIsIkZyb20iOiIxMDAiLCJMYW5ndWFnZSI6InRyIiwiTGFuZ3VhZ2VJZCI6Ijc1MyIsIm5iZiI6MTY2MjE1MDMwNiwiZXhwIjoxNjYyMjEwMzA2LCJpc3MiOiJN77-9cmFubyIsImF1ZCI6Ik11cmFubyJ9.pe_oo9ifjHINPUdYrsZ51_Gc4rrAYAmdLuMAcBFc5x';
    config.headers = { authorization: `${apiToken}` };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('loggedIn');
      window.location.replace('/');
    }
    if (error?.response) {
      return error.response;
    } else if (error) {
      return { ...error, status: 500 };
    } else {
      return Promise.reject(error);
    }
  }
);

export const http = instance;
