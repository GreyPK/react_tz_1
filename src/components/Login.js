import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/user/userActions'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login = () => {
  const { isLoggedIn, errorMessage, loading } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = (e) => {
    dispatch(login({ email, password }))
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
      onFinish={onFinish}
      style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Form.Item>
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
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
          prefix={<LockOutlined className='site-form-item-icon' />}
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

export default Login
