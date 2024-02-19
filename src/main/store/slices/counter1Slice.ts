import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Counter1State = {
  value: number;
  status: string;
};

const initialState: Counter1State = {
  value: 0,
  status: "idle",
};

export const setValueAsync = createAsyncThunk(
  "counter1/setValueAsync",
  async (value: number) => {
    const delay = new Promise<number>((resolve, rejected) => {
      setTimeout(() => {
        if (value >= 0) {
          resolve(value);
        } else {
          rejected(Error(""));
        }
      }, 1000);
    });
    const result = await delay;
    return result;
  }
);

export const counter1Slice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment: (state: Counter1State, action: PayloadAction<void>) => {
      state.value += 1;
    },
    decrement: (state: Counter1State, action: PayloadAction<void>) => {
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
    builder.addCase(setValueAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = action.payload;
    });
    builder.addCase(setValueAsync.rejected, (state) => {
      state.value = 0;
    });
  },
});

export const { increment, decrement } = counter1Slice.actions;
export const counter1Selector = (store: RootState) => store.counter1Reducer;
export default counter1Slice.reducer;
