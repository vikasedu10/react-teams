import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Chats from "./chats.json";
import people_thumbnail_1 from '../../../static/images/people/1.jpg';

export const ChatListFull = () => {
    return (
        <>
            <div className='row col-11'>
                <div className='col-3'>
                    <h1>Chat list</h1>
                    {Chats.map((e, index) => {
                        return (
                            <>
                                <Link to="/teams/chat" className=''>
                                    <strong>{e.name}</strong>
                                    <p>
                                        {e.chats[e.chats.length - 1]["from"] === "self" ? "You: " : ""}
                                        {e.chats[e.chats.length - 1]['message'].slice(0, 80)}
                                        {e.chats[e.chats.length - 1]['message'].length > 80 ? "..." : ""}
                                    </p>
                                    </Link>
                            </>
                        )
                    })}
                </div>
                <div className='col-8'>
                    <h1>Chat Content</h1>
                    <div className='d-flex justify-content-between my-3 px-3'>
                    <h4>Chat</h4>
                    <div>
                        <i className="fa-solid fa-arrow-down-short-wide"></i>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='d-flex justify-content-start'>
                        <div className='mx-2'>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <span>Pinned</span>
                    </div>
                    <div className="list-group option-list">
                        <button type="button" className="option-list border-0 list-group-item list-group-item-action">
                            <div className='container my-1 p-0 d-flex justify-content-start'>
                                <div className='mx-1'>
                                    <img className='people-thumbnail' src={people_thumbnail_1} alt="Tom" />
                                </div>
                                <div>
                                    <strong>Bahuguna, Vikas (You)</strong>
                                    <p>You: Hi Team, This is a test message...</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}
