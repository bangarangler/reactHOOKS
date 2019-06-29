import React, { useState } from 'react';

const UserLogin = props => {
  const [user, setUser] = useState({name: "", email: "", password: ""})

  const login = e => {
    e.preventDefault()
    console.log(
      `name: ${user.name}, password: ${user.password}, email: ${user.email}`
    )
  }

  return (
    <form className="UserLogin" onSubmit={login}>
    <input
      type="text"
      value={user.name}
      placeholder="Enter Username..."
      onChange={e => setUser({...user, name: e.target.value})}
      required
    />
    <input
      type="password"
      value={user.password}
      placeholder="Enter Password"
      onChange={e => setUser({...user, password: e.target.value})}
      required
    />
    <input
      type="email"
      value={user.email}
      placeholder="Enter Email"
      onChange={e => setUser({...user, email: e.target.value})}
      required
    />
    <input type="submit" value="Login" />
    </form>
  )
}

export default UserLogin;
