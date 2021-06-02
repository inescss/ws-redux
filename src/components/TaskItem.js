import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../js/action/Action'


const TaskItem = (todo) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
        <div style={{textDecoration: todo.isDone ? "line-through" : null }}>{todo.task}</div>
        <div>
            <button onClick={() => dispatch(completeTask(todo.id))}>{todo.isDone ? "Undo" : "complete"}</button>
            <button onClick={() => dispatch( deleteTask(todo.id))}>Delete</button>
            <button > edit</button>
        </div>
     </div>
    )
}

export default TaskItem
