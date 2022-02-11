import React, { useState, useEffect } from 'react';
import { GetAllFolders, GetFolderDetail } from '../Services/endpoints'
import axios from 'axios';
import Cookies from 'js-cookie';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.xsrfCookieName = 'csrftoken';

export default function AddFeed(props) {
  const csrftoken = Cookies.get('csrftoken');
  const [openDrop, setOpenDrop] = useState(true);
  const [folderInput, setFolderInput] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('')
  const [folderlist, setFolderlist] = useState([])
  const [newFeed, setNewFeed] = useState({
    "user_id": 1,
    "folder_id": "",
    "name": "",
    "url": "",
    "favorite": false
  })
  let buttonDisplay ='Select Folder'
  const displayFolder = () => {
    let folder = newFeed.folder_id
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
				folder_id: parseInt(e.target.id),
			});
		}
	};
  const AddSubscription = async (feed) => {
    console.log(csrftoken)
    try {
      const res = await axios.post('http://localhost:8000/api/subscriptions/', { feed }, {
        headers: {
          'content-type': 'text/json',
          'X-CSRFToken': 'Leal6RM9X7o4eWmQPFNDN2B91xTW5DryKjiTsg1dAzqoihB9tJ7yWXpi9ifvmtQZ'
        }})
      return res;
    } catch (error) {
      throw error;
    }
  };
  const addFeed = async (e)=>{
    e.preventDefault()
    // console.log('add!')
    await AddSubscription(newFeed)
    console.log(newFeed)
  }
  const getFolders = async () => {
    const response = await GetAllFolders();
    setFolderlist(response)
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
          name="name"
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
        <button type="submit">Add feed</button>
      </form>
    </div>

  )
}
