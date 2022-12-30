import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
  options: ['Clarity', 'Two Paths', 'Past, Present, Future'],
};

export const spreadSelectorSlice = createSlice({
  name: 'spreadSelector',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSelection: (state, action) => {
      state.current = action.payload
    },
    clearSelection: (state) => {
      state.current = null;
    },
  },
});

export const { setSelection, clearSelection } = spreadSelectorSlice.actions;

// export const selectCurrentSpread= (state) => state.spreadSelector.current;
// export const selectSpreadOptions= (state) => state.spreadSelector.options;

export default spreadSelectorSlice.reducer;
