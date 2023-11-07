import { AuthState } from './AuthContext';

type AuthAction = | { type: 'signIn' } 
                  | { type: 'changeFavIcon', payload: string }
                  | { type: 'logout'}
                  | { type: 'changeUsername', payload: string }

export const AuthReducer = (state: AuthState, action: AuthAction ): AuthState => {

  //Siempre regresar un nuevo estado, no tratar de mutar o darle un nuevo valor a una variable
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username'
      }
      break;
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
      break;

    case 'changeUsername': 
      return {
        ...state,
        userName: action.payload
      }
      break; 

    case 'logout': 
      return {
        ...state,
        userName: undefined,
        isLoggedIn: false,
        favoriteIcon: undefined
      }
    default:
      return state;
  }




}