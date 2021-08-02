import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


const theme = localStorage.getItem('theme') as 'light' | 'dark' | undefined;

export interface ConfigState {
    theme: 'light' | 'dark'
}

const initialState: ConfigState = {
    theme:  theme ? theme : 'light'
}

export const configSlice = createSlice({
    initialState: initialState,
    name: 'config',
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
        }
    }
})

export const { setTheme } = configSlice.actions;

export default configSlice.reducer

// selectors

export const selectAppTheme = (state: RootState) => state.config.theme