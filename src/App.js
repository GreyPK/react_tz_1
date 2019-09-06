import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import HomePage from './pages/HomePage/HomePage'
import NewsPage from './pages/NewsPage/NewsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LoginPage from './pages/LoginPage/LoginPage'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
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
            </ul>
          </nav>

          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/news' component={NewsPage} />
            <PrivateRoute path='/profile' component={ProfilePage} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
