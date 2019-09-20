import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h2 id='react_tz_1'>
        React<em>tz</em>1
      </h2>

      <p>
        Это проект с решением тестовых заданий{' '}
        <a href='https://github.com/maxfarseer/tz-webinars/tree/tz-1-react-redux-react-router'>
          1
        </a>{' '}
        и{' '}
        <a href='https://github.com/maxfarseer/tz-webinars/tree/tz-2-react-redux-router-async'>
          2
        </a>
        , которое проверяет следующие навыки: react, redux, react-router,
        redux-thunk, работа с асинхронными запросами.
      </p>

      <p>Для запуска проекта выполнить команду:</p>

      <h3>
        <code>npm start</code>
      </h3>

      <p>Для входа (/login) используйте:</p>
      <h4>max@test.com</h4>
      <h4>12345</h4>

      <p>Исходный код доступен здесь:</p>
      <a href='https://github.com/GreyPK/react_tz_1'>
        https://github.com/GreyPK/react_tz_1
      </a>
    </div>
  )
}

export default HomePage
