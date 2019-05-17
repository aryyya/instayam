import { SET_USER_NAME, SET_IS_LOGGED_IN } from '../types/user'

export const setUserName = name => {
  return {
    type: SET_USER_NAME,
    name
  }
}

export const setIsLoggedIn = isLoggedIn => {
  return {
    type: SET_IS_LOGGED_IN,
    isLoggedIn
  }
}
