
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "../type/Index";

const initialState = {

    taskList: [
        {
          id: 0,
          task: "Learn HTML And CSS",
          isDone: true,
        },
        {
          id: 1,
          task: "Learn JS and ES6",
          isDone: true,
        },
        {
          id: 2,
          task: "Learn NODE JS",
          isDone: false,
        },
      ],
    
}
const Reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case ADD_TASK:
      return { ...state, taskList:[...state.taskList, payload] };

    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((todo) => todo.id !== payload),
      };
    case FILTER_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((todo) =>
            todo.task.toUpperCase().includes(payload.toUpperCase()),
        ),
    }

    case COMPLETE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload.id ? { ...todo, task: payload.value } : todo
        ),
      };


        default:
            return state;

    }
}
 
export default Reducer;