import React, { useState } from 'react'

//to store to state and localstorage
function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorage(key, initialValue)
  )

  const setValue = (value) => {
    //check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value

    //set to State
    setLocalStorageValue(value)

    //set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

function getLocalStorage(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
