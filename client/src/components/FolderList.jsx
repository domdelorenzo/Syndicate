import React, { useEffect, useState, useContext } from 'react';
import FeedList from './FeedList';
import { GetAllFolders, GetFolderByUser } from '../Services/endpoints';
import { UserContext } from '../App';


export default function FolderList(props) {
  const { user }= useContext(UserContext)
  const [folderlist, setFolderlist] = useState([])
  console.log(user)
  const getFolders = async () => {
      const response = await GetFolderByUser(user.id);
      setFolderlist(response.data)
      console.log(response)

  }
  console.log(folderlist)
  console.log(user)
  useEffect(()=>{
    getFolders()
  },[])
  return (
    <div>
      <div> Folders </div>
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
