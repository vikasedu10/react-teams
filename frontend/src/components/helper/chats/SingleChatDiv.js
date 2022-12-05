import React from 'react'

import people_thumbnail_1 from '../../../static/images/people/1.jpg';

export const ChatBoxFromSender = (props) => {
  return (
    <div key={props.index} className='one-message-box py-1 px-2 d-flex justify-content-start'>
      <div className='mx-2'>
        <img className='people-thumbnail-msg' src={props.image} alt="Tom" />
      </div>
      <div>
        <span><strong>{props.name}</strong></span>
        <p className='message-style'>{props.message}</p>
      </div>
    </div>
  )
}

export const ChatBoxFromSelf = (props) => {
  return (
    <div key={props.index} className='ms-auto col-6 my-2 one-message-box-self d-flex'>
      <div>
        <span><strong>Yesterday 16:04</strong></span>
        <p className='message-style'>You: {props.message}</p>
      </div>
    </div>
  )
}

export const ProfileSection = (props) => {
  return (
    <div key={props.index} className='d-flex justify-content-between my-3 mx-3'>
      <div className='d-flex justify-content-start'>
        <img alt='thumb' className='people-thumbnail border border-dark' src={props.image} />
        <div className='my-auto mx-2'>
          <strong>{props.name}</strong>
        </div>
        <div className='mx-1 my-auto'>
          <ul className="nav nav-tabs border-0">
            <li className="nav-item mx-0">
              <i className="p-2 nav-link active" aria-current="page" href="#">Chat</i>
            </li>
            <li className="nav-item mx-0">
              <i className="p-2 nav-link" href="#">Files</i>
            </li>
            <li className="nav-item mx-0">
              <i className="p-2 nav-link" href="#">Organization</i>
            </li>
            <li className="nav-item mx-0">
              <i className="p-2 nav-link">Activity</i>
            </li>
          </ul>
        </div>
      </div>
      <div className=''>
        <i className="fa-solid fa-video fa-icon-calling"></i>
        <i className="fa-solid fa-phone fa-icon-calling"></i>
        <i className="fa-solid fa-person-military-to-person fa-icon-calling"></i>
      </div>
    </div>
  )
}

export const ActivitySection = () => {
  return (
    <>
      <div className='d-flex justify-content-between my-3 mx-3'>

        <div className='d-flex justify-content-start'>
          <img alt='img-1' className='people-thumbnail' src={people_thumbnail_1} />
          <div className='my-auto mx-2'>
            <strong>Viva Engage</strong>
          </div>
          <div className='d-flex justify-content-start'>
            <div className='mx-1 my-auto'>
              <ul className="nav nav-tabs border-0">
                <li className="nav-item mx-0">
                  <span className="p-2 nav-link disabled" aria-current="page">Home</span>
                </li>
                <li className="nav-item mx-0">
                  <span className="p-2 nav-link disabled">Community</span>
                </li>
                <li className="nav-item mx-0">
                  <span className="p-2 nav-link disabled">Storylines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=''>
          <i className="fa-icon-calling fa-solid fa-magnifying-glass"></i>
          <i className="fa-icon-calling fa-solid fa-bell"></i>
          <i className="fa-icon-calling fa-solid fa-inbox"></i>
          <i className="fa-icon-calling fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </>
  )
}
