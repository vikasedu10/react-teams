import React, { useState } from 'react'
import { FeedSection } from './FeedData';
import { FeedData, FeedHeaderSection } from './FeedData';
import { useDispatch, useSelector } from 'react-redux'
import { clearFeed } from '../../store/feed/feedSlice';

export const FeedContent = (props) => {
    const dispatch = useDispatch();
    const { feeds, totalFeeds } = useSelector((store) => store.feed)
    console.log(totalFeeds)
    return (
        <>
            <div className='col-11 d-flex '>
                <div className='col-3'></div>

                <div className='col-6'>
                    <FeedHeaderSection totalFeeds={feeds.length} />
                    <div className="my-2 activity-content message-container border">
                        <div className='my-3 mx-4'>
                            <div className='my-4 d-flex justify-content-between'>

                                <h5 className='feed-header'>Feeds so far..</h5>


                                <button onClick={() => {
                                    dispatch(clearFeed())
                                }} className='fa fa-trash feed-delete-icon'></button>


                            </div>
                            {feeds.length === 0 ?
                                <p>No feeds have been published. <br />Start by posting one.</p>
                                :
                                feeds.map((feed) => {
                                    return (
                                        <FeedData key={feed.id} title={feed.title} description={feed.description} />
                                    )
                                })
                            }
                            <div className='feed-form px-3 py-3'>

                                <h5 className='py-4'>Respond to Feed on 'Viva Engage'!</h5>

                                <form className=''>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="title" placeholder="Your title here." />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder='Your activity to post' id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type='submit' className='btn btn-success btn-sm'>Add Feed</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
