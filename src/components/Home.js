import React, { useState } from 'react';
import { SidePaneOptions } from './helper/SidePaneOptions';
import { ChatList } from './helper/chats/ChatList';
import './Home.css';
import { ActivityContent, FeedContent } from './helper/feed/FeedContent';
import { ActivityList } from './helper/activity/ActivityList';

export const Home = () => {
  const [currrentState, setCurrentState] = useState({ selected: "chat" })

  if (currrentState === 'feed' || window.location.pathname.match('feed')) {
    return <div className='row content-div'><SidePaneOptions /><FeedContent /></div>

  } else if (currrentState === 'chat'|| window.location.pathname.match('chat')) {
    return <div className='row content-div'><SidePaneOptions /><ChatList /></div>

  } else if (currrentState === 'activity'|| window.location.pathname.match('activity')) {
    return <div className='row content-div'><SidePaneOptions /><ActivityList /></div>
  } else {
    return <div className='row content-div'><SidePaneOptions /><ChatList /></div>
  }
}
