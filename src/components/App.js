import React, { useReducer,useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
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
      <Grid container>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}>        
          <TaskForm />
          <Tasks />
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </AppContext.Provider>
  )
}

export default App
