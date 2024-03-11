import { createSlice } from "@reduxjs/toolkit";

const loggedIn = createSlice({
    name: "login",
    initialState: { access_token: "", isLoggedIn: false },
    reducers: {
        login: (state, action) => {
            console.log(action, "actions")
            const { access_token } = action.payload;
            if (access_token) {
                state.access_token = access_token;
                state.isLoggedIn = true;
            }
        }
    }
})

export const { login } = loggedIn.actions;
export const loginReducers = loggedIn.reducer;
