import Client from './api';
import Cookies from 'js-cookie';
import axios from 'axios';

const config = {
  headers: { 'content-type': 'application/json' },
  withCredentials: true
};

export const GetAllUsers = async () => {
  const res = await Client.get('/users');
  return res.data;
};

export const GetAllFolders = async () => {
  const res = await Client.get('/folders');
  return res.data;
};

export const GetAllSubscriptions = async () => {
  const res = await Client.get('/subscriptions');
  return res.data;
};

export const AddSubscription = async (feed) => {
  // console.log(`CSRF Token: ${csrftoken}`);
  try {
    const res = await Client.post('/subscriptions/', { feed });
    return res;
  } catch (error) {
    throw error;
  }
};

export const GetFolderDetail = async (id) => {
  try {
    const res = await Client.get(`/folder/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
// export const CreateUser = async (username) => {
//   const res = await Client.post('/users/', { username });
//   return res.data;
// };

// export const FindUsername = async (username) => {
//   const res = await Client.get(`/username/${username}`);
//   return res.data;
// };

// export const GetUser = async (id) => {
//   const res = await Client.get(`/users/${id}`);
//   return res.data
// }
