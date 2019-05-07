import { SET_USER_NAME } from '../types/user'

const defaultUser = {
  name: 'Jerry Seinfeld'
}

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

export default user
