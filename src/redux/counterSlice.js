import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    name: (state) => {
      state.value += "John";
    },
    inputVal: (state) => {
        state.value += document.querySelector('.input').value;
    }
  },
});

export const { increment, decrement, incrementByAmount, name, inputVal } = counterSlice.actions;

export default counterSlice.reducer;
