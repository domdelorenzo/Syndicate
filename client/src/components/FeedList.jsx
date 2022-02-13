import React, {useState, useEffect} from 'react';
import FeedElement from './FeedElement'
import { GetAllSubscriptions, GetFeedByFolder } from '../Services/endpoints';


export default function FeedList(props) {
  const [expanded, setExpanded]= useState(true)
  const [feeds, setFeeds] = useState([])
  const toggleExpand = () => {
    setExpanded(bool => !bool)
  }
  const fetchFeeds = async () => {
    const res = await GetFeedByFolder(props.id)
    setFeeds(res.data)
  }
  useEffect(()=>{
    fetchFeeds()
  },[])
  return (
    <div>
      <section className='feed-contaier'>
      <div className='folder-name' onClick={toggleExpand} >{props.name}</div>
      {expanded ? 
            <div></div> :
      <div className='feed-list'>
      {feeds.map((feed)=>(
          <FeedElement
            key={feed.id}
            feed_name={feed.feed_name}
            url={feed.url}
            id={feed.id}
          />
        ))}
        </div>
}
      </section>
    </div>
  )
}
