import React from 'react';
import axios from 'axios'
import { GetAllFolders } from '../Services/endpoints';

export default function FolderList(props) {

  const getFolders = async () => {
    const response = await GetAllFolders();
    console.log(response);
    
    return;
  }
  getFolders()
  return <div> Folder List </div>;
}
