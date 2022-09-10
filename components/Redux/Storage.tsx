import { configureStore, combineReducers} from '@reduxjs/toolkit';
import UserSlice from './UserSlice'


const  rootReducer = combineReducers({
    user: UserSlice
})

const store = configureStore({
    reducer:rootReducer
})  

export default store;