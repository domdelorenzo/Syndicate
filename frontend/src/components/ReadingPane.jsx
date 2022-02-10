import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {read} from 'feed-reader'
import Parser from 'rss-parser'

export default function ReadingPane(props) {
  const [articles, setArticles] = useState([])
  

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
    const url = 'https://cors-anywhere.herokuapp.com/https://goingmedievalblog.wordpress.com/feed/'
    // const url = 'https://goingmedievalblog.wordpress.com/feed/'
    // const url = 'https://cors-anywhere.herokuapp.com/https://cdn.hackernoon.com/feed'
    // const url = 'https://www.wired.com/feed'
    // getFeedData(url)
    const parser = new Parser()
    const filterPosts = (items, limit)=>{
    }
    const fetchArticles = async ()=> {
      // const url = 'https://cors-anywhere.herokuapp.com/https://goingmedievalblog.wordpress.com/feed/'
      // const feed = await parser.parseURL(url)
      // const posts = filterPosts(feed.items, 5)
      // setArticles(posts)
      // console.log(articles)

      /* successful RSS-parser request */
    //   const feed = await parser.parseURL(url, function(err, feed) {
    //     console.log(feed.title);
    //     feed.items.forEach(function(entry) {
    //     console.log(entry.title + ':' + entry.link);
    //   })
    // })

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
    
    }
    fetchArticles()
    
  },[])

  console.log(articles)
  return (
    <div>
      <div> Folder List </div>;
      <section className='articlelist'>
      {articles.map((article)=>(
          <div className='article' key={article.id}>
            <h3>{article.title}</h3>
            {article.contentSnippet}
            <h6>{article.pubDate}</h6>
          </div>
        ))}
 
      </section>
    </div>
  )
  
}
