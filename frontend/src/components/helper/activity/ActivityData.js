import React from 'react'

export const ActivityData = (props) => {
  return (
    <div className='activities-div'>
      <div className='d-flex justify-content-between'>
        <strong>{props.activity.title}</strong>
        <button onClick={() => {props.deleteActivity(props.activity)}} className="fa-solid fa-trash p-2 border"></button>
    </div>
        <div className='col-11'>
            {props.activity.description}
            <hr />
        </div>
    </div>
  )
}

export const EditActivityData = (props) => {
  return (
    <div className='activities-div'>
      <form className='border'>
        <div className="mb-3">
            <input type="text" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} className="form-control" id="title" placeholder="Your title here." />
        </div>
        <div className="mb-3">
            <textarea value={props.description} onChange={(e) => { props.setDescription(e.target.value) }} className="form-control" placeholder='Your activity to post' id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type='submit' className='btn btn-success btn-sm'>Add activity</button>
    </form>
    </div>
  )
}
