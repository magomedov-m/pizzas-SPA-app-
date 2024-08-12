import { configureStore } from "@reduxjs/toolkit";
import test from './filterSlice';

export const store = configureStore({
  reducer: { 
    test,
   },
});
