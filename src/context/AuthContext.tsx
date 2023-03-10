import { Dispatch, createContext, useEffect, useReducer } from 'react'

import React from 'react'

type UserType = {
  id: number;
  name: string;
  price: number;
}

const initialState = {
  user: {},
};

interface Actions {
  LOGIN: string;
  LOGOUT: string;
}

export const AUTH_TYPE : Actions = {
  LOGIN : 'LOGIN',
  LOGOUT : 'LOGOUT',
}

export type ActionType = {
 type: string,
 payload: string | null
}


export const AuthContext = createContext<{
  state: {};
  dispatch: Dispatch<ActionType>; 
}>({
  state: initialState,
  dispatch: () => null
})



export const authReducers = (state : any, action : any) => {
    switch(action.type) {
        case AUTH_TYPE.LOGIN:
            return { user: action.payload }
        case AUTH_TYPE.LOGOUT:
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider : React.FC = ({ children } : any) => {
    const [state, dispatch] = useReducer(authReducers, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') ?? '')
        
        if (user) {
            dispatch({ type: AUTH_TYPE.LOGIN, payload: user })
        }
    }, [])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
} 