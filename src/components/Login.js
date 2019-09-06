import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login, loginLoad } from '../redux/user/userActions'
import { Redirect } from 'react-router-dom'

const Login = ({ login, loginLoad, isLoggedIn, errorMessage }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    loginLoad(JSON.parse(localStorage.getItem('isLoggedIn')))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  const onSubmit = e => {
    e.preventDefault()
    login({ username, password })
  }

  const onChange = ({ target: { name, value } }) => {
    name === 'username' && setUsername(value)
    name === 'password' && setPassword(value)
  }

  return isLoggedIn ? (
    <Redirect to='/profile' />
  ) : (
    <form onSubmit={onSubmit}>
      <input type='text' name='username' value={username} onChange={onChange} />
      <input
        type='password'
        name='password'
        value={password}
        onChange={onChange}
      />

      <button type='submit'>Войти</button>

      {errorMessage}
    </form>
  )
}

const mapStateToProps = ({ user: { isLoggedIn, errorMessage } }) => ({
  isLoggedIn,
  errorMessage,
})

const mapDispatchToProps = {
  login,
  loginLoad,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
