import React, { useEffect, useState } from 'react';
import { GetAllSubscriptions } from '../Services/endpoints';


export default function FeedList(props) {
  const [feedlist, setFeedlist] = useState([])
  const getFeed = async ()=>{
    const response = await GetAllSubscriptions()
    // console.log(response)
    setFeedlist(response)
  }
  useEffect(()=>{
    getFeed()
  },[])
  return (
    <div>
      <div> Feed List </div>
      <section className='feedlist'>
        {feedlist.map((feed)=>(
          <div className='feedcard' key={feed.id}>
            <p>{feed.name}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
