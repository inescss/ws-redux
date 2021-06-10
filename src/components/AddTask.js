import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, filter_task } from '../js/action/Action'

function AddTask() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const taskList = useSelector(state => state.Reducer.taskList)
    const add = () => {
        if (text){
            dispatch(addTask({id:Math.random(),task:text.trim(),isDone:false}))
            setText("")
        }
        else alert("Entre new task")
    }
    const recherche=()=>{
        if(text){
            dispatch(filter_task(text.trim()))
        }
    }
    
    return (
        <div className="add"> 
            <input type="text" onChange={e => (setText(e.target.value)+ recherche())} value={text} />
            <button onClick={add}>Add Task</button>
        <div>
          
          </div>
        </div>
    )
}

export default AddTask
