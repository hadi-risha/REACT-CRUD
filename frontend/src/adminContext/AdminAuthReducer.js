import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAdminAuth: false,
};

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      const { email, password } = action.payload;
      // Implement your admin credential check here (replace with actual logic)
      if (email === 'admin@example.com' && password === 'admin123') {
        state.isAdminAuth = true;
      }
    },
    adminLogout: (state) => {
      state.isAdminAuth = false;
    },
  },
});

export const { adminLogin, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer; // Export the authReducer
