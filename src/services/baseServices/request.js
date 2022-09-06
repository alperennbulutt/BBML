import { http } from '../baseServices/http'
import { errorParser } from '../baseServices/errorParser';
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const getRequest = (url, headers) =>
http
    .get(url, {cancelToken: source.token , config: headers })
    .then(res => res)
    .catch(err => errorParser(err));

export const postRequest = (url, data, headers) =>
http
    .post(url, data, { cancelToken: source.token ,config: headers })
    .then(res => res)
    .catch(err => errorParser(err));

export const patchRequest = (url, data, headers) =>
http
    .patch(url, data, { cancelToken: source.token ,config: headers })
    .then(res => res)
    .catch(err => errorParser(err));

export const putRequest = (url, data, headers) =>
http
    .put(url, data, {cancelToken: source.token , config: headers })
    .then(res => res)
    .catch(err => errorParser(err));

export const deleteRequest = (url, headers) =>
http
    .delete(url, {cancelToken: source.token , config: headers })
    .then(res => res)
    .catch(err => errorParser(err));
