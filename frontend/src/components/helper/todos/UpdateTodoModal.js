import React, { useEffect, useState } from 'react'
import { useMutation } from "@apollo/client"
import { EDIT_TODO_MUTATION } from "../../../graphql/mutation/mutation"

export const UpdateTodoModal = (props) => {
    const [todoTitle, setTodoTitle] = useState(props.data.title)
    const [markCompletedFlag, setTodoCompletedFlag] = useState(props.data.completed)
    const [updateTodo, { error }] = useMutation(EDIT_TODO_MUTATION)

    const updateTodoByID = async (e) => {
        e.preventDefault()
        await updateTodo({
            variables: {
                id: props.data.id.slice(10, props.data.id.length - 2),
                title: todoTitle,
                completed: markCompletedFlag,
            }
        })
        if (error) {
            console.log(error)
        }
        document.title = "Teams | Todos"
        props.refetch()
    }

    useEffect(() => {
        document.title = "Update: " + props.data.title
    })
    return (
        <div className="modal fade" id={"editTodoActionModal-" + props.sliceTodoID(props.data.id)} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"editTodoActionModal-" + props.sliceTodoID(props.data.id)} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form onSubmit={(e) => { updateTodoByID(e) }}>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" onChange={(e) => setTodoTitle(e.target.value)} className="form-control" value={todoTitle} id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Your todo</label>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" defaultChecked={props.data.completed} onChange={() => { setTodoCompletedFlag(!props.data.completed) }} type="checkbox" id={"completed-" + props.sliceTodoID(props.data.id)} />                                    <label className="form-check-label" htmlFor={"completed-" + props.sliceTodoID(props.data.id)}>Mark completed?</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success btn-sm" data-bs-dismiss="modal">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
