import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import spreadSelectorReducer from '../features/spreadSelector/spreadSelectorSlice'
import deckReducer from '../features/deck/deckSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    spreadSelector: spreadSelectorReducer,
    deck: deckReducer
  },
});
