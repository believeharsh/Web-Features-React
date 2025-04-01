import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./feature-todo"

export const Store = configureStore({
    reducer : TodoReducer 
})