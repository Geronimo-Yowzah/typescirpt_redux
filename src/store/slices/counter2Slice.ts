import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Counter2State = {
  value: number;
  status: string;
};

const initialState: Counter2State = {
  value: 0,
  status: "idle",
};

export const counter2Slice = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    //   },
  },
  extraReducers: (builder) => {
    //   builder
    //     .addCase(incrementAsync.pending, (state) => {
    //       state.status = 'loading';
    //     })
    //     .addCase(incrementAsync.fulfilled, (state, action) => {
    //       state.status = 'idle';
    //       state.value += action.payload;
    //     })
    //     .addCase(incrementAsync.rejected, (state) => {
    //       state.status = 'failed';
    //     });
  },
});

export const { increment, decrement } = counter2Slice.actions;
export const counter2Selector = (store: RootState) => store.counter2Reducer;
export default counter2Slice.reducer;
