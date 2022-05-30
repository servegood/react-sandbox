import React, { useState } from 'react'
import Todo from './Todo'

//using useRef - memory leak while unmounting component before handling response
function UseRefMemoryLeak() {
  const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      <h1>UseRef - Memory Leak Sample</h1>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  )
}

export default UseRefMemoryLeak
