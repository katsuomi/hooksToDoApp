import React,{ useContext } from 'react'
import { DELETE_TASK } from '../actions'
import AppContext from '../contexts/AppContext'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Task = ({ task }) => {
  const { dispatch } = useContext(AppContext)
  const id = task.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`タスク(id=${id})を本当に削除しても良いですか？`)
    if (result) { dispatch({ type: DELETE_TASK, id })}
  }

  return (
    <TableRow>
      <TableCell align="right"></TableCell>
      <TableCell align="right">{id}</TableCell>
      <TableCell align="right">{task.title}</TableCell>
      <TableCell align="right">{task.description}</TableCell>
      <TableCell align="right"><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>Delete</button></TableCell>
    </TableRow>
  )
}

export default Task