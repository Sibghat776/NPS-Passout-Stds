import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [
        { id: 1, name: 'Zeeshan Ali', email: 'zeeshan@example.com', isVerified: true, date: 'Mar 05, 2024' },
        { id: 2, name: 'Ayesha Khan', email: 'ayesha@example.com', isVerified: false, date: 'Mar 01, 2024' },
        { id: 3, name: 'Hamza Sheikh', email: 'hamza@example.com', isVerified: true, date: 'Feb 28, 2024' },
        { id: 4, name: 'Sara Ahmed', email: 'sara@example.com', isVerified: false, date: 'Feb 25, 2024' },
    ],
    loading: false,
    error: null,
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        // Action to delete a student
        deleteStudent: (state, action) => {
            state.list = state.list.filter(student => student.id !== action.payload);
        },
        // Action to toggle verification status
        toggleVerification: (state, action) => {
            const student = state.list.find(s => s.id === action.payload);
            if (student) {
                student.isVerified = !student.isVerified;
            }
        },
        // Action to set data from API (Future use)
        setStudents: (state, action) => {
            state.list = action.payload;
        }
    },
});

export const { deleteStudent, toggleVerification, setStudents } = studentSlice.actions;
export default studentSlice.reducer;