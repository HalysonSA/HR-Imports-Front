import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInfo, ShopFiltersInfo } from './type';

const ProductSlice = createSlice({
    name: 'product',
    initialState: [] as ProductInfo[],
    reducers: {
        setProducts: (state, action: PayloadAction<ProductInfo>) => {
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
                (product) => product._id === action.payload._id
            );

            if (index !== -1) {
                state[index] = action.payload;
            }
        },

        orderProduct: (state, action) => {
            const isDown = action.payload.isDown;
            const description = action.payload.description;

            switch (description) {
                case 'price':
                    if (isDown) {
                        state.sort((a, b) => a.price - b.price);
                        break;
                    }
                    state.sort((a, b) => b.price - a.price);
                    break;

                case 'title':
                    if (isDown) {
                        state.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    }
                    state.sort((a, b) => b.title.localeCompare(a.title));
                    break;

                case 'amount':
                    if (isDown) {
                        state.sort((a, b) => a.stock - b.stock);
                        break;
                    }
                    state.sort((a, b) => b.stock - a.stock);
                    break;

                case 'category':
                    if (isDown) {
                        state.sort((a, b) =>
                            a.category.localeCompare(b.category)
                        );
                        break;
                    }
                    state.sort((a, b) => b.category.localeCompare(a.category));
                    break;

                default:
                    break;
            }
        },
        setShopFilters: (state, action: PayloadAction<ShopFiltersInfo>) => {
            switch (action.payload._orderBy) {
                case 'lowPrice':
                    state.sort((a, b) => a.price - b.price);
                    break;
                case 'higPrice':
                    state.sort((a, b) => b.price - a.price);
                    break;
                case 'hot':
                    const promotionalProducts = state.filter(
                        (product) => product.promotional === true
                    );
                    const notPromotionalProducts = state.filter(
                        (product) => product.promotional === false
                    );

                    return promotionalProducts.concat(notPromotionalProducts);
                default:
                    break;
            }
        },
    },
});

export const {
    setProducts,
    deleteProduct,
    updateProduct,
    addProduct,
    orderProduct,
    setShopFilters,
} = ProductSlice.actions;

export default ProductSlice.reducer;
