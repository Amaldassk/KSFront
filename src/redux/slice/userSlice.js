import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/userActions";

const initialState = {
    user:{},
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{

    },
    extraReducers:{
        [getUser.fulfilled]: (state,action) => {
            console.log(action.payload);
            state.user = action.payload ? action.payload : null;
        }
    }
});

export default userSlice.reducer;