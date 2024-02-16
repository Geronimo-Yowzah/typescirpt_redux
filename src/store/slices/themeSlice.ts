import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ThemeState = {
  themeApp: string
};

const initialState: ThemeState = {
    themeApp: 'default'
};

export const changeSlice = createSlice({
    name:"change",
    initialState,
    reducers:{
        isChange: (state: ThemeState, action: PayloadAction<void>) => {
            state.themeApp = state.themeApp === 'default' ? 'sora2' : 'sora1';
        }
    },
    extraReducers:{}
})

export const { isChange } = changeSlice.actions;
export const changeSelector = (store: RootState) => store.changeReducer;
export default changeSlice.reducer;
