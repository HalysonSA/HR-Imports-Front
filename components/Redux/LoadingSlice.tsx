import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LoadingSlice = createSlice({
    name: 'isLoading',
    initialState: Boolean,
    reducers: {
        isLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        },
    },
});

export const { isLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;
