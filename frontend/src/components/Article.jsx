import React, { useState } from 'react';
import ArticleMinimized from './AritcleMinimized';
import ArticleExpanded from './ArticleExpanded'

export default function Article(props) {
  const [expanded, setExpanded]= useState(false)

  const toggleExpand = () => {
    setExpanded(bool => !bool)
    console.log(expanded)
  }
  return (
    <div className='article-card' onClick={toggleExpand}>

      {expanded ? 
      <ArticleExpanded
        title={props.title}
        fullcontent={props.fullcontent}
        date={props.date}
        /> : 
      <ArticleMinimized 
        title={props.title}
        snippet={props.snippet}
        date={props.date}
      />
    }

    </div>

    );
}
