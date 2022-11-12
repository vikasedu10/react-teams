import React, { useState } from 'react'
import { ActivitySection } from '../chats/SingleChatDiv';
import { ActivityData } from './ActivityData';

export const ActivityContent = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submitActivity = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Please complete adding title or description for your activity.")
        } else {
            props.addActivity(title, description);
            setTitle("");
            setDescription("");
        }
    }

    return (
        <>
            <div className='col-5'>

                
                <ActivitySection />

                <div className="my-2 activity-content message-container border">
                    <div className='my-3 mx-4'>
                        <h5 className='my-4'>Activities so far..</h5>
                        {props.activities.length === 0 ? 
                        <p>No activities have been published. Start by posting one.</p>
                            :
                        props.activities.map((activity) => {
                            return (
                                    <ActivityData setTitle={setTitle} setDescription={setDescription} activity={activity} deleteActivity={props.deleteActivity} key={activity.sno} />
                                ) 
                                
                        })
                    }
                        
                        <h5 className='py-4'>Respond to activity on 'Viva Engage'!</h5>

                        <form onSubmit={submitActivity} className=''>
                            <div className="mb-3">
                                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Your title here." />
                            </div>
                            <div className="mb-3">
                                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" placeholder='Your activity to post' id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type='submit' className='btn btn-success btn-sm'>Add activity</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
