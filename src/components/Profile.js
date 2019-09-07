import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfile } from '../redux/user/userActions'

const Profile = ({
  fetchUserProfile,
  userId,
  userProfile,
  loading,
  errorMessage,
}) => {
  useEffect(() => {
    fetchUserProfile(userId)
    //eslint-disable-next-line
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
          {userProfile.languages.map(language => (
            <li key={language}>
              <span>{language}</span>
            </li>
          ))}
        </ul>
        <h4>Ссылки:</h4>
        <ul>
          {userProfile.social.map(item => (
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

const mapStateToProps = state => ({
  userProfile: state.user.userProfile,
  errorMessage: state.user.errorMessage,
  userId: state.user.userId,
  loading: state.user.loading,
})

const mapDispatchToProps = {
  fetchUserProfile,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
