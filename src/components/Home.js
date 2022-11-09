import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Chat } from './Chat';
import { ChatContent } from './helper/ChatContent';
import { ChatList } from './helper/ChatList';
import { ActivityList } from './helper/ActivityList';
import { ChatListFull } from './helper/ChatListFull';
import { SidePaneOptions } from './helper/SidePaneOptions';
import './Home.css';

export const Home = () => {
  const [currrentState, setCurrentState] = useState({selected: "Chats"})
  const HomeStyle = {
    height: "80vh",
  }
  return (
    <div style={HomeStyle} className='row content-div'>
      <SidePaneOptions currrentState={currrentState} setCurrentState={setCurrentState} />

      { currrentState === "Activity" || window.location.pathname.match('activity') ?
      <ActivityList />
      :
      <ChatList />
      }
    </div>
  )
}
