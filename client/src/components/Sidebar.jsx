import React from 'react';
import FolderList from './FolderList';
import AddFeed from './AddFeed';


export default function Sidebar(props) {
 

  return (
    <div>
      <FolderList/>
      <AddFeed />
    </div>
  )
}
