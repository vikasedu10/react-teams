import React from 'react'
import people_thumbnail_4 from '../../static/images/people/4.jpg';
import people_thumbnail_1 from '../../static/images/people/1.jpg';
import '../Icon.css';
import { useLocation } from 'react-router-dom';

export const ChatContent = () => {
    const location = useLocation()
    const testStyle = {
        height: "85%"
    }

    return (
        <>
            <div className='d-flex justify-content-between my-3 mx-3'>
                <div className='d-flex justify-content-start'>
                    <img className='people-thumbnail border border-dark' src={location.state["image"]} />
                    <div className='my-auto mx-2'>
                        <strong>{location.state["name"]}</strong>
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


            <div className="option-content-chats-div border d-flex align-items-start flex-column mb-1 ms-auto mx-4 message-container border" style={testStyle}>

                {location.state["chats"].map((msg) => {
                    return msg["from"] === "sender" ? (
                        <div className='one-message-box container my-3 md-4 d-flex justify-content-start'>
                            <div className='mx-2'>
                                <img className='people-thumbnail-msg' src={location.state["image"]} alt="Tom" />
                            </div>
                            <div>
                                <span>{location.state["name"]}</span>
                                <p className='message-style'>{msg.message}</p>
                            </div>
                        </div>
                    )
                    :
                    (
                    <div className='d-flex justify-content-end my-2 one-message-box-self container my-2 md-4 d-flex justify-content-start'>
                        <div>
                            <span>Yesterday 16:04</span>
                            <p className='message-style'>You: {msg.message}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div>
                <div className="one-message-box container my-2 md-4 d-flex justify-content-start">
                    <form className="d-flex col-12" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="border-0" type="submit">
                        <i class="fa-icon-calling fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
                <div className='d-flex mx-3 justify-content-start'>
                <i className="fa-icon-calling fa-solid fa-paperclip"></i>
                <i className="fa-icon-calling fa-regular fa-face-smile"></i>
                <i className="fa-icon-calling fa-brands fa-github"></i>
                <i className="fa-icon-calling fa-solid fa-share-from-square"></i>
                <i className="fa-icon-calling fa-solid fa-hourglass-start"></i>
                <i className="fa-icon-calling fa-solid fa-note-sticky"></i>
                <i className="fa-icon-calling fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </>
    )
}
