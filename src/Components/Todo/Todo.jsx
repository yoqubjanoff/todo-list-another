import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Todo.scss"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [select, setSelect] = useState(-1)

    const checkHandle = (id) => {
        const itemIndex = todos.findIndex((el) => id == el.id);
        todos[itemIndex].isCompleted = true;
        setTodos([...todos])
    };

    const delet = (id) => {
        todos.splice(id, 1)
        setTodos([...todos])
    }

    const edit=(id)=>{
        setSelect(id);

    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2 my-5">
                        <div className="d-flex">
                            <input 
                                defaultValue={todos?.title}
                                onKeyUp={(evt) => {
                                if (evt.code == "Enter") {
                                    if(select === -1) {
                                        const tempBae = {
                                            id: todos[todos.length - 1]?.id + 1 || 1,
                                            title: evt.target.value.trim(),
                                            isCompleted: false,
                                        }
                                        setTodos([...todos, tempBae])
                                    } else{
                                            todos[select].title = evt.target.value;
                                            todos[select].isCompleted = false;
                                            evt.target.focus()
                                        
                                        setTodos([...todos])
                                        setSelect(-1)
                                    }
                                    evt.target.value = "";
                                }
                            }} type="text" className="form-control" name='todo_name' placeholder='Type here ...' />
                        </div>
                    </div>
                    <div className="col-8 offset-2">
                        <ul className="todo-list list-group">
                            {todos.length > 0 && todos.map((todo, index) => (
                                <li
                                    key={todo.id}
                                    data-todo-id={todo.id}
                                    className={`list-group-item d-flex justify-content-between && ${todo.isCompleted ? "line-through" : " "}`}
                                >
                                    <div>
                                        {todo.id}: <strong>{todo.title}</strong>
                                    </div>
                                    <div className=''>
                                        <input data-todo-id={todo.id} className='check' type="checkbox" onClick={() => checkHandle(todo.id)} />
                                        <button className='btn btn-danger me-2' onClick={()=> delet(index)}>Delete</button>
                                        <button className='btn btn-success' onClick={()=> edit(index)}>Edit</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo