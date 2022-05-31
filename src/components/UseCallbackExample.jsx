import React, { useCallback, useState } from 'react'

//memoizing the whole callback function for better performance
function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

  return (
    <div>
      <h1>UseCallback - Sample</h1>
      <Button addTask={addTask} className="btn btn-primary" />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('Button component rendered')
  return (
    <div>
      <button className="className btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
