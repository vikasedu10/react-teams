import Chats from "./chats.json";
import React, { useState } from 'react'

export const WriteMessage = (props) => {

    const [checkedSenderFlag, setCheckedSenderFlag] = useState(false)
    const sendMessage = (e) => {
        e.preventDefault();
        const enterprise = props.currentEnterprise;
        if (!props.message) {
            alert("Please type a message to send.")
        } else {
            var myChat
            // eslint-disable-next-line array-callback-return
            Chats.map((people) => {
                if (people["enterprise"] === enterprise) {
                    if (checkedSenderFlag) {
                        myChat = { from: "sender", message: props.message }
                    } else {
                        myChat = { from: "self", message: props.message }
                    }
                    people.chats.concat(myChat)
                    people.chats[people.chats.length + 1] = myChat
                }
            })
        }
        props.setPeopleChat(Chats)
        props.setMessage("");
    }
    return (
        <div>
            <div className="one-message-box container my-2 md-4 d-flex justify-content-start">
                <form onSubmit={(e) => { sendMessage(e) }} className="d-flex col-12">
                    <input
                        className="form-control me-2"
                        type="text"
                        value={props.message}
                        name='message'
                        id='message'
                        onChange={(e) => { props.setMessage(e.target.value) }}
                        placeholder="Type a message"
                        aria-label="Message"
                    />

                    <div className="form-check py-2 mx-2">
                        <input className="form-check-input" type="checkbox" onClick={() => setCheckedSenderFlag(true)} />
                        <label className="form-check-label" htmlFor="checked">
                            Sender
                        </label>
                    </div>
                    <button className="border-0" type="submit">
                        <i className="fa-icon-calling fa-solid fa-paper-plane"></i>
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
    )
}
