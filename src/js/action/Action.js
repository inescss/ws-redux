import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../types/Index"

export const addTask = (newTask) => {
    return{
        type:ADD_TASK,
        payload:newTask
    }
}
export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload
})
export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload:{id}
})
export const editTask = (id,value) => ({
    type: EDIT_TASK,
    payload:{id,value}
})

