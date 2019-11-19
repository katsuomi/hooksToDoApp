import React,{ useContext } from 'react'
import Task from './Task'
import AppContext from '../contexts/AppContext'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Tasks = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>All Tasks</h4>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { state.tasks.map((task, index) => (<Task key={index} task={task} />))}
        </TableBody>
      </Table>

    </>
  )
}

export default Tasks