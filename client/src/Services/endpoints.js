import Client from './api';

/* User endpoints */
export const GetAllUsers = async () => {
  const res = await Client.get('/user');
  return res.data;
};

/* Folder  endpoints */
export const GetAllFolders = async () => {
  const res = await Client.get('/folder');
  return res.data;
};

export const GetFolderDetail = async (id) => {
  try {
    const res = await Client.get(`/folder/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const GetFolderByUser = async (id) => {
  try {
    const res = await Client.get(`/folder/user/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const CreateFolder = async (object) => {
  try {
    const res = await Client.post('/folder/new/', object);
    return res;
  } catch (error) {
    throw error;
  }
};
/* Feed endpoints */

export const GetAllFeeds = async () => {
  const res = await Client.get('/feed/all');
  return res.data;
};
export const GetFeedDetail = async (id) => {
  try {
    const res = await Client.get(`/feed/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const GetFeedByFolder = async (id) => {
  try {
    const res = await Client.get(`/feed/folder/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
export const CreateFeed = async (feed) => {
  try {
    const res = await Client.post('/feed/new/', feed);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const EditFeed = async (id, object) => {
  try {
    const res = await Client.put(`/feed/${id}`, object);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteFeed = async (id) => {
  try {
    const res = await Client.delete(`/feed/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

/* User Auth */

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const LogInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('id', res.data.user.id);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetUserData = async () => {
  try {
    const res = await Client.get('/auth/getUsername');
    return res.data;
  } catch (error) {
    throw error;
  }
};
