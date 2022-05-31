import React, { useMemo, useEffect, useState, useRef } from 'react'

//memoizing just the returned value for better performance
//This is to demo when expensive function is getting called despite its value not changing
//even if there is any rerender happening, the values that are not getting changed is also
//getting executed because it is part of the function - for example sqrt below - this may
//be a potential for useMemo so that it can be cached if it is not getting modified
function UseMemo() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  //This is where you could make use of useMemo to cache the expensive function
  // const sqrt = getSqrt(number) // this will show direct hits even if things r not
  //getting changed
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState)
      return prevState + 1
    })
  }

  return (
    <div>
      <h1>UseMemo - Sample</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
        min="0"
        max="10"
      />
      <button onClick={onClick} className="btn btn-primary">
        ReRender
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(number) {
  for (let i = 0; i < 10000; i++) {
    console.log('Expensive function called')
  }
  return Math.sqrt(number)
}

export default UseMemo
