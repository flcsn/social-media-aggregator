import userService from '../services/users'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
    case 'REGISTRATION_SUCCESS': {
      const user = action.data.user
      window.localStorage.setItem('social-media-aggregator-user', JSON.stringify(user))
      return user
    }
    case 'LOG_OUT': {
      window.localStorage.removeItem('social-media-aggregator-user')
      return null
    }
    default:
      return state
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await userService.login(username, password)
      dispatch({
        type: 'LOG_IN_SUCCESS',
        data: { user }
      })
    } catch (error) {
      console.log(error.response.data) // change to notif
    }
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT'
  }
}

export const register = (username, password, email) => {
  return async (dispatch) => {
    try {
      await userService.register(username, password, email)
      const user = await userService.login(username, password)
      dispatch({
        type: 'REGISTRATION_SUCCESS',
        data: { user }
      })
    } catch (error) {
      console.log(error.response.data.error) // change to notif
    }
  }
}

export const rememberLocalUser = (user) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data: { user }
  }
}

export default userReducer