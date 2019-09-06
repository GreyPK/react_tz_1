import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isLoggedIn ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
})

export default connect(mapStateToProps)(PrivateRoute)
