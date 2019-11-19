import React,{ useContext } from 'react'
import Task from './Task'
import AppContext from '../contexts/AppContext'

const Tasks = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>詳細</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.tasks.map((task, index) => (<Task key={index} task={task} />))}
        </tbody>
      </table>
    </>
  )
}

export default Tasks