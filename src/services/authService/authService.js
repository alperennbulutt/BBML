import headers from '../baseServices/headers.json';
import { getRequest, postRequest } from '../baseServices/request';
import { parseResult } from '../dataParser';
import { servicesBaseUrl, endpoints } from '../baseServices/servicesBaseUrl';

export const getAccessToken = async (url) => {
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const postAccessToken = async (data) => {
  const url = `${servicesBaseUrl + endpoints.GETACCESSTOKEN}`;
  const config = {
    'content-type': 'application/json',
    accept: 'application/json',
    authorization:
      'BEARER eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiVXNlcm5hbWUiOiJzdHJpbmciLCJFbWFpbCI6InN0cmluZyIsIkZyb20iOiIxMDAiLCJMYW5ndWFnZSI6InRyIiwiTGFuZ3VhZ2VJZCI6Ijc1MyIsIm5iZiI6MTY2MjE1MDMwNiwiZXhwIjoxNjYyMjEwMzA2LCJpc3MiOiJN77-9cmFubyIsImF1ZCI6Ik11cmFubyJ9.pe_oo9ifjHINPUdYrsZ51_Gc4rrAYAmdLuMAcBFc5x',
  };
  console.log('url', url);
  console.log('config', config);
  console.log('data', data);
  // const config = headers.content_type;
  return postRequest(url, data, config);
};

// bilmediğimden yapamadım abla xD

// export const getHeroesList = async () => {
//   const url = `${servicesBaseUrl + endpoints.HEROESLIST}`;
//   const config = {
//     'content-type': 'application/json',
//     accept: 'application/json',
//     authorization:
//       'BEARER eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiVXNlcm5hbWUiOiJzdHJpbmciLCJFbWFpbCI6InN0cmluZyIsIkZyb20iOiIxMDAiLCJMYW5ndWFnZSI6InRyIiwiTGFuZ3VhZ2VJZCI6Ijc1MyIsIm5iZiI6MTY2MjE1MDMwNiwiZXhwIjoxNjYyMjEwMzA2LCJpc3MiOiJN77-9cmFubyIsImF1ZCI6Ik11cmFubyJ9.pe_oo9ifjHINPUdYrsZ51_Gc4rrAYAmdLuMAcBFc5x',
//   };
//   console.log('url', url);
//   console.log('config', config);
//   console.log('data', data);
//   // const config = headers.content_type;
//   return postRequest(url, data, config);
// };
