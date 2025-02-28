import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
