import React from 'react'

export const TodoList = (props) => {
    return (
        <tr key={props.index}>
            <th scope="col">{props.index + 1}</th>
            <th scope="col">{props.data.title}</th>
            <th scope="col">
                {props.data.completed ?
                    <i className="fa-solid icon-completed fa-circle-check"></i>
                    :
                    <i className="fa-solid icon-not-completed fa-circle-xmark"></i>
                }
            </th>
            <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" onClick={() => { props.editTodoByID(props.data.id) }} className="btn btn-sm btn-warning">Edit</button>
                    <button type="button" onClick={() => { props.deleteTodoByID(props.data.id) }} className="btn btn-sm btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    )
}
