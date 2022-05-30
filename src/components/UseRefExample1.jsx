import React, { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  //when u set the reference value it does not re-render the component the way
  //it happens with state values
  //you can create a reference to any elements
  const onSubmit = (e) => {
    e.preventDefault()
    //console.log(inputRef.current.value)
    inputRef.current.value = 'Hello there'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Goodbye!'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hiya
        </p>
      </form>
    </div>
  )
}

export default UseRefExample1
