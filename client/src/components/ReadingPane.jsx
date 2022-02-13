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

  // const getFeedData = async (url) => {
  //   try {
  //     console.log(`Get feed data from ${url}`)
  //     const data = await read(url)
  //     console.log(data)
  //     return data
  //   } catch (err) {
  //     console.trace(err)
  //   }
  // }
  useEffect(()=>{
    // const url = 'https://cors-anywhere.herokuapp.com/https://goingmedievalblog.wordpress.com/feed/'
    // const url = 'https://goingmedievalblog.wordpress.com/feed/'
    // const url = 'https://cors-anywhere.herokuapp.com/https://cdn.hackernoon.com/feed'
    // const url = 'https://cors-anywhere.herokuapp.com/https://news.google.com/rss/search?q=ketogenic+diet&hl=en-US&gl=US&ceid=US:en'
    const url = 'https://www.wired.com/feed'
    // getFeedData(url)
    // const parser = new Parser()
    // const baseurl = 'https://cors-anywhere.herokuapp.com'
    // const filterPosts = (items, limit)=>{
    // }
    const fetchArticles = async ()=> {
    if (feedurl){
      // const feed = await axios.get(feedurl)
      const feed = await axios.get(url)
      .then((res) => {
        let parser = new Parser();
        parser.parseString(res.data, (err, feed)=> {
          setArticles(feed.items);
        });
      })
      .catch((err) => {
        console.log(err);
      })
      // console.log(feed)
    }
    
    }
    fetchArticles()
    
    
    // console.log(feedurl)
    
  },[feedurl])
  // console.log(feedurl)
  // console.log(articles)
  return (
    <div>
      <header>Hello {feedurl}!</header>
      <FeedSettingsPanel/>
      <section className='articlelist'>
      {articles.map((article)=>(
          <div className='article' key={article.guid}>
            <Article 

              title={article.title}
              // fullcontent={article['content:encoded']}
              fullcontent={article['content']}
              // snippet={article.content}
              snippet={article.contentSnippet}
              date={article.pubDate}
            />
            {/* <h3>{article.title}</h3> */}
            {/* <span>{article['content:encoded']}</span> */}
            {/* <div dangerouslySetInnerHTML={{__html: `${article['content:encoded']}`}} ></div> */}
            {/* <h6>{article.pubDate}</h6> */}
          </div>
        ))}
 
      </section>
    </div>
  )
  
}
