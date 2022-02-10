import React from 'react';
import Sidebar from '../components/Sidebar';
import FeedList from '../components/FeedList';
export default function Home(props) {
  return (
    <div>
      <header>Welcome Home</header>
      <div className="home-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="feedlist">
          <FeedList />
        </div>
      </div>
    </div>
  );
}
