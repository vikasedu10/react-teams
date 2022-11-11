import React from 'react'
import people_thumbnail_1 from '../../../static/images/people/1.jpg';

export const ChatBoxFromSender = (props) => {
  return (
    <div className='one-message-box container my-3 md-4 d-flex justify-content-start'>
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
    <div className='d-flex justify-content-end my-2 one-message-box-self container my-2 md-4 d-flex justify-content-start'>
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
