import React, { useReducer,useEffect } from 'react'
import TaskForm from './TaskForm'
import Tasks from './Tasks'
import reducer from '../reducers'
import AppContext from "../contexts/AppContext"

const App = () => {
  const localStorageState = localStorage.getItem('tasksToDo')
  const initialState = localStorageState ? JSON.parse(localStorageState) : {
    tasks: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('tasksToDo', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{state,dispatch}} >
      <div>
        <TaskForm />
        <Tasks />
      </div>
    </AppContext.Provider>
  )
}

export default App
