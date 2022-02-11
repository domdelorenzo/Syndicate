import React, { useState, useEffect} from 'react';
import axios from 'axios';


export default function FeedElement(props) {
  const [feed, setFeed] = useState({})
  const getSubscription = async () => {
    const res = await axios.get(props.url)
    console.log(res)
    setFeed(res.data)
    return(res)
  }

  useEffect(()=>{
    getSubscription()
  },[])
  return (
    <div>
      <div className='feed-entry'>{feed.name}</div>
    </div>
  )
}
