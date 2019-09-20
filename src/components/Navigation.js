import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ isLoggedIn, logout }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        {!isLoggedIn ? (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        ) : (
          <li>
            <button type='button' onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
