import axios from 'axios';

export const API_URL = 'http://localhost:3001/api';

const Client = axios.create({ baseURL: API_URL });
export default Client;
