import React from 'react'

export const UserList = (props) => {
    return (
        <tr key={props.e.id}>
            <th scope="row">{props.index + 1}</th>
            <td>{props.e.name}</td>
            <td>{props.e.title}</td>
            <td>@{props.e.location}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" onClick={() => { props.updateUserByID(props.e.id, props.e.name, props.e.title, props.e.location) }} className="btn btn-sm btn-warning">Edit</button>
                    <button type="button" onClick={() => { props.deleteUserByID(props.e.id) }} className="btn btn-sm btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    )
}
