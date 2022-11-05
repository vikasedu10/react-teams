import React from 'react';
import { Outlet } from 'react-router-dom';
import { Chat } from './Chat';
import { SidePaneOptions } from './helper/SidePaneOptions';
import './Home.css';

export const Home = () => {
  const HomeStyle = {
    height: "80vh",
  }
  return (
    <div style={HomeStyle} className='row content-div'>

      <div className='col-1 all-option'>
        <SidePaneOptions />
      </div>
      <Outlet />
    </div>
  )
}
