import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import HomePage from './pages/HomePage/HomePage'
import NewsPage from './pages/NewsPage/NewsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import { connect } from 'react-redux'
import { logout, loginLoad } from './redux/user/userActions'
import './App.css'
import Navigation from './components/Navigation'
import 'antd/dist/antd.css'

const App = ({ isLoggedIn, logout, loginLoad }) => {
  useEffect(() => {
    loginLoad()
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} logout={logout} />
      <div style={{ padding: '10px' }}>
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
