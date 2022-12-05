import React, { useState, useEffect } from 'react'
import '../../Icon.css';
// import { useLocation } from 'react-router-dom';
import { WriteMessage } from './WriteMessage';
import Chats from "./chats.json";
import { ChatBoxFromSelf, ChatBoxFromSender, ProfileSection } from './SingleChatDiv';

export const ChatContent = (props) => {
    // const location = useLocation()
    const testStyle = {
        height: "85%"
    }

    const testStyles = {
        height: "85%",
        border: "10px solid red"
    }

    const [message, setMessage] = useState("");

    const [peopleChat, setPeopleChat] = useState([]);
    useEffect(() => {
        setPeopleChat(Chats)
    }, [peopleChat]);



    return (
        <>
            <div className='col-8'>
                {props.currentChatState["selected"] !== 'defaultFirst' ?
                    // eslint-disable-next-line array-callback-return
                    Chats.map((e, index) => {
                        if (e["enterprise"] === props.currentChatState) {
                            return (
                                <div key={index}>
                                    <ProfileSection name={e["name"]} image={e["image"]} />

                                    <div className="option-content-chats-div align-items-start flex-column pb-1 ms-auto px-4 border" style={testStyle}>
                                        {e["chats"].map((msg, i) => {
                                            return msg["from"] === "sender" ?
                                                <div key={index + i}>
                                                    <ChatBoxFromSender index={i} image={e["image"]} message={msg.message} name={e["name"]} />
                                                </div>
                                                :
                                                <div key={index + i}>
                                                    <ChatBoxFromSelf index={i} message={msg.message} />
                                                </div>
                                        })}
                                    </div>
                                    <WriteMessage currentEnterprise={e["enterprise"]} setMessage={setMessage} setPeopleChat={setPeopleChat} message={message} />
                                </div>
                            )
                        }
                    })
                    :
                    <>
                        <ProfileSection name={Chats[0]["name"]} image={Chats[0]["image"]} />
                        <div className="option-content-chats-div align-items-start flex-column mb-1 ms-auto mx-4 border" style={testStyles}>

                            {Chats[0]["chats"].map((msg, index) => {
                                return msg["from"] === "sender" ?
                                    <ChatBoxFromSender key={index} image={Chats[0]["image"]} message={msg.message} name={Chats[0]["name"]} />
                                    :
                                    <ChatBoxFromSelf key={index} message={msg.message} />
                            })}
                        </div>
                        <WriteMessage currentEnterprise={"manpreet.b.bhatia@accenture.com"} setMessage={setMessage} setPeopleChat={setPeopleChat} message={message} />
                    </>
                }
            </div>
        </>
    )
}
