import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../redux/news/newsActions'

const News = () => {
  const { news, newsLoading, errorMessage } = useSelector((state) => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return newsLoading ? (
    <div>Loading...</div>
  ) : errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    news && (
      <Fragment>
        <div>
          {news.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <span>Всего новостей: {news.length}</span>
      </Fragment>
    )
  )
}

export default News
