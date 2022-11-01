import { AuthState, authInitialState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'changeUsername', payload: string }

// función que genera el estado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {

    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet'
      }

    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }

    case 'changeUsername':
      return {
        ...state,
        username: action.payload
      }

    default:
      return state
  }

}


/**
 * NOTAS:
 * - Un reducer es una función pura(que se resuelve sin interacciones externas) 
 */