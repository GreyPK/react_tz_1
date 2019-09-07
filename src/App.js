import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import HomePage from './pages/HomePage/HomePage'
import NewsPage from './pages/NewsPage/NewsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import { connect } from 'react-redux'
import { logout, loginLoad } from './redux/user/userActions'
import './App.css'

const App = ({ isLoggedIn, logout, loginLoad }) => {
  useEffect(() => {
    loginLoad()
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div>
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

        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/news' component={NewsPage} />
          <PrivateRoute path='/profile' component={ProfilePage} />
          <Route path='/login' component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn,
})

const mapDispatchToProps = { logout, loginLoad }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
