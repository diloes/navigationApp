import { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

// Tipos de datos que vamos a manejar en la primera propiedad que devuelve el context
export interface AuthState {
  isLoggedIn: boolean
  username?: string
  favoriteIcon?: string
}

// Lo que va a contener la primera propiedad del context en un principio
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
}

// Lo que va a devolver el context
export interface AuthContextProps {
  authState: AuthState
  signIn: () => void
  logout: () => void
  changeFavoriteIcon: (iconName: string) => void
  changeUsername: (name: string) => void
}

// Este es el context
export const AuthContext = createContext({} as AuthContextProps)

// Componente JSX que provee el context
export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({ type: 'signIn' })
  }

  const logout = () => {
    dispatch({ type: 'logout' })
  }

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName })
  }

  const changeUsername = (name: string) => {
    dispatch({ type: 'changeUsername', payload: name })
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeFavoriteIcon,
      changeUsername
    }}>
      {children}
    </AuthContext.Provider>
  )

}