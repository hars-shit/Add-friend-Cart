import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import microReducer from "./microReducer";
import storage from "redux-persist/lib/storage";

const persistconfig={
    key:"root",
    version:1,
    storage
    
};
const reducer=combineReducers({
    users:microReducer,
})

const persistedReducer=persistReducer(persistconfig,reducer);

const store=configureStore({
    reducer:persistedReducer,
})

export default store; 