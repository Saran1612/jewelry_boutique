
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

// Define "search" slice
const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchQuery: "",
        searchResults: [],
    },
    reducers: {
        setSearch: (state, action) => {
            console.log(action, "actionsofsearch")
            state.searchQuery = action.payload.keyword;
            state.searchResults = action.payload.data;
        },
        // setSearchResults: (state, action) => {
        //     state.searchResults = action.payload;
        // },
    },
});

// Export actions and reducers for both slices
export const { login, search } = loggedIn.actions;
export const loginReducers = loggedIn.reducer;

export const { setSearch } = searchSlice.actions;
export const searchReducers = searchSlice.reducer;
