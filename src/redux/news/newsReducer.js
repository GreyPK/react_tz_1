import { FETCH_NEWS, FETCH_NEWS_FAILED, SET_NEWS_LOADING } from './newsTypes'

const initialState = {
  news: null,
  newsLoading: false,
  errorMessage: null,
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsLoading: false,
        news: action.payload,
        errorMessage: null,
      }

    case FETCH_NEWS_FAILED:
      return {
        ...state,
        newsLoading: false,
        news: null,
        errorMessage: action.payload,
      }

    case SET_NEWS_LOADING:
      return {
        ...state,
        newsLoading: true,
      }

    default:
      return state
  }
}

export default newsReducer
