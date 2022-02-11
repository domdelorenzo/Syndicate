import React, {useState} from 'react';
import FeedElement from './FeedElement'


export default function FeedList(props) {
  const [expanded, setExpanded]= useState(true)
  const toggleExpand = () => {
    setExpanded(bool => !bool)
  }

  return (
    <div>
      <section className='feed-contaier'>
      <div className='folder-name' onClick={toggleExpand} >{props.name}</div>
      {expanded ? 
            <div></div> :
      <div className='feed-list'>
      {props.subscriptions.map((feed)=>(
          <FeedElement
            url={feed}
          />
        ))}
        </div>
}
      </section>
    </div>
  )
}
