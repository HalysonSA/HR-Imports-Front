import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import FiltersSlice from './FiltersSlice';
import LoadingSlice from './LoadingSlice';
import OrderSlice from './OrderSlice';
import ProductSlice from './ProductSlice';
import UserSlice from './UserSlice';

const rootReducer = combineReducers({
    products: ProductSlice,
    user: UserSlice,
    isCartOpen: CartSlice,
    isLoading: LoadingSlice,
    filters: FiltersSlice,
    orders: OrderSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
