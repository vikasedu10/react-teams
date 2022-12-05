import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import people_thumbnail_1 from '../../../static/images/people/1.jpg';
import '../../Icon.css';
import { AboutTheSection } from '../activity/AboutTheSection';
import { ChatContent } from './ChatContent';
import Chats from "./chats.json";

export const ChatList = (props) => {
    const [currentChatState, setCurrentChatState] = useState({ selected: 'defaultFirst' })
    const navigate = useNavigate()
    return (
        <>
            <div className='col-3'> {/* Add 'row' class if anything breaks */}
                <div className='d-flex justify-content-between pt-3 my-3 px-3'>
                    <h4>Chat</h4>
                    <div>
                        <i className="fa-solid fa-arrow-down-short-wide"></i>
                    </div>
                </div>

                <div className='border option-content-chats-div'>
                    <div className=''>
                        <div className='d-flex py-3'>
                            <div className='mx-2'>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            <span>Pinned</span>
                        </div>
                        <AboutTheSection />
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
                    <div className='d-flex py-3'>
                        <div className='mx-2'>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <span>Recent</span>
                    </div>

                    <div className="list-group option-list">
                        {Chats.map((e, index) => {
                            return (
                                <Link onClick={() => {
                                    navigate('/teams/chat/' + e.enterprise, { state: [e, 'fromButtonClick'] });
                                    setCurrentChatState(e.enterprise);
                                }} key={index} type="button" className="option-list border-0 list-group-item list-group-item-action">
                                    <div className='container p-0 my-1 d-flex justify-content-start'>
                                        <div className='mx-1'>
                                            <img className='people-thumbnail' src={e.image} alt="Tom" />
                                        </div>
                                        <div>
                                            <strong>{e.name}</strong>
                                            <p>
                                                {e.chats[e.chats.length - 1]["from"] === "self" ? "You: " : ""}
                                                {e.chats[e.chats.length - 1]['message'].slice(0, 80)}
                                                {e.chats[e.chats.length - 1]['message'].length > 80 ? "..." : ""}
                                            </p>
                                        </div>
                                    </div>
                                </Link>


                            )
                        })}
                    </div>

                </div>
            </div>
            {currentChatState["selected"] === 'defaultFirst' ?
                <ChatContent currentChatState={currentChatState} setCurrentChatState={setCurrentChatState} />
                :
                <ChatContent enterprise={currentChatState} data={Chats[0]} currentChatState={currentChatState} setCurrentChatState={setCurrentChatState} />

            }
        </>
    )
}
