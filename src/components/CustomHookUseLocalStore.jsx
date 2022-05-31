import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookUseLocalStore() {
  const [task, setTask] = useState('')
  return (
    <div>
      <h1>CustomHookUseLocalStore</h1>
      <form className="w-50 mb-3">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={task}
            onchange={(e) => setTask(e.target.value)}
            className="form-control"
          />
        </div>
      </form>
    </div>
  )
}

export default CustomHookUseLocalStore
