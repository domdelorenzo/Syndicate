import React, { useEffect, useState } from 'react';
import FeedList from './FeedList';
import { GetAllFolders } from '../Services/endpoints';

export default function FolderList(props) {
  const [folderlist, setFolderlist] = useState([])
 

  const getFolders = async () => {
    const response = await GetAllFolders();
    setFolderlist(response)
    return;
  }
  useEffect(()=>{
    getFolders()
  },[])
  return (
    <div>
      <div> Folders </div>
      <section className='folderlist'>
        {folderlist.map((folder)=>(
          <div className='folder-container'  key={folder.id}>
            <FeedList 
            name={folder.folder_name} subscriptions={folder.subscriptions} />
          </div>
        ))}  
      </section>
    </div>
  )
  
}
