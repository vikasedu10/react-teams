import { useMutation, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { CREATE_TODO_MUTATION, DELETE_TODO_MUTATION } from "../../../graphql/mutation/mutation"
import { GET_TODOS } from "../../../graphql/query/query"
import { AboutTheSection } from "./AboutTheSection"

export const TodoContent = (props) => {
    const [todos, setTodos] = useState([])
    
    const { loading, refetch, error, data } = useQuery(GET_TODOS)
    const [addTodo, {err}] = useMutation(CREATE_TODO_MUTATION)
    const [deleteTodo, {er}] = useMutation(DELETE_TODO_MUTATION)
    const [title, setTitle] = useState("")
    useEffect(() => {
        if (data) {
            setTodos(data.todos)
        }
    }, [data, todos])

    const createTodo = async (todo) => {
        todo.preventDefault()
        await addTodo({
            variables: {
                title: title,  
            }
        })
        if (err) {
            console.log(err)
        }
        setTitle("")
        refetch()

    }
    const deleteTodoByID = async (id) => {
        deleteTodo({
            variables: {
                id: id.slice(10, id.length-2),
            }
        })
        if (er) {
            console.log(er)
        }
        refetch()
    }
    return (
        <>
            <div className='col-11 d-flex '>
                <div className='col-3'>
                    <div className='feed-form px-3 py-3'>
                        <h5 className='py-4'>Todo form</h5>
                        <form onSubmit={createTodo} className=''>
                            <div className="mb-3">
                                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="name" placeholder="What is todo about?" />
                            </div>
                            <button type='submit' className='btn btn-success btn-sm'>Add Todo</button>
                        </form>
                    </div>
                </div>

                <div className='col-8'>
                    <div className="my-2 activity-content message-container border">
                        <div className='my-3 mx-4'>
                            <AboutTheSection />
                            <h5 className='feed-header py-3'>Users</h5>
                            {loading ?
                                <div>
                                    Loading ... <div className="fa fa-spinner fa-spin"></div>
                                </div>
                                : (
                                    error ? <p><strong>Error: </strong>{error.message}</p> :
                                        <>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Todo Item</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Edit/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {todos.slice(0).reverse().map((data, index) => {
                                                        return (
                                                            <tr key={data.id}>
                                                                <th scope="col">{index + 1}</th>
                                                                <th scope="col">{data.title}</th>
                                                                <th scope="col">
                                                                    {data.completed ?
                                                                        <i className="fa-solid icon-completed fa-circle-check"></i>
                                                                        :
                                                                        <i className="fa-solid icon-not-completed fa-circle-xmark"></i>
                                                                    }
                                                                </th>
                                                                <td>
                                                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                        <button type="button" onClick={() => { deleteTodoByID(data.id) }} className="btn btn-sm btn-danger">Delete</button>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                        )
                                                    }

                                                    )}
                                                </tbody>
                                            </table>
                                        </>
                                )
                            }
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
