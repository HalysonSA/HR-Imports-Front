import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import UserSlice from './UserSlice';
import CartSlice from './CartSlice';

const rootReducer = combineReducers({
    products: ProductSlice,
    user: UserSlice,
    isCartOpen: CartSlice
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
