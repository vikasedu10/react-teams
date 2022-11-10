import React from 'react'
import { Outlet } from 'react-router-dom'
import { ChatContent } from './helper/chats/ChatContent'
import { ChatList } from './helper/chats/ChatList'

export const Chat = () => {
    return (
        <>
            
            <Outlet />
        </>
    )
}
