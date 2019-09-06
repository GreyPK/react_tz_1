import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOAD } from './userTypes'

const initialState = { isLoggedIn: false, errorMessage: null }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, errorMessage: null }

    case LOGIN_FAILED:
      return { ...state, isLoggedIn: false, errorMessage: action.payload }

    case LOGIN_LOAD:
      return { ...state, isLoggedIn: action.payload, errorMessage: null }

    default:
      return state
  }
}

export default userReducer
