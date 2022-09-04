import create from 'zustand';
import { getToken, setToken, removeToken, TokenType } from './utils';

interface AuthState {
    token: TokenType | null;
    status: 'idle' | 'signOut' | 'signIn';
    signIn: (data: TokenType) => void;
    signOut: () => void;
    refresh: () => void;
}

export const useAuth = create<AuthState>((set, get) => ({
    status: 'idle',
    token: null,
    signIn: token => {
        setToken(token);
        set({ status: 'signIn', token });
    },
    signOut: () => {
        removeToken();
        set({ status: 'signOut', token: null });
    },
    refresh: () => {
        try {
            const userToken = getToken();
            console.log({ userToken });
            if (userToken !== null) {
                get().signIn(userToken);
            } else {
                get().signOut();
            }
        } catch (e) {
            // catch error here
            get().signOut();
        }
    },
}));

export const signOut = () => useAuth.getState().signOut();
export const refreshAuth = () => useAuth.getState().refresh();