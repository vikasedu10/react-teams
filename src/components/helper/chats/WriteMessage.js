import React from 'react'

export const WriteMessage = (props) => {
  return (
    <div>
        <div className="one-message-box container my-2 md-4 d-flex justify-content-start">
            <form onSubmit={props.sendMessage} className="d-flex col-12">
                <input
                    className="form-control me-2"
                    type="text"
                    value={props.message}
                    name='message'
                    id='message'
                    onChange={(e) => {props.setMessage(e.target.value)}}
                    placeholder="Type a message"
                    aria-label="Message"
                />
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
