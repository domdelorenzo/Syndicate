import React from 'react';
import FeedElement from './FeedElement'


export default function FeedList(props) {
 
  return (
    <div>
      <section className='feedlist'>
        {props.subscriptions.map((feed)=>(
          <FeedElement
            url={feed}
          />
        ))}
      </section>
    </div>
  )
}
