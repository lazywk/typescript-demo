import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthStateProps {
    username: string;
    email: string;
}

const initialState: AuthStateProps = {
    username: '',
    email: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthStateProps | any>) => {
            state.username = action.payload.username
            state.email = action.payload.email
        },
        revokeUser: (state) => {
            state.username = ''
            state.email = ''
        }
    }
});

export const { setUser, revokeUser } = userSlice.actions;
export default userSlice.reducer;
