import React, { useState } from 'react';

function Login({ changeUser, currentUser }) {
    const [userLogin, setUserLogin] = useState("")
    
    async function findCurrentUser(username) {
      const response = await fetch(`http://localhost:9292/users/${username}`)
      const user = await response.json()
      changeUser(user)
  }

    const handleSubmit = (event) => {
      event.preventDefault()
      findCurrentUser(userLogin)
      changeUser(currentUser)
      setUserLogin("")
    }

    const handleChange = (event) => {
      setUserLogin(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login" value="username">Username: </label>
                <input type="text" name="login" value={userLogin} onChange={handleChange} />
                <input type="submit" value="Login"/>
            </form>
            <p>Current User: {currentUser === "guest" ? "guest": currentUser.username}</p>
        </div>
    )
}

export default Login