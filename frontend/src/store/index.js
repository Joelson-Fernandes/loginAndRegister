/* eslint-disable no-underscore-dangle */
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import authReducer from '../features/auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
};

const _persistedReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, _persistedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
