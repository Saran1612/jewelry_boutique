import { configureStore } from "@reduxjs/toolkit";
import { loginReducers, searchReducers } from "./slice";

const store = configureStore({
    reducer: {
        login: loginReducers,
        search: searchReducers
    }
})

export default store;
