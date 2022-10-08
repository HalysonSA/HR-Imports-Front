import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: Boolean,
    reducers: {
        cartIsOpen: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        }
    }
});

export const { cartIsOpen } = CartSlice.actions;
export default CartSlice.reducer;