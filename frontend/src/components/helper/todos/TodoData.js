import React from 'react'
import people_thumbnail_1 from '../../../static/images/people/1.jpg';

export const TodoHeaderSection = (props) => {
  return (
    <>
      <div className='d-flex justify-content-between my-3 mx-3'>

        <div className='d-flex justify-content-start'>
          <img alt='img-1' className='people-thumbnail' src={people_thumbnail_1} />
          <div className='my-auto mx-2'>
            <strong>Viva Engage</strong>
          </div>
          <div className='d-flex justify-content-start'>
            <div className='mx-1 my-auto'>
              <ul className="nav nav-tabs border-0">
                <li className="nav-item mx-0">
                  <span className="p-2 nav-link disabled" aria-current="page">Home</span>
                </li>
                <li className="nav-item mx-0">
                  <span className="p-2 nav-link disabled">Community</span>
                </li>
                <li className="nav-item mx-0">
                  <span className="p-2 nav-link disabled">Storylines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=''>
          <button type="button" className="btn btn-outline position-relative">
            <strong>Interactions</strong>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {props.totalFeeds}+
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export const TodoData = (props) => {
  return (
    <div className='activities-div'>
      <strong>{props.title}</strong>
      <div className='my-2 col-12'>
        {props.description}
        <hr />
      </div>
    </div>
  )
}


export const EditTodoData = (props) => {
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
