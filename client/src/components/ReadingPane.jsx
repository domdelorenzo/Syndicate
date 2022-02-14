import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
// import {read} from 'feed-reader'
import Parser from 'rss-parser'
import Article from './Article';
import { FeedContext } from '../pages/Home';
import FeedSettingsPanel from './FeedSettingsPanel';

export default function ReadingPane(props) {
  const [articles, setArticles] = useState([])
  const {feedurl}= useContext(FeedContext)


  useEffect(()=>{
    const url = 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml'
    const fetchArticles = async ()=> {
    if (feedurl){
      const feed = await axios.get(feedurl)
      // const feed = await axios.get(url)
      .then((res) => {
        let parser = new Parser();
        parser.parseString(res.data, (err, feed)=> {
          setArticles(feed.items);
        });
      })
      .catch((err) => {
        console.log(err);
      })

    }
    
    }
    fetchArticles()
    console.log(articles)
    

    
  },[feedurl])

  return (
    <div>
      <FeedSettingsPanel/>
      <section className='articlelist'>
      {articles.map((article)=>(
          <div className='article' key={article.guid}>
            <Article 

              title={article.title}
              fullcontent={article['content:encoded']}
              // fullcontent={article['content']}
              snippet={article.contentSnippet}
              // snippet={article.contentSnippet}
              date={article.pubDate}
            />
          </div>
        ))}
 
      </section>
    </div>
  )
  
}
