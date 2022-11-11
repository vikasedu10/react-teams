import React, { useState } from 'react';
import { ChatList } from './helper/chats/ChatList';
import { ActivityList } from './helper/activity/ActivityList';
import { SidePaneOptions } from './helper/SidePaneOptions';
import './Home.css';
import { FeedContent } from './helper/feed/FeedContent';

export const Home = () => {
  const [currrentState, setCurrentState] = useState({selected: "chat"})
  const HomeStyle = {
    height: "80vh",
  }
  
  return (
    <div style={HomeStyle} className='row content-div'>
      <SidePaneOptions currrentState={currrentState} setCurrentState={setCurrentState} />

      { currrentState === "activity" || window.location.pathname.match('activity') ?
      <ActivityList />
      :
      (
      currrentState === 'feed' ? 
        <FeedContent /> : (
          currrentState === 'chat' ?
          <ChatList /> : <ChatList />
        )
      
      )
      }
    </div>
  )
}
