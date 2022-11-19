import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    accountType?: string | undefined;
    status?: string | undefined;
};

const UserSlice = createSlice({
    name: 'user',
    initialState: {} as InitialState,
    reducers: {
        signInUser: (state, action: PayloadAction<InitialState>) => {
            Object.assign(state, action.payload);
            sessionStorage.setItem('user', JSON.stringify(state));
        },
        checkUser: (state, action: PayloadAction<InitialState>) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { signInUser, checkUser } = UserSlice.actions;
export default UserSlice.reducer;
