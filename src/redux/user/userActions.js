import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOAD,
  LOGOUT,
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_FAILED,
  SET_LOADING,
} from './userTypes'
import axios from 'axios'

export const login = user => async dispatch => {
  try {
    dispatch(setLoading())
    const response = await axios.post('/validate', user)
    if (response.data.status === 'ok') {
      localStorage.setItem('isLoggedIn', JSON.stringify(true))
      localStorage.setItem('userId', JSON.stringify(response.data.data.id))
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.data.id })
    } else if (
      response.data.status === 'err' &&
      response.data.message === 'wrong_email_or_password'
    ) {
      dispatch({
        type: LOGIN_FAILED,
        payload: 'Имя пользователя или пароль введены не верно',
      })
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAILED, payload: 'Неизвестная ошибка' })
  }
}

export const fetchUserProfile = userId => async dispatch => {
  try {
    dispatch(setLoading())
    const response = await axios.get(`/user-info/${userId}`)
    const sortedSocial = response.data.data.social.sort(a =>
      a.label === 'web' ? -1 : 1
    )

    if (response.data.status === 'ok') {
      dispatch({
        type: FETCH_USER_PROFILE,
        payload: {
          ...response.data.data,
          social: sortedSocial,
        },
      })
    } else if (
      response.data.status === 'err' &&
      response.data.message === 'user_not_found'
    ) {
      dispatch({
        type: FETCH_USER_PROFILE_FAILED,
        payload: 'Пользователь не найден',
      })
    }
  } catch (err) {
    dispatch({ type: FETCH_USER_PROFILE_FAILED, payload: 'Неизвестная ошибка' })
  }
}

export const loginLoad = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
  const userId = JSON.parse(localStorage.getItem('userId'))
  return {
    type: LOGIN_LOAD,
    payload: { isLoggedIn, userId },
  }
}

export const logout = () => {
  localStorage.setItem('isLoggedIn', JSON.stringify(false))
  localStorage.setItem('userId', JSON.stringify(null))
  return {
    type: LOGOUT,
  }
}

export const setLoading = () => ({ type: SET_LOADING })
