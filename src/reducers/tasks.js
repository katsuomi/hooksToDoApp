import {
  CREATE_TASK,
  DELETE_ALL_TASKS,
  DELETE_TASK
} from '../actions'

const tasks = (state = [], action) => {
  switch(action.type) {
    case CREATE_TASK:
      const task = { title: action.title, description: action.description }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...task }]
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id)
    case DELETE_ALL_TASKS:
      return []
    default:
      return state
  }
}

export default tasks
