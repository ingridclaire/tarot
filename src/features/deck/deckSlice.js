import { createSlice } from '@reduxjs/toolkit';
import { deck, shuffleArray } from '../../data/deck';

const initialState = {
  remaining: [],
  current: null,
  pulled: []
};

export const deckSlice = createSlice({
  name: 'deckSelector',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    shuffleDeck: (state, action) => {
      console.log('shuffle deck action')
      state.remaining = shuffleArray([...deck])
    },
    pullCard: (state) => {
      let randomIndex = Math.floor(Math.random() * state.remaining.length)
      let pulledCard = state.remaining[randomIndex]
      state.remaining = state.remaining.filter(card => card.character !== pulledCard.character)
      state.pulled = [...state.pulled, pulledCard]
      state.current = pulledCard
    },
  },
});

export const { shuffleDeck, pullCard } = deckSlice.actions;

// export const selectCurrentSpread= (state) => state.spreadSelector.current;
// export const selectSpreadOptions= (state) => state.spreadSelector.options;

export default deckSlice.reducer;
