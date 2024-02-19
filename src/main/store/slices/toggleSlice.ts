import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ToggleState = {
  isToggle: boolean;
  style: string
};

const initialState: ToggleState = {
    isToggle: false,
    style: 'sora1'
};

export const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        isToggle: (state: ToggleState, action: PayloadAction<void>) => {
            state.isToggle = !state.isToggle;
            state.style = state.style === 'sora1' ? 'sora2' : 'sora1';
        }
    },
    extraReducers:{}
})

export const { isToggle } = toggleSlice.actions;
export const toggleSelector = (store: RootState) => store.toggleReducer;
export default toggleSlice.reducer;
