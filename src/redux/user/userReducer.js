import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOAD,
  LOGOUT,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_FAILED,
  SET_LOADING,
} from './userTypes'

const initialState = {
  isLoggedIn: false,
  userId: null,
  errorMessage: null,
  loading: false,
  userProfile: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        userId: action.payload,
        errorMessage: null,
      }

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        errorMessage: action.payload,
      }

    case LOGIN_LOAD:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userId: action.payload.userId,
      }

    case LOGOUT:
      return { ...state, isLoggedIn: false, userId: null }

    case FETCH_USER_PROFILE:
      return {
        ...state,
        loading: false,
        userProfile: action.payload,
        errorMessage: null,
      }

    case FETCH_USER_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        errorMessage: action.payload,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}

export default userReducer
