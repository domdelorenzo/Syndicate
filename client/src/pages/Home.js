import React, { useState, createContext } from 'react';
import Sidebar from '../components/Sidebar';
import ReadingPane from '../components/ReadingPane';
export const FeedContext = createContext();

export default function Home(props) {
  const [feedurl, setFeedurl] = useState('');
  const [feedid, setFeedid] = useState('');
  return (
    <FeedContext.Provider value={{ feedurl, setFeedurl, feedid, setFeedid }}>
      <div>
        <header>Welcome Home</header>
        <div className="home-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="readingPane">{/* <ReadingPane /> */}</div>
        </div>
      </div>
    </FeedContext.Provider>
  );
}
