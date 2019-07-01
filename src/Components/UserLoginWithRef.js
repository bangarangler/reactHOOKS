import React, { useRef } from 'react'

const UserLoginWithRef = () => {
  const refName = useRef(null);
  const refPassword = useRef(null);
  const refEmail = useRef(null);

  const login = e => {
    e.preventDefault()
    console.log(
      `
      name: ${refName.current.value}, password: ${refPassword.current.value}, email: ${refEmail.current.value}
      `
    )
  }

return (
  <form onSubmit={login}>
    <input type="text" placeholder="insert name ..." ref={refName} />
  <input
    type='password'
    placeholder='insert password...'
    ref={refPassword}
    />
  <input type="email"
  placeholder='insert email...'
  ref={refEmail}
  />
  <input type="submit" value="Login" />
  </form>
)
};

export default UserLoginWithRef;
