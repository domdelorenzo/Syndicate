import React from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals';

export default function FolderList(props) {

  const getFolders = async () => {
    const response = await axios.get(`${BASE_URL}/folders`);
    console.log(response);
    
    return;
  }
  return <div> Folder List </div>;
}
