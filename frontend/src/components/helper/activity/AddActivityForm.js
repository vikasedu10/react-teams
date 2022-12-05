import React, { useState } from 'react'

export const AddActivityForm = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addActivityFormSubmit = (e) => {
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
        <div className='px-2'>
            <h5 className='py-4'>Respond to activity on 'Viva Engage'!</h5>

            <form onSubmit={addActivityFormSubmit} className=''>
                <div className="mb-3">
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Your title here." />
                </div>
                <div className="mb-3">
                    <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" placeholder='Your activity to post' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' className='btn btn-success btn-sm'>Add activity</button>
            </form>
        </div>
    )
}
