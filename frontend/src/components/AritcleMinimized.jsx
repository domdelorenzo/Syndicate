import React from 'react';

export default function ArticleMinimized(props) {
  return (
    <div className='article-summary'>
      <div className='title'>{props.title}</div>
      <div className='metadata'>Date: {props.date}</div>
      <div className='summary'>{props.snippet}</div>
    </div>
  )


}
