import React, { useEffect, useState } from 'react';
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
          <div className='folder' key={folder.id}>
            <p>{folder.folder_name}</p>
          </div>
        ))}
      </section>
    </div>
  )
  
}
