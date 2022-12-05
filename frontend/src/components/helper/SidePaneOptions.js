import React from 'react'
import '../Icon.css';
import { Link } from "react-router-dom";

export const SidePaneOptions = (props) => {
    return (
        <div className='col-1'>
            <div className='d-flex border sidebar-icons container flex-column'>
                <div className="list-group">
                    <Link onClick={() => {
                        props.setCurrentState("todos");
                    }} to="/teams/todos" type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-solid fa-clipboard-list fa-icon-group"></i>
                            <span>Todos</span>
                        </div>
                    </Link>
                    <Link onClick={() => {
                        props.setCurrentState("ask");
                    }} to="/teams/users" type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-solid fa-user fa-icon-group"></i>
                            <span>Users</span>
                        </div>
                    </Link>
                    <Link onClick={() => {
                        props.setCurrentState("feed");
                    }} to="/teams/feed" type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-solid fa-comment fa-icon-group"></i>
                            <span>Feed</span>
                        </div>
                    </Link>
                    <Link onClick={() => {
                        props.setCurrentState("activity");
                    }} to="/teams/activity" type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-solid fa-chart-line fa-icon-group"></i>
                            <span>Activity</span>
                        </div>
                    </Link>
                    <Link onClick={() => {
                        props.setCurrentState("chat");
                    }} to="/teams/chat" type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-brands fa-rocketchat fa-icon-group"></i>
                            <span>Chat</span>
                        </div>
                    </Link>
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-solid fa-calendar-days fa-icon-group"></i>
                            <span>Calender</span>
                        </div>
                    </button>
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-solid fa-phone fa-icon-group"></i>
                            <span>Calls</span>
                        </div>
                    </button>
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-2'>
                            <i className="fa-regular fa-file fa-icon-group"></i>
                            <span>Files</span>
                        </div>
                    </button>
                </div>
                <div className="list-group">
                    <button type="button" className="border-0 list-group-item list-group-item-action">
                        <div className='row text-center my-3'>
                            <i className="fa-solid fa-ellipsis fa-icon-group"></i>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
