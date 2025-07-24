import { useState, useEffect } from 'react';
import axiosConnector from '../../../api/axiosConnector';
import { AboutTheSection } from './AboutTheSection';
import { UpdateUserForm } from './UpdateUser';
import { UserList } from './UserList';

export const UserContent = (props) => {
    const [user, setUser] = useState([])

    const [formName, setFormName] = useState()
    const [formLocation, setFormLocation] = useState()
    const [formTitleStack, setFormTitleStack] = useState()

    const retreiveUsersHandler = async () => {
        const response = await axiosConnector.get("/users");
        setUser(response.data["data"]["data"])
    }

    const addUserHandler = async (user) => {
        user.preventDefault()
        if (!formName || !formLocation || !formTitleStack) {
            alert("Please complete enter required details.")
        } else {
            const myUser = {
                name: formName,
                location: formLocation,
                title: formTitleStack,
            }
            await axiosConnector.post("/user", myUser)
            setFormName("")
            setFormLocation("")
            setFormTitleStack("")
            retreiveUsersHandler()
        }
    }

    const deleteUserByID = async (id) => {
        console.log(id)
        await axiosConnector.delete(`/user/${id}`)
        retreiveUsersHandler()
    }

    const [updateID, setUpdateID] = useState(null)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const updateUserByID = async (id) => {
        console.log(id)
        setUpdateID(id)
        setShowUpdateForm(true)
        retreiveUsersHandler()
    }

    useEffect(() => {
        retreiveUsersHandler()
    }, [])

    return (
        <>
            <div className='col-11 d-flex '>
                <div className='col-3'>
                    <div className='feed-form px-3 py-3'>
                        <h5 className='py-4'>Users form</h5>
                        <form onSubmit={addUserHandler} className=''>
                            <div className="mb-3">
                                <input value={formName} onChange={(e) => { setFormName(e.target.value) }} type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <input value={formLocation} onChange={(e) => { setFormLocation(e.target.value) }} type="text" className="form-control" id="location" placeholder="Location" />
                            </div>
                            <div className="mb-3">
                                <input value={formTitleStack} onChange={(e) => { setFormTitleStack(e.target.value) }} type="text" className="form-control" id="title" placeholder="Title" />
                            </div>
                            <button type='submit' className='btn btn-success btn-sm'>Add User</button>
                        </form>
                    </div>
                </div>

                <div className='col-8'>
                    <div className="my-2 activity-content message-container border">
                        <div className='my-3 mx-4'>
                            <AboutTheSection />
                            <h5 className='feed-header py-3'>Users</h5>
                            {user.length === 0 ?
                                <div>Loading ... <i className="fa fa-spinner fa-spin" aria-hidden="true"></i></div> :
                                <>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Job profile</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Edit/Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user.slice(0).reverse().map((e, index) => {
                                                return (
                                                    <>
                                                        {showUpdateForm && e.id === updateID ? <UpdateUserForm index={index} e={e} setShowUpdateForm={setShowUpdateForm} retreiveUsersHandler={retreiveUsersHandler} updateName={e.name} updateLocation={e.location} updateTitleStack={e.title} />
                                                            :
                                                            <UserList e={e} index={index} updateUserByID={updateUserByID} deleteUserByID={deleteUserByID} />
                                                        }
                                                    </>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </>
                            }
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
