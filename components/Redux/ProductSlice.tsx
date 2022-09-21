import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    _id: number
    name: string
    description: string
    image: string
    price: number
}

const ProductSlice = createSlice({
    name: 'product',
    initialState: [] as InitialState[],
    reducers: {
        setProducts: (state, action: PayloadAction<InitialState>) => {
            Object.assign(state, action.payload)
        },
    },
})

export const { setProducts } = ProductSlice.actions

export default ProductSlice.reducer
