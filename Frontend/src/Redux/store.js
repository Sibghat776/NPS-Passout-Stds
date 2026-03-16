// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import AdminDataSlice from './Slice/AdminDataSlice.jsx';
import studentSlice from "./Slice/studentSlice.jsx";

export const store = configureStore({
    reducer: {
        admin: AdminDataSlice,
        students: studentSlice
    },
});
