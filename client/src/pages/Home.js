import React, { useState, createContext } from 'react';
import Sidebar from '../components/Sidebar';
import ReadingPane from '../components/ReadingPane';
// import FeedContext from '../context/FeedContext';
// import { FeedContext } from '../context/FeedContext';
export const FeedContext = createContext();

export default function Home(props) {
  const [feedurl, setFeedurl] = useState('');
  return (
    <FeedContext.Provider value={{ feedurl, setFeedurl }}>
      <div>
        <header>Welcome Home</header>
        <div className="home-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="readingPane">
            <ReadingPane />
          </div>
        </div>
      </div>
    </FeedContext.Provider>
  );
}
