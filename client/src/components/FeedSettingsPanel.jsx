import React, { useContext } from 'react';
import { FeedContext } from '../pages/Home';
import { DeleteFeed } from '../Services/endpoints';

export default function FeedSettingsPanel(props) {
  const {feedid} =useContext(FeedContext)
  const deleteFeed = async (e) =>{
    e.preventDefault()
    const res = await DeleteFeed(feedid)
    console.log(`Delete ${feedid}`)
    return res
  }

  return (
    <div>
      <div className='delete-btn' onClick={deleteFeed}>Delete</div>
      <div className='edit-btn'>Edit</div>
    </div>
  )
}