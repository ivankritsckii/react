import { combineReducers,configureStore } from "@reduxjs/toolkit";
import toolKitReducer from "./toolKitSlice";
import { apiSlice } from '../APIRequests/sliceAPI'

const rootReducer = combineReducers({
    toolkit:toolKitReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(apiSlice.middleware)} 
}) 

