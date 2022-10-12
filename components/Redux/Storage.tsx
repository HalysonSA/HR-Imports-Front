import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import UserSlice from './UserSlice';
import CartSlice from './CartSlice';
import LoadingSlice from './LoadingSlice';

const rootReducer = combineReducers({
    products: ProductSlice,
    user: UserSlice,
    isCartOpen: CartSlice,
    isLoading: LoadingSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
