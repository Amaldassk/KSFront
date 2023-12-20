import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, handleApiError } from "../api/utils";
import {toast} from 'react-hot-toast';

export const sendMessage = createAsyncThunk('api/send', async(formData)=>{
    try{
        const {contactEmail:email, contactMessage:message, contactName:name, contactPhone:phone} = formData;

        const data = {
            email, message, name, phone
        };
        console.log(data);

        const res = await API.post('api/message/send', data,{
            headers:{
                "Content-Type":"application/json",
            }
        });
        toast.success("Enquiry message was sent successfully...");
        return res.data;

    } catch(err){
        toast.error("Some error occured..please try again");
        return handleApiError(err);
    }
})