import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from 'axios';

type PostData = {
  data: any;
  loading: boolean;
  error: string | null;
};

const initialData: PostData = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  "fetchData",
  async (id: string) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const postDataSlice = createSlice({
  name: "postData",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [action.payload];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = "failed";
      });
  },
});

export const {} = postDataSlice.actions;
export const postSelector = (store: RootState) => store.postReducer;
export default postDataSlice.reducer;
