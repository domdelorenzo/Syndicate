import axios from 'axios';
// import Cookies from 'js-cookie';
// axios.defaults.withCredentials = true;
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.withCredentials = true;
// const csrftoken = Cookies.get('csrftoken');
// axios.defaults.headers.common['X-CSRF-TOKEN'] = csrftoken;
export const API_URL = 'http://localhost:8000/api';

const Client = axios.create({ baseURL: API_URL });
export default Client;
