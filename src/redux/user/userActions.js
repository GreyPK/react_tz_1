import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOAD } from './userTypes'

export const login = user => {
  if (user.username === 'Admin' && user.password === '12345') {
    return {
      type: LOGIN_SUCCESS,
    }
  } else {
    return {
      type: LOGIN_FAILED,
      payload: 'Имя пользователя или пароль введены не верно',
    }
  }
}

export const loginLoad = isLoggedIn => ({
  type: LOGIN_LOAD,
  payload: isLoggedIn,
})
