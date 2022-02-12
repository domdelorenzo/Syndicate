import React from 'react';
import Sidebar from '../components/Sidebar';
import ReadingPane from '../components/ReadingPane';

export default function Home(props) {
  return (
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
  );
}
