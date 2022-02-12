import React from 'react';

export default function ArticleExpanded(props) {
  return (
    <div className='article-summary'>
    <div className='title'>{props.title}</div>
    <div className='metadata'>Date: {props.date}</div>
    <div className='full-content' dangerouslySetInnerHTML={{__html: `${props.fullcontent}`}}></div>
  </div>
  )
}
