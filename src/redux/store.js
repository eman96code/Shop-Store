import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/slices/counterSlice";
export const store= configureStore (
  {
    reducer:{
      counterReducer: counterSlice
    }
  }
)