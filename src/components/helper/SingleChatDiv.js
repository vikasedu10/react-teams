import React from 'react'

export const ChatBoxFromSender = (props) => {
  return (
    <div key={props.index} className='one-message-box container my-3 md-4 d-flex justify-content-start'>
      <div className='mx-2'>
        <img className='people-thumbnail-msg' src={props.image} alt="Tom" />
      </div>
      <div>
        <span>{props.name}</span>
        <p className='message-style'>{props.message}</p>
      </div>
    </div>
  )
}

export const ChatBoxFromSelf = (props) => {
  return (
    <div key={props.index} className='d-flex justify-content-end my-2 one-message-box-self container my-2 md-4 d-flex justify-content-start'>
        <div>
            <span>Yesterday 16:04</span>
            <p className='message-style'>You: {props.message}</p>
        </div>
    </div>
  )
}

export const ProfileSection = (props) => {
  return (
    <div className='d-flex justify-content-between my-3 mx-3'>
        <div className='d-flex justify-content-start'>
            <img className='people-thumbnail border border-dark' src={props.image} />
            <div className='my-auto mx-2'>
                <strong>{props.name}</strong>
            </div>
            <div className='mx-1 my-auto'>
                <ul className="nav nav-tabs border-0">
                    <li className="nav-item mx-0">
                        <a className="p-2 nav-link active" aria-current="page" href="#">Chat</a>
                    </li>
                    <li className="nav-item mx-0">
                        <a className="p-2 nav-link" href="#">Files</a>
                    </li>
                    <li className="nav-item mx-0">
                        <a className="p-2 nav-link" href="#">Organization</a>
                    </li>
                    <li className="nav-item mx-0">
                        <a className="p-2 nav-link">Activity</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className=''>
            <i className="fa-icon-calling fa-solid fa-video"></i>
            <i className="fa-icon-calling fa-solid fa-phone"></i>
            <i className="fa-icon-calling fa-solid fa-person-military-to-person"></i>
        </div>
    </div>
  )
}
