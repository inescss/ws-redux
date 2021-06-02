import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../js/action/Action'

function AddTask() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const add = () => {
        if (text){
            dispatch(addTask({id:Math.random(),task:text.trim(),isDone:false}))
            setText("")
        }
        else alert("Entre new task")
    }
    return (
        <div className="add"> 
            <input type="text" onChange={e => setText(e.target.value)} value={text} />
            <button onClick={add}>Add Task</button>
        </div>
    )
}

export default AddTask
