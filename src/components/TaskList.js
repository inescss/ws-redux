import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const taskList = useSelector(state => state.Reducer.taskList)
    return (
        <div>
            
              {
            
                taskList.map(todo => <TaskItem todo={todo} key={todo.id}/>)
            }
        </div>
    )
}

export default TaskList
