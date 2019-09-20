import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/user/userActions'
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd'

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
    <Form
      layout='inline'
      onSubmit={onSubmit}
      style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Form.Item>
        <Input
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='Email'
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          required
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
          required
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' disabled={loading}>
          {loading ? 'Подождите' : 'Войти'}
        </Button>
      </Form.Item>
      {errorMessage}
    </Form>
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
