import React, { useEffect, useState, useContext } from 'react';
import FeedList from './FeedList';
import { GetUserData, GetFolderByUser } from '../Services/endpoints';
import { UserContext } from '../App';


export default function FolderList(props) {
  const { user }= useContext(UserContext)
  const [folderlist, setFolderlist] = useState([])

  const getFolders = async () => {
      const response = await GetFolderByUser(user.id);
      setFolderlist(response.data)
  }
const checkUserData = async () => {
  const res = await GetUserData()
}

  useEffect(()=>{
    getFolders()
    checkUserData()
  },[])
  return (
    <div>
      { (folderlist.length>0) ?
          <section className='folderlist'>
          {folderlist.map((folder)=>(
            <div className='folder-container'  key={folder.id}>
              <FeedList 
              name={folder.folder_name} id={folder.id} />
            </div>
          ))}
          </section>
          :
          <div>No folders</div>
      }
    </div>
  )
  
}
