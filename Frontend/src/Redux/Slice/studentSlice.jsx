import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "students",
    initialState: {
        list: [],
        selected: null,
        loading: false,
        error: null,
    },
    reducers: {
        // List set karo (fetch ke baad manually call karo)
        setStudents: (state, action) => {
            state.list = action.payload;
        },
        // Naya student add karo
        addStudent: (state, action) => {
            state.list.unshift(action.payload);
        },
        // Single student set karo
        setSelectedStudent: (state, action) => {
            state.selected = action.payload;
        },
        // Selected clear karo
        clearSelected: (state) => {
            state.selected = null;
        },
        // Ek student delete karo
        removeStudent: (state, action) => {
            state.list = state.list.filter(s => s._id !== action.payload);
        },
        // Saare students delete karo
        removeAllStudents: (state) => {
            state.list = [];
        },
        // Loading set karo
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        // Error set karo
        setError: (state, action) => {
            state.error = action.payload;
        },
        // Error clear karo
        clearError: (state) => {
            state.error = null;
        },
    }
});

export const {
    setStudents,
    addStudent,
    setSelectedStudent,
    clearSelected,
    removeStudent,
    removeAllStudents,
    setLoading,
    setError,
    clearError,
} = studentSlice.actions;

export default studentSlice.reducer;