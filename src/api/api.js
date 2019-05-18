import axios from 'axios'

import store from '../store/store'
import { setIsLoggedIn, setAuthToken } from '../store/creators/user'

const dispatch = store.dispatch

const api = axios.create({
  baseURL: 'http://localhost:8085'
})

export const login = async (
  { email, password },
  { onSuccess, onFailure }
) => {
  try {
    const response = await api.post('/auth/login', {
      username: email,
      password
    })

    dispatch(setIsLoggedIn(true))
    dispatch(setAuthToken(response.data.authToken))

    onSuccess()
  }
  catch (error) {
    onFailure()
  }
}

export const getSecret = async (
  { onSuccess, onFailure }
) => {
  try {
    const response = await api.get('/resource/secret', {
      headers: {
        'Authorization': `Bearer ${store.getState().user.authToken}`
      }
    })

    console.log(response.data)

    onSuccess()
  }
  catch (error) {
    onFailure()
  }
}
