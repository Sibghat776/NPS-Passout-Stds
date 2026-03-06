// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import AdminDataSlice from './Slice/AdminDataSlice.js';
import studentSlice from "./Slice/studentSlice.js";

export const store = configureStore({
    reducer: {
        admin: AdminDataSlice,
        students: studentSlice
    },
});
