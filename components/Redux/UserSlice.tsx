import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
};

const UserSlice = createSlice({
    name: 'user',
    initialState: {} as InitialState,
    reducers: {
        signInUser: (state, action: PayloadAction<InitialState>) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { signInUser } = UserSlice.actions;
export default UserSlice.reducer;
