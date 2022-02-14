import React, { useContext } from 'react';
import { FeedContext } from '../pages/Home';
import { DeleteFeed } from '../Services/endpoints';
import EditFeedForm from './EditFeedForm';

export default function FeedSettingsPanel(props) {
  const {feedid} = useContext(FeedContext)
  const deleteFeed = async (e) =>{
    e.preventDefault()
    const res = await DeleteFeed(feedid)
    console.log(`Delete ${feedid}`)
    return res
  }

  return (
    <div>
      <div className='normal-btn edit-btn'>Edit</div>
      <div className='highlight-btn delete-btn' onClick={deleteFeed}>Delete</div>
      
      <EditFeedForm/>
    </div>
  )
}