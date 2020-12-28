import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../redux/user/userActions'

const Profile = () => {
  const { userId, userProfile, loading, errorMessage } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfile(userId))
  }, [])

  return loading ? (
    <div>Loading...</div>
  ) : errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    userProfile && (
      <div>
        <h3>Город: {userProfile.city}</h3>
        <h4>Знание языков:</h4>
        <ul>
          {userProfile.languages.map((language) => (
            <li key={language}>
              <span>{language}</span>
            </li>
          ))}
        </ul>
        <h4>Ссылки:</h4>
        <ul>
          {userProfile.social.map((item) => (
            <li key={item.label}>
              <a href={item.link} rel='noopener noreferrer' target='_blank'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

export default Profile
