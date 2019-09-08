import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/user/userActions'
import { Redirect } from 'react-router-dom'

const Login = ({ login, isLoggedIn, errorMessage, loading }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    login({ email, password })
  }

  const onChange = ({ target: { name, value } }) => {
    name === 'email' && setEmail(value)
    name === 'password' && setPassword(value)
  }

  return isLoggedIn ? (
    <Redirect to='/profile' />
  ) : (
    <form onSubmit={onSubmit}>
      <input
        type='email'
        name='email'
        value={email}
        onChange={onChange}
        required
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        required
      />

      <button type='submit' disabled={loading}>
        {loading ? 'Подождите' : 'Войти'}
      </button>
      {loading}
      {errorMessage}
    </form>
  )
}

const mapStateToProps = ({ user: { isLoggedIn, errorMessage, loading } }) => ({
  isLoggedIn,
  errorMessage,
  loading,
})

const mapDispatchToProps = {
  login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
