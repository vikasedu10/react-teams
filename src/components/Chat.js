import React from 'react'
import { ChatContent } from './helper/ChatContent'
import { ChatList } from './helper/ChatList'

export const Chat = () => {
    return (
        <>
            <div className='col-3 option-list option-list-outer-div'>
                <ChatList />
            </div>

            <div className='col-8 option-content border'>
                <ChatContent />
            </div>
        </>
    )
}
