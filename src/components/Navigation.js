import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Button } from 'antd'

const Navigation = ({ isLoggedIn, logout, location }) => {
  const [current, setCurrent] = useState('/home')

  useEffect(() => {
    setCurrent(location.pathname)
    //eslint-disable-next-line
  }, [])

  const handleClick = e => setCurrent(e.key)

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
          <Button type='link' onClick={logout}>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  )
}

export default withRouter(Navigation)
