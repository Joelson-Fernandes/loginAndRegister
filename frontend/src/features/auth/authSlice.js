/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authService from './authService';

export const authLogin = createAsyncThunk('auth/login', async (userData) => {
  return authService.login(userData);
});

export const authUser = createAsyncThunk('auth/user', async (userData) => {
  return authService.register(userData);
});

const initialState = {
  user: {},
  token: false,
  isLoggedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.token = false;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    // actions authenticate login
    builder.addCase(authLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.errors) toast.error(action.payload.errors[0]);
      if (action.payload.token) {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload;
        console.log(state.user);
      }
    });
    builder.addCase(authLogin.rejected, (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    });

    // actions authenticate User
    builder.addCase(authUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.errors) toast.error(action.payload.errors[0]);
      if (action.payload.email) toast.success('usuario cadastrado com sucesso');
    });
    builder.addCase(authUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
