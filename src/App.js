import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import HomePage from './pages/HomePage/HomePage'
import NewsPage from './pages/NewsPage/NewsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import './App.css'
import Navigation from './components/Navigation'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Router>
      <Navigation />
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

export default App
