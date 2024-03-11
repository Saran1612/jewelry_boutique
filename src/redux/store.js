import { configureStore } from "@reduxjs/toolkit";
import { loginReducers } from "./slice";

const store = configureStore({
    reducer: {
        login: loginReducers
    }
})

export default store;
