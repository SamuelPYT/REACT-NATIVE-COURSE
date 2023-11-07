import React, { createContext, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

//Definir como luce y que voy a tener dentro, que información voy a tener
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

//Estado inicial: qué información va a tener la aplicación en su primera carga
export const AuthInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined
}

//Interface para decirle a React cómo luce y que expone el Context 
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavIcon: (iconName: string) => void;
  logout: () => void;
  changueUsername: (username: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente que es el proveedor del estado 
export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(AuthReducer, AuthInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'}); 
  }

  const logout = () => {
    dispatch({type: 'logout' });
  }

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName });
  }

  const changueUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username });
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavIcon,
      logout, 
      changueUsername
    }}>
      {children}
    </AuthContext.Provider>
  )
}