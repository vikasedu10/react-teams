import React from 'react'

export const ChatDiv = () => {
    return (
        <>
            <div className='mx-4 message-container border'>
                <div className='one-message-box container my-2 md-4 d-flex justify-content-start'>
                    <div className='mx-2'>
                        <img className='people-thumbnail-msg' src={people_thumbnail_4} alt="Tom" />
                    </div>
                    <div>
                        <span>Kumar S, Pratiksh</span>
                        <p className='message-style'>You: Hi Team, This is a test message done to test react application</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end my-2 one-message-box-self container my-2 md-4 d-flex justify-content-start'>
                    <div>
                        <span>Yesterday 16:04</span>
                        <p className='message-style'>You: Hi Team, This is a test message done to test react application</p>
                    </div>
                </div>
                <div className='one-message-box container my-2 md-4 d-flex justify-content-start'>
                    <div className='mx-2'>
                        <img className='people-thumbnail-msg' src={people_thumbnail_4} alt="Tom" />
                    </div>
                    <div>
                        <span>Kumar S, Pratiksh</span>
                        <p className='message-style'>You: Hi Team, This is a test message done to test react application</p>
                    </div>
                </div>
                <div className='one-message-box container my-2 md-4 d-flex justify-content-start'>
                    <div className='mx-2'>
                        <img className='people-thumbnail-msg' src={people_thumbnail_4} alt="Tom" />
                    </div>
                    <div>
                        <span>Kumar S, Pratiksh</span>
                        <p className='message-style'>Can I have access to all required tools?</p>
                    </div>
                </div>
            </div>
        </>
    )
}
