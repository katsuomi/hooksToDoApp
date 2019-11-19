import React, { useContext,useState } from 'react'
import {
  CREATE_TASK,
  DELETE_ALL_TASKS,
} from '../actions'
import AppContext from '../contexts/AppContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const TaskForm = () => {
  const {state,dispatch} = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTask = e => {
    e.preventDefault()

    dispatch({
     type: CREATE_TASK,
     title,
     description
    })

    setTitle('')
    setDescription('')
  }

  const deleteAllTasks = e => {
    e.preventDefault()
    const result = window.confirm('全てのタスクを本当に削除しても良いですか？')
    if (result){dispatch({ type: DELETE_ALL_TASKS })} 
  }

  const unCreatable = title === '' || description === ''
  return (
    <>
      <h4>Create Task </h4>
      <form>
        <TextField
          label="title"
          margin="normal"
          value={title} 
          onChange={e => setTitle(e.target.value)}
        />
        <br/>
        <TextField
          label="description"
          margin="normal"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br/>
        <Button variant="contained" color="primary" onClick={addTask} disabled={unCreatable}>
          Create Task
        </Button>
      </form>
      <Button variant="contained" color="secondary" onClick={deleteAllTasks} disabled={state.tasks.length === 0} style={{marginLeft: "20px"}}>
        Delete All Tasks
      </Button>
    </>
  )
}

export default TaskForm
