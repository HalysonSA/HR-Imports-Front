import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    token: string
}

const initialState: InitialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    token: '',
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        checkUser: (state, action: PayloadAction<InitialState>) => {
            Object.assign(state, action.payload)
        },
    },
})

export const { checkUser } = UserSlice.actions

export default UserSlice.reducer
