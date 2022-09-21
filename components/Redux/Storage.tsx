import { configureStore, combineReducers} from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice'


const  rootReducer = combineReducers({
    products: ProductSlice
})

const store = configureStore({
    reducer:rootReducer
})  

export default store;