import axios from 'axios'
import { FETCH_NEWS, FETCH_NEWS_FAILED, SET_NEWS_LOADING } from './newsTypes'

export const fetchNews = () => async dispatch => {
  try {
    dispatch(setLoading())
    const response = await axios.get(`/news`)

    if (response.data.status === 'ok') {
      dispatch({
        type: FETCH_NEWS,
        payload: response.data.data,
      })
    } else if (response.data.status === 'err') {
      dispatch({
        type: FETCH_NEWS_FAILED,
        payload: `Не удалось загрузить новости: ${response.data.message}`,
      })
    }
  } catch (err) {
    dispatch({ type: FETCH_NEWS_FAILED, payload: 'Неизвестная ошибка' })
  }
}

export const setLoading = () => ({ type: SET_NEWS_LOADING })
