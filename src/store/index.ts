import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/main.slice';

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
