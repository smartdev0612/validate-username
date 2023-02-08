import React, { useState } from 'react'

const Input = () => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    let username = e.target.value
    setUsername(username)
    username = username.trim()
    let names = username.split(' ')

    if (names.length === 2) {
      setError(false)
      for (let i = 0; i < names.length; i++) {
        if (!checkString(names[i])) {
          setError(true)
          // setUsername('')
          break
        }
      }
    } else {
      setError(true)
    }
  }

  const checkString = (value) => {
    return /^[A-za-z]*$/.test(value)
  }

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={handleChange}
        value={username}
      />
      {error && <p>User name is invalid</p>}
    </div>
  )
}

export default Input
