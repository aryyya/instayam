import {
  SET_USER_NAME,
  SET_IS_LOGGED_IN,
  SET_AUTH_TOKEN
} from '../types/user'

const defaultUser = {
  name: 'Jerry Seinfeld',
  isLoggedIn: false,
  authToken: ''
}

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.name
      }
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.authToken
      }
    default:
      return state
  }
}

export default user
