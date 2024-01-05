import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
  "fetchPostData",
  async (id: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
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
