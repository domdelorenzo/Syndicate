import e from 'cors';
import React, { useState, useEffect,useContext } from 'react';
import { CreateFeed, CreateFolder, GetAllFolders, GetFolderDetail } from '../Services/endpoints'
import { UserContext } from '../App';

export default function AddFeed(props) {
  const {user} = useContext(UserContext)
  const [openDrop, setOpenDrop] = useState(true);
  const [folderInput, setFolderInput] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('')
  const [folderlist, setFolderlist] = useState([])
  const [newFolder, setNewFolder] =useState({})
  const [newFeed, setNewFeed] = useState({
    "userId": 1,
    "folderId": "",
    "feed_name": "",
    "url": "",
    "favorite": false
  })
  let buttonDisplay ='Select Folder'
  const displayFolder = () => {
    let folder = newFeed.folderId
    if (folder === '') {
      buttonDisplay = 'Select Folder'
    } else {
      buttonDisplay = selectedFolder.folder_name
    }
  }
  displayFolder()

  const folderSelector = async (id) => {
    const res = await GetFolderDetail(id)
    setSelectedFolder(res.data)
  }
  const handleChange = (e) => {
    setNewFeed({...newFeed, [e.target.name]: e.target.value });
    console.log({...newFeed, [e.target.name]: e.target.value });
  }
  const folderDropdownHandler = (e) => {
		if (e.target.id === 'newFolder') {
			setFolderInput(true);
		} else {
			setFolderInput(false);
      folderSelector(e.target.id)
			setNewFeed({
				...newFeed,
				folderId: parseInt(e.target.id),
			});
		}
	};
  const folderInputChange = (e) => {
    setNewFolder({
      userId: user.id,
      [e.target.name]: e.target.value
    })
  }
  const postNewFolder = async () => {
    e.preventDefault()
    const res = await CreateFolder(newFolder)
    setFolderInput(false)
    return res
  }



  const addFeed = async (e)=>{
    e.preventDefault()
    await CreateFeed(newFeed)
    console.log(newFeed)
  }
  const getFolders = async () => {
    const response = await GetAllFolders();
    setFolderlist(response)
    console.log(response)
    return;
  }
  useEffect(()=>{
    getFolders()
    displayFolder()
  },[])
  return (
    <div className='add-feed-form'>
      <form onSubmit={addFeed}>
        <input 
          type="text"
          placeholder="Paste a RSS URL"
          name="url"
          onChange={handleChange}/>
        <input
          type="text"
          placeholder="Feed name"
          name="feed_name"
          onChange={handleChange}/>
        

        <div className='folder-dropdown-container'>
          <div
            className='select-folder-bttn'
            onClick={() => setOpenDrop((openDrop) => !openDrop)}>
            {buttonDisplay}
          </div>

          <div className='folder-dropdown-option-list'>
            {openDrop &&
              folderlist.map((e, i) => (
                <div
                  className='folder-dropdown-element'
                  onClick={folderDropdownHandler}
                  key={i}
                  id={e.id}>
                  {e.folder_name}
                </div>
              ))}
            {openDrop && (
              <div
                className='folder-dropdown-element'
                id='newFolder'
                onClick={folderDropdownHandler}>
                New tag
              </div>
            )}
            {folderInput && (
              <form onSubmit={postNewFolder}>
                <input
                  className='folder-input-form'
                  name='folder_name'
                  onChange={folderInputChange}
                  placeholder='Enter Folder name...'></input>
              </form>
            )}

          </div>
        </div>
        <button type="submit">Add feed</button>
      </form>
    </div>

  )
}
