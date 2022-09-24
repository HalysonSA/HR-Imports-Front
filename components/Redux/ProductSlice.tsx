import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    _id: number;
    name: string;
    description: string;
    image: string;
    price: number;
};

const ProductSlice = createSlice({
    name: 'product',
    initialState: [] as InitialState[],
    reducers: {
        setProducts: (state, action: PayloadAction<InitialState>) => {
            Object.assign(state, action.payload);
        },
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        deleteProduct: (state, action) => {
            const index = state.findIndex(
                (product) => product._id === action.payload
            );
            state.splice(index, 1);
        },
        updateProduct: (state, action) => {
            const index = state.findIndex(
                (product) => product._id === action.payload.id
            );
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { setProducts, deleteProduct, updateProduct, addProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
