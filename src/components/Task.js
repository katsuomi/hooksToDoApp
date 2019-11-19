import React,{ useContext } from 'react'
import { DELETE_TASK } from '../actions'
import AppContext from '../contexts/AppContext'

const Task = ({ task }) => {
  const { dispatch } = useContext(AppContext)
  const id = task.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`タスク(id=${id})を本当に削除しても良いですか？`)
    if (result) { dispatch({ type: DELETE_TASK, id })}
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Task