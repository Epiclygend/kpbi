import config from '@/config';
import store from '@/store'

function updateToken(newTokenType, newToken) {
  // Set Token to Browser Session
  const sessTokenName = config.session.AUTH_TOKEN_NAME
  window.localStorage.setItem(sessTokenName, `${newTokenType} ${newToken}`)
  // Set axios default header
  const SESSION_TOKEN = window.localStorage.getItem(sessTokenName)
  window.axios.defaults.headers.common['Authorization'] = SESSION_TOKEN;
  return true
}

function errorHandler(err) {
  return {
    success: false,
    message: err.message,
    response: { ...err.response },
    request: { ...err.request },
    config: { ...err.config },
  }
}

async function Login(loginData, finallyCB = null) {
  const {
    data: { success, access_token, token_type }
  } = await axios.post('/api/auth/login', loginData).finally(any => finallyCB?.(any))

  if (success) {
    updateToken(token_type, access_token)
  }
}

async function Logout(finallyCB = null) {
  try {
    const { data } = await axios.post('/api/auth/logout').finally(any => finallyCB?.(any))
    return {
      success: true,
      ...data
    }
  } catch (error) {
    return errorHandler(error)
  }
}

async function Register(registerData, finallyCB = null) {
  try {
    const { data: { success, message } } = await axios.post('/api/auth/register', { ...registerData, _token: store.state.csrfToken }).finally(any => finallyCB?.(any))

    console.log({ success, message });
    if (success) {
      return { success, message }
    }
  } catch (error) {
    return errorHandler(error)
  }
}

export {
  updateToken, Login, Logout, Register,
}
