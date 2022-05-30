import React, { useRef, useEffect, useState } from 'react'

//using useRef how to access previous state
function UseRefExample2() {
  const renders = useRef(1)
  const [name, setName] = useState('')

  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])
  return (
    <div>
      <h2>Previous State Example</h2>
      <hr />
      <h1>Renders: {renders.current}</h1>
      <h1>Prev Name State: {prevName.current}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  )
}

export default UseRefExample2
