import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { number: 0 },
  reducers: {
    addNumber: (state, action) => {
      console.log(action);

      state.number = state.number + 1;
    },
    minusNumber: (state, action) => {
      state.number = state.number - 1;
    },
  },
});

export const { addNumber, minusNumber } = counterSlice.actions;

export default counterSlice.reducer;
