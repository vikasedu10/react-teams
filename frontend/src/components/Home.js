import React, { useState } from 'react';
import { ChatList } from './helper/chats/ChatList';
import { ActivityList } from './helper/activity/ActivityList';
import { SidePaneOptions } from './helper/SidePaneOptions';
import { FeedContent } from './helper/feed/FeedContent';
import { UserContent } from './helper/users/UserContent';
import { TodoContent } from './helper/todos/TodoContent';

export const Home = () => {
  const [currrentState, setCurrentState] = useState({ selected: "chat" })
  const HomeStyle = {
    height: "80vh",
  }

  return (
    <div style={HomeStyle} className='d-flex content-div'>
      <SidePaneOptions currrentState={currrentState} setCurrentState={setCurrentState} />

      {currrentState === "activity" || window.location.pathname.match('activity') ?
        <ActivityList />
        :
        (
          currrentState === 'feed' || window.location.pathname.match('feed') ?
            <FeedContent /> : (
              currrentState === 'users' || window.location.pathname.match('users') ?
                <UserContent /> : (
                  currrentState === 'chat' || window.location.pathname.match('chat') ?
                    <ChatList /> : (
                      currrentState === 'todos' || window.location.pathname.match('todos') ?
                        <TodoContent /> : <UserContent />
                    )
                )
            )

        )
      }
    </div>
  )
}
