import React, { useState, useEffect, useContext } from 'react';
import { FeedContext } from '../pages/Home';
import {UserContext} from '../App'
import { EditFeed, GetFeedDetail, GetAllFolders,GetFolderByUser, GetFolderDetail, CreateFolder } from '../Services/endpoints'

export default function EditFeedForm(props) {
  const {feedid} = useContext(FeedContext)
  const {user} = useContext(UserContext)
  const [openDrop, setOpenDrop] = useState(false);
  const [folderInput, setFolderInput] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('')
  const [folderlist, setFolderlist] = useState([])
  const [newFolder, setNewFolder] =useState({})
  const [feedslug, setFeedslug] = useState({
    "feed_name": "",
    "url": "",
    "folderId": ""
  })
  let buttonDisplay ='Select Folder'
  const displayFolder = () => {
    let folder = feedslug.folderId
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
    setFeedslug({...feedslug, [e.target.name]: e.target.value });
    console.log({...feedslug, [e.target.name]: e.target.value });
  }

  const folderDropdownHandler = (e) => {
		if (e.target.id === 'newFolder') {
			setFolderInput(true);
		} else {
			setFolderInput(false);
      folderSelector(e.target.id)
			setFeedslug({
				...feedslug,
				folderId: parseInt(e.target.id),
			});
		}
	};

  const postNewFolder = async (e) => {
    e.preventDefault()
    console.log(newFolder)
    const res = await CreateFolder(newFolder)
    setFolderInput(false)
    return res
  }

  const getFolders = async () => {
    const response = await GetFolderByUser(user.id);
    setFolderlist(response.data)
    return;
  }
  const getCurrentFeed = async (id) => {
    let tempFeed = {
      "feed_name": "",
      "url": "",
      "folderId": ""
    }
    try {
      const res = await GetFeedDetail(id)
      tempFeed.feed_name =res.data.feed_name
      tempFeed.url =res.data.url
      tempFeed.folderId=res.data.folderId
      folderSelector(res.data.folderId)
      setFeedslug(tempFeed)
    } catch (error){
      console.log(error)
    }
  }

  const folderInputChange = (e) => {
    setNewFolder({
      userId: user.id,
      [e.target.name]: e.target.value
    })
    console.log(user)
    console.log(newFolder)
  }
  const updateFeed = async (e)=>{
    e.preventDefault()
    await EditFeed(feedid,feedslug)
    console.log(feedslug)
  }
  useEffect(()=>{
    getCurrentFeed(feedid)
    getFolders()
    displayFolder()
    console.log(feedid)
    console.log(feedslug)
  },[feedid])
  return (
    <div className='edit-feed-form'>
      <form onSubmit={updateFeed}>
        <input 
          type="text"
          placeholder={feedslug.url}
          name="url"
          onChange={handleChange}/>
        <input
          type="text"
          placeholder={feedslug.feed_name}
          name="feed_name"
          onChange={handleChange}/>

        <div className='folder-dropdown-container'>
          <div
            className='normal-btn menu'
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
                New Folder
              </div>
            )}
            {folderInput && (
              <form onSubmit={postNewFolder}>
                <input
                  className='folder-input-form'
                  name='folder_name'
                  onChange={folderInputChange}
                  placeholder='Enter Folder name...'></input>
                  <button type="submit">+</button>
              </form>
            )}

          </div>
        </div>
        <button type="submit">Update feed</button>
      </form>
    </div>

  )
}
