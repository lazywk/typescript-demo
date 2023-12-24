import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthStateProps {
    token: string;
    signedIn: boolean;
}

const initialState: AuthStateProps = {
    token: '',
    signedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
            state.signedIn = true;
        },
        logoutSuccess: (state) => {
            state.token = '';
            state.signedIn = false;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
