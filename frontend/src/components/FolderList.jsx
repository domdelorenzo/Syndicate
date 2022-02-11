import React, { useEffect, useState } from 'react';
import FeedList from './FeedList';
import { GetAllFolders } from '../Services/endpoints';

export default function FolderList(props) {
  const [folderlist, setFolderlist] = useState([])
  

  const getFolders = async () => {
    const response = await GetAllFolders();
    // console.log(response[0].subscriptions);
    setFolderlist(response)
    return;
  }
  useEffect(()=>{
    getFolders()
  },[])
  return (
    <div>
      <div> Folder List </div>;
      <section className='folderlist'>
        {folderlist.map((folder)=>(
          <div className='folder-container' key={folder.id}>
            <div className='folder-name'>{folder.folder_name}</div>
            <FeedList subscriptions={folder.subscriptions} />

          </div>
        ))}
      </section>
    </div>
  )
  
}
