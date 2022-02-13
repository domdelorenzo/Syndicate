import React, { useState, useEffect, useContext } from 'react';
import { FeedContext } from '../pages/Home';
import { EditFeed, GetFeedDetail, GetAllFolders, GetFolderDetail } from '../Services/endpoints'

export default function EditFeedForm(props) {
  const {feedid} = useContext(FeedContext)

  const [openDrop, setOpenDrop] = useState(true);
  const [folderInput, setFolderInput] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('')
  const [folderlist, setFolderlist] = useState([])
  const [feedslug, setFeedslug] = useState({
    "feed_name": "",
    "url": "",
    "folderId": ""
  })
  let buttonDisplay ='Select Folder'
  const displayFolder = () => {
    let folder = feedslug.folder_id
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

 
  const getFolders = async () => {
    const response = await GetAllFolders();
    setFolderlist(response)
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
      setFeedslug(tempFeed)
    } catch (error){
      console.log(error)
    }
    
    // console.log(id)
    // console.log(res)
    
    // console.log(feedslug)
  }

  const updateFeed = async (e)=>{
    e.preventDefault()
    // console.log('add!')
    // await EditFeed(feedid,feedslug.feed_name, feedslug.feed_url, feedslug.folder_id)
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
            {/* {openDrop && (
              <div
                className='folder-dropdown-element'
                id='newFolder'
                onClick={folderDropdownHandler}>
                New tag
              </div>
            )} */}
            {/* {folderInput && (
              <form onSubmit={postNewFolder}>
                <input
                  className='folder-input-form'
                  name='folder'
                  onChange={folderInputChange}
                  placeholder='Enter Folder name...'></input>
              </form>
            )} */}

          </div>
        </div>
        <button type="submit">Update feed</button>
      </form>
    </div>

  )
}
