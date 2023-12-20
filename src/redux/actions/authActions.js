import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, handleApiError } from "../api/utils";

export const registerUser = createAsyncThunk("auth/register", async(formData)=>{
    try{
        localStorage.removeItem("profile");

        const res = await API.post("api/auth/signup", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return { error:null, data: res.data};
    } catch(err){
        return {
            error: err.response.data.errors,
            data: null,
        };
    }
});

export const signInUser = createAsyncThunk("auth/signin", async(formData)=>{
    try{
        const res = await API.post("api/auth/signin", formData, {
            headers: {
                "Content-Type":"application/json",
            }
        });
        const { user, accessToken, refreshToken, accessTokenUpdatedAt } = res.data;
        const profile = {
            user,
            accessToken,
            refreshToken,
            accessTokenUpdatedAt,
        };
        localStorage.setItem("profile", JSON.stringify(profile));
        return res.data;
    } catch(err){
        return handleApiError(err);
    }
});