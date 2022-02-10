import Client from './api';

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
