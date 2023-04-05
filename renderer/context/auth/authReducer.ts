import { AuthState } from './AuthProvider';

type AuthActionType = | { type: '[AUTH] - toggleIsLoggedIn' }

export const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {

    switch (action.type) {
        case '[AUTH] - toggleIsLoggedIn':
            return {
                ...state,
            }

        default:
            return state;
    }
}