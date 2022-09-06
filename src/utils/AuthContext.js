import { createContext } from 'react'

const AuthContext = createContext(null)

const initialState = {
  username: null,
  isLoggedIn: false,
}

function ContextProvider(props) {
  localStorage.setItem('username', initialState.username)
  localStorage.setItem('isLoggedIn', initialState.isLoggedIn)

  const logIn = (username) => {
    localStorage.setItem('username', username)
    localStorage.setItem('isLoggedIn', true)
  }

  const logOut = () => {
    localStorage.clear()
  }
  const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn')
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, ContextProvider }
