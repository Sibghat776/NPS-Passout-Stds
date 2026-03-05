import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {

        loginRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },

        loginSuccess: (state, action) => {
            state.name = action.payload.name;
            state.isAuthenticated = true;
            state.isLoading = false;
        },

        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = action.payload;
        },

        logout: (state) => {
            state.name = "";
            state.isAuthenticated = false;
            state.error = null;
        }

    }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = adminSlice.actions;

export default adminSlice.reducer;