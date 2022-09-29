import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import UserSlice from './UserSlice';

const rootReducer = combineReducers({
    products: ProductSlice,
    user: UserSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
