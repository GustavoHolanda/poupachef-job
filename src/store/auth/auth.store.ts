import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISession } from '../../models/session';
import { RootState } from '../store';

export interface AuthState {
    session?: ISession,
    loading: boolean,
    status: {
        status: 'error' | 'success' | null;
        message: string,
    },
}

const statusInitialState = {
    status: null,
    message: ''
}

const initialState: AuthState = {
    loading: false,
    status: statusInitialState
}

export const authSlice = createSlice({
    initialState: initialState,
    name: 'auth',
    reducers: {
        loginAction: (state, action: PayloadAction<{ username: string, password: string, history: any }>) => {
            state.loading = true;
            state.status = { status: null, message: '' };
        },
        loginSuccess: (state, action: PayloadAction<ISession>) => {
            state.loading = false;
            state.session = action.payload;
            state.status = { status: 'success', message: 'Successfully authenticated' };
            
        },
        loginError: (state) => {
            state.loading = false;
            state.status = { status: 'error', message: 'Authentication error - Check your name or password' };
        },
        cleanAuthStatus: (state) => {
            state.status = statusInitialState;
        }
    }
})


export const { loginAction, loginSuccess, loginError, cleanAuthStatus } = authSlice.actions;

export default authSlice.reducer

// selectors

export const selectAuthLoading = (state: RootState) => state.auth.loading