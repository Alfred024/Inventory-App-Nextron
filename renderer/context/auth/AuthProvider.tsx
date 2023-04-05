import { FC, PropsWithChildren, useReducer } from 'react';
import { AuthContext, AuthReducer } from './';

export interface AuthState {
    isLoggedIn: boolean;
}

const Auth_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE)

    return (
        <AuthContext.Provider value={{
            isLoggedIn: false
        }}>
            {children}
        </AuthContext.Provider>
    )
}