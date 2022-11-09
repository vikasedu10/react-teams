import React from 'react'
import '../Icon.css';
import { Link } from "react-router-dom";

export const SidePaneOptions = (props) => {
    return (
        <div className='col-1 all-option'>

            <div className='d-flex flex-column'>
                <div className="list-group">
                    <Link onClick={() => {
                        props.setCurrentState("Activity");
                    }} to="/teams/activity" type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-icon-group fa-solid fa-chart-line"></i>
                            <span>Activity</span>
                        </div>
                    </Link>
                    <Link onClick={() => {
                        props.setCurrentState("Chat");
                    }} to="/teams/chat" type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-icon-group fa-brands fa-rocketchat"></i>
                            <span>Chat</span>
                        </div>
                    </Link>
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-icon-group fa-solid fa-calendar-days"></i>
                            <span>Calender</span>
                        </div>
                    </button>
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-icon-group fa-solid fa-phone"></i>
                            <span>Calls</span>
                        </div>
                    </button>
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-icon-group fa-regular fa-file"></i>
                            <span>Files</span>
                        </div>
                    </button>
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-icon-group fa-solid fa-diagram-project"></i>
                            <span>Ask</span>
                        </div>
                    </button>
                </div>
                <div className="list-group">
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-icon-group fa-solid fa-ellipsis"></i>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
