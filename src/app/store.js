import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import spreadSelectorReducer from '../features/spreadSelector/spreadSelectorSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    spreadSelector: spreadSelectorReducer
  },
});
