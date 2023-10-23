import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter:0
}
export const counterSlice= createSlice({
  name: 'counterReducer',
  initialState,
  reducers: {
    incrementCount:(state)=> {
      state.counter = state.counter +1
    }, 
    decrementCount: (state)=>{
     state.counter=state.counter-1
    }
  }
})
export const {incrementCount}=counterSlice.actions;
export const {decrementCount}=counterSlice.actions;
export default counterSlice.reducer;