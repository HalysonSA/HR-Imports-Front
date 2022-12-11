import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from './type';

const OrderSlice = createSlice({
    name: 'orders',
    initialState: [] as Order[],
    reducers: {
        setOrdersProps: (state: Order[], action: PayloadAction<any>) => {
            return action.payload;
        },
    },
});

export const { setOrdersProps } = OrderSlice.actions;
export default OrderSlice.reducer;
