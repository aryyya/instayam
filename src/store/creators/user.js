import { SET_USER_NAME } from '../types/user'

export const setUserName = name => {
  return {
    type: SET_USER_NAME,
    name
  }
}
