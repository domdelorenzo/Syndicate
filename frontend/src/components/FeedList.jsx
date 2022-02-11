import React, {useState} from 'react';
import FeedElement from './FeedElement'


export default function FeedList(props) {
  const [expanded, setExpanded]= useState(false)
  const toggleExpand = () => {
    setExpanded(bool => !bool)
    console.log(expanded)
  }

  return (
    <div>
      <section className='feed-contaier'>
      <div className='folder-name' onClick={toggleExpand} >{props.name}</div>
      {expanded ? 
            <div></div> :
      <div classname='feed-list'>
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
