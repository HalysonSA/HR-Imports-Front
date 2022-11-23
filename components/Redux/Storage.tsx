import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import LoadingSlice from './LoadingSlice';
import ProductSlice from './ProductSlice';
import UserSlice from './UserSlice';

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
