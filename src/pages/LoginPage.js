import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  const {loginUser} = useContext(AuthContext)
  return (
    <div>
   <form onSubmit={loginUser}>
  <label>
    Username:
    <input type="text" name="username" placeholder='Enter Username' />
  </label>
  <br />
  <label>
    Password:
    <input type="password" name="password" placeholder='Enter Password'/>
  </label>
  <br />
  <button type="submit">Login</button>
</form>
    </div>
  )
}

export default LoginPage
