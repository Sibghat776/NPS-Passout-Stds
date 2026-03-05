// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import AdminDataSlice from './Slice/AdminDataSlice.js';

export const store = configureStore({
    reducer: {
        admin : AdminDataSlice,
    },
});
