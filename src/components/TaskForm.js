import React, { useContext,useState } from 'react'
import {
  CREATE_TASK,
  DELETE_ALL_TASKS,
} from '../actions'
import AppContext from '../contexts/AppContext'

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
      <h4>ToDo作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formTaskTitle">タイトル</label>
          <input className="form-control" id="formTaskTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formTaskDescription">詳細</label>
          <textarea className="form-control" id="formTaskDescription" value={description} onChange={e => setDescription(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addTask} disabled={unCreatable}>タスクを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllTasks} disabled={state.tasks.length === 0}>全てのタスクを削除する</button>
      </form>
    </>
  )
}

export default TaskForm
