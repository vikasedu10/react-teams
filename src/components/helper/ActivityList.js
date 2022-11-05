import React from 'react'
import { Outlet } from 'react-router-dom';
import people_thumbnail_1 from '../../static/images/people/1.jpg';
import people_thumbnail_2 from '../../static/images/people/2.jpg';
import people_thumbnail_3 from '../../static/images/people/3.jpg';
import people_thumbnail_4 from '../../static/images/people/4.jpg';
import '../Icon.css';

export const ActivityList = () => {
    return (
        <div className='row m-0'>
            <div className='d-flex justify-content-between ms-auto my-3 px-3'>
                <h4>Your activities</h4>
                <div>
                    <i className="fa-solid fa-arrow-down-short-wide"></i>
                </div>
            </div>
            <hr />

            <div className='row'>
                <div className='d-flex justify-content-start'>
                    <div className='mx-2'>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                    <span>Feeds</span>
                </div>

                <div className="list-group option-list">
                    <button type="button" className="option-list border-0 list-group-item list-group-item-action">
                        <div className='container p-0 my-1 d-flex justify-content-start'>
                            <div className='mx-1'>
                                <img className='people-thumbnail' src={people_thumbnail_3} alt="Tom" />
                            </div>
                            <div>
                                <strong>Accenuture Technology in Phillipines...</strong>
                                <p>Did you miss the Q1 FY23 INTERACT yesterday? Catch the replay now and discover how we create lasting..</p>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="option-list border-0 list-group-item list-group-item-action">
                        <div className='container p-0 my-1 d-flex justify-content-start'>
                            <div className='mx-1'>
                                <img className='people-thumbnail' src={people_thumbnail_3} alt="Tom" />
                            </div>
                            <div>
                                <strong>Accenuture Technology in Phillipines...</strong>
                                <p>Did you miss the Q1 FY23 INTERACT yesterday? Catch the replay now and discover how we create lasting..</p>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="option-list border-0 list-group-item list-group-item-action">
                        <div className='container p-0 my-1 d-flex justify-content-start'>
                            <div className='mx-1'>
                                <img className='people-thumbnail' src={people_thumbnail_3} alt="Tom" />
                            </div>
                            <div>
                                <strong>Accenuture Technology in Phillipines...</strong>
                                <p>Did you miss the Q1 FY23 INTERACT yesterday? Catch the replay now and discover how we create lasting..</p>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="option-list border-0 list-group-item list-group-item-action">
                        <div className='container p-0 my-1 d-flex justify-content-start'>
                            <div className='mx-1'>
                                <img className='people-thumbnail' src={people_thumbnail_3} alt="Tom" />
                            </div>
                            <div>
                                <strong>Accenuture Technology in Phillipines...</strong>
                                <p>Did you miss the Q1 FY23 INTERACT yesterday? Catch the replay now and discover how we create lasting..</p>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="option-list border-0 list-group-item list-group-item-action">
                        <div className='container p-0 my-1 d-flex justify-content-start'>
                            <div className='mx-1'>
                                <img className='people-thumbnail' src={people_thumbnail_3} alt="Tom" />
                            </div>
                            <div>
                                <strong>Accenuture Technology in Phillipines...</strong>
                                <p>Did you miss the Q1 FY23 INTERACT yesterday? Catch the replay now and discover how we create lasting..</p>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="option-list border-0 list-group-item list-group-item-action">
                        <div className='container p-0 my-1 d-flex justify-content-start'>
                            <div className='mx-1'>
                                <img className='people-thumbnail' src={people_thumbnail_3} alt="Tom" />
                            </div>
                            <div>
                                <strong>Accenuture Technology in Phillipines...</strong>
                                <p>Did you miss the Q1 FY23 INTERACT yesterday? Catch the replay now and discover how we create lasting..</p>
                            </div>
                        </div>
                    </button>

                </div>

            </div>
            {/* <Outlet /> */}
        </div>

    )
}
