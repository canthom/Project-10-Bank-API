import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  isAuth: false,
  isLoading: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    login: (state, action) => {
      state.token = action.payload.token;

      if (state.token != '') {
        state.isAuth = true;
      }
    },
    logout: () => {
      localStorage.clear();
      return initialState;
    },
    getTokenFromStorage: (state, action) => {
      state.token = action.payload.token;
      state.firstName = action.payload.firstName;

      if (state.token != '') {
        state.isAuth = true;
      }
    },
    getProfile: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { loading, login, logout, getProfile, getTokenFromStorage } =
  userSlice.actions;

export default userSlice.reducer;
