import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  isAuth: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;

      if (state.token != '') {
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.email = '';
      state.token = '';
      state.isAuth = false;
    },
    getProfile: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { login, logout, getProfile } = userSlice.actions;

export default userSlice.reducer;
