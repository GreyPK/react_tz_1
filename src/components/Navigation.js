import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { loginLoad, logout } from '../redux/user/userActions'

const Navigation = ({ location }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const dispatch = useDispatch()
  const [current, setCurrent] = useState('/home')

  useEffect(() => {
    dispatch(loginLoad())
    setCurrent(location.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (e) => setCurrent(e.key)

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Menu.Item key='/'>
        <NavLink to='/'>Home</NavLink>
      </Menu.Item>
      <Menu.Item key='/news'>
        <NavLink to='/news'>News</NavLink>
      </Menu.Item>
      <Menu.Item key='/profile'>
        <NavLink to='/profile'>Profile</NavLink>
      </Menu.Item>
      {!isLoggedIn ? (
        <Menu.Item key='/login'>
          <NavLink to='/login'>Login</NavLink>
        </Menu.Item>
      ) : (
        <Menu.Item>
          <Button type='link' onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  )
}

export default withRouter(Navigation)
