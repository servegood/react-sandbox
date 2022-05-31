import React, { useState, useEffect } from 'react'

//to make http request
function useLocalStorage(url, options) {
  const [task, setTask] = useState('')

  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}

export default useLocalStorage
