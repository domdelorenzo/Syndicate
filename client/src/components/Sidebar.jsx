import React from 'react';
import FolderList from './FolderList';
import AddFeed from './AddFeed';
import { UserContext } from '../App';

export default function Sidebar(props) {
  
  return (
    <div> Sidebar 
      <FolderList/>
      <AddFeed/>
    </div>
  )
}
