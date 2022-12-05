import React, { useState } from 'react'
import axiosConnector from '../../../api/axiosConnector';

export const UpdateUserForm = (props) => {
    const [updateName, setUpdateName] = useState(props.updateName)
    const [updateLocation, setUpdateLocation] = useState(props.updateLocation)
    const [updateTitleStack, setUpdateTitleStack] = useState(props.updateTitleStack)
    const saveUserAfterUpdate = async(id) => {
        setUpdateName(updateName)
        setUpdateTitleStack(updateLocation)
        setUpdateLocation(updateTitleStack)
        const myUser = {
            id: id,
            name: updateName,
            location: updateLocation,
            title: updateTitleStack,
        }
        await axiosConnector.put(`/user/${id}`, myUser)
        props.setShowUpdateForm(false)
        props.retreiveUsersHandler()
    }
    return (
        <tr key={props.index}>
            <th scope="row">{props.index + 1}</th>
            <td><input className="form-control" onChange={(e) => { setUpdateName(e.target.value) }} type="text" value={ updateName} /></td>
            <td><input className="form-control" onChange={(e) => { setUpdateLocation(e.target.value) }} type="text" value={ updateLocation} /></td>
            <td><input className="form-control" onChange={(e) => { setUpdateTitleStack(e.target.value) }} type="text" value={ updateTitleStack} /></td>
            <td>
                <button type="button" onClick={() => { saveUserAfterUpdate(props.e.id) }} className="btn btn-sm btn-success">Save</button>
            </td>
        </tr>
    )
}
