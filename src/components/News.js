import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../redux/news/newsActions'

const News = ({ news, fetchNews, newsLoading, errorMessage }) => {
  useEffect(() => {
    fetchNews()
    //eslint-disable-next-line
  }, [])

  return newsLoading ? (
    <div>Loading...</div>
  ) : errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    news && (
      <Fragment>
        <div>
          {news.map(item => (
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

const mapStateToProps = ({ news: { news, errorMessage, newsLoading } }) => ({
  news,
  errorMessage,
  newsLoading,
})

const mapDispatchToProps = {
  fetchNews,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
