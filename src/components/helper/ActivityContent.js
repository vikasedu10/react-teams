import React from 'react'
import people_thumbnail_1 from '../../static/images/people/1.jpg';

export const ActivityContent = () => {
    return (
        <>
            <div className='d-flex justify-content-between my-3 mx-3'>
                <div className='d-flex justify-content-start'>
                    <img className='people-thumbnail' src={people_thumbnail_1} />
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
                    <i className="fa-icon-calling fa-solid fa-magnifying-glass"></i>
                    <i className="fa-icon-calling fa-solid fa-bell"></i>
                    <i className="fa-icon-calling fa-solid fa-inbox"></i>
                    <i className="fa-icon-calling fa-solid fa-ellipsis"></i>
                </div>
            </div>

            <div className="my-2 option-content-chats-div message-container border">
                <div className='my-3 mx-4'>

                <h3 className='col-7'>Message in the Advanced Technology Centers in the Philippines community</h3>
                <p className='my-4 col-9'>
                    Did you miss the Q1 FY23 INTERACT yesterday? Catch the replay now and discover how we create lasting value and continue being loved by clients, communities, and people everywhere!
                    If you attended the virtual and in-person sessions yesterday, you can still join our photo contest. Post your INTERACT photo booth pictures and in the caption, share with us why you chose the frame or handheld prop. Don’t forget to include the #WeAreTech360.
                    <br />
                    <div className='py-4'>
                    <strong>
                        Watch out for the announcement of raffle winners next week.  You may be one of our three lucky winners of Apple Airpods!
                    </strong>
                    </div>
                </p>
                </div>
            </div>
        </>
    )
}
