import React, { useRef, useEffect, useState } from 'react'

//using useRef how to access previous state
function UseRefExamplePreviousState() {
  const renders = useRef(1)
  const [name, setName] = useState('')

  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])
  return (
    <div>
      <h1>UseRef - Previous State Example</h1>
      <hr />
      <h4>Renders: {renders.current}</h4>
      <h4>Prev Name State: {prevName.current}</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  )
}

export default UseRefExamplePreviousState
