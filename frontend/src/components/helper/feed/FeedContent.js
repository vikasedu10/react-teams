import { FeedData, FeedHeaderSection } from './FeedData';
import { useDispatch, useSelector } from 'react-redux'
import { clearFeed, addFeed } from '../../store/feed/feedSlice';
import { useState } from 'react';
import { AboutTheSection } from "./AboutTheSection"

export const FeedContent = () => {

    const dispatch = useDispatch();
    const { feeds } = useSelector((store) => store.feed)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submitFeed = (e) => {
        e.preventDefault()
        if (!title || !description) {
            alert("Please complete adding title or description for your activity.")
        } else {
            dispatch(addFeed({ "title": title, "description": description }))
            setTitle("");
            setDescription("");

        }
    }
    return (
        <>
            <div className='col-11 d-flex '>
                <div className='col-3'>
                    <div className='feed-form px-3 py-3'>

                        <h5 className='py-4'>Respond to Feed on 'Tech Expressway'!</h5>

                        <form onSubmit={submitFeed} className=''>
                            <div className="pb-3">
                                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" placeholder="Your title here." />
                            </div>
                            <div className="pb-3">
                                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" placeholder='Your activity to post' id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type='submit' className='btn btn-success btn-sm'>Add Feed</button>
                        </form>
                    </div>
                </div>

                <div className='col-6'>
                    <FeedHeaderSection totalFeeds={feeds.length} />
                    <div className="py-2 activity-content message-container border">
                        <div className='py-3 px-4'>
                            <AboutTheSection />
                            <div className='py-4 d-flex justify-content-between'>
                                <div className='py-auto'>
                                    <h5 className='feed-header'>Feeds so far..</h5>
                                </div>
                                {feeds.length !== 0 ?
                                    <div className=''>
                                        <strong className='px-3'>({feeds.length})</strong>
                                        <button onClick={() => {
                                            dispatch(clearFeed())
                                        }} className="fa-solid fa-trash p-3 border"></button>
                                    </div>
                                    : ""}
                            </div>
                            <hr />
                            {feeds.length === 0 ?
                                <p>No feeds have been published. <br />Start by posting one.</p>
                                :
                                feeds.slice(0).reverse().map((feed, index) => {
                                    return (
                                        <FeedData key={index} title={feed.title} description={feed.description} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
