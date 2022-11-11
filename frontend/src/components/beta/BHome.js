import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// const state = {
//   selected: "Activity"
// }

export const BHome = () => {
  const [state, setState] = useState({selected: "Activity"})
  return (
    <>
      <div className='row border justify-content-end d-flex'>
        
        <div className='col-2 ms-auto'>
          <BSidebarL state={state} setState={setState}/>
        </div>

        {state === 'Activity' ?
        <div className='col-5'>
          <BActivityL />
        </div>
        :  
        <div className='col-5'>
          <BChatL />
        </div>
      }
      </div>
    </>
  )
}

function BSidebarL(props) {
  return (
    <>
    <h3>Sidebar</h3>
    <Link to="/teams/activity" onClick={() => {
      props.setState("Activity");
      // <Link to="/teams/activity" />
    }} href='#'>Activity</Link>
    <br/>
    <a onClick={() => {props.setState("Chat")}} href='#'>Chat</a>
    </>
  )
}
function BActivityL() {
  return (
    <h5>Activity content</h5>
  )
}
function BChatL() {
  return (
    <h5>Chat content</h5>
  )
}