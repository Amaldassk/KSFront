import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "../actions/emailActions";

const initialState = {
    message:null
}

const emailSlice = createSlice({
    name: 'email',
    initialState: initialState,
    extraReducers: {
        [sendMessage.fulfilled]:(state, payload) => {
            console.log('done');
        }
    }
});

export default emailSlice.reducer;