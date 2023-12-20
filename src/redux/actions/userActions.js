import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, handleApiError } from "../api/utils";

export const getUser = createAsyncThunk("user/getUser", async(id)=>{
    try{
        const res = await API.get(`api/user/${id}`);
        return res.data;
    } catch(err){
        return handleApiError(err);
    }
})