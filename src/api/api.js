import axios from 'axios'

import store from '../store/store'
import { setIsLoggedIn, setToken } from '../store/creators/user'

const dispatch = store.dispatch

const api = axios.create({
  baseURL: 'http://localhost:8085'
})

export const login = async (
  { email, password },
  { onSuccess, onFailure }
) => {
  try {
    const response = await api.post('/login', {
      email,
      password
    })

    dispatch(setIsLoggedIn(true))
    dispatch(setToken(response.data.token))

    onSuccess()
  }
  catch (error) {
    onFailure()
  }
}
