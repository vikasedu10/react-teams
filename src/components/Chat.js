import React from 'react'
import { Outlet } from 'react-router-dom'
import { ChatContent } from './helper/ChatContent'
import { ChatList } from './helper/ChatList'

export const Chat = () => {
    return (
        <>
            
            <Outlet />
        </>
    )
}
