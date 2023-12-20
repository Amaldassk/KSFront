import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, handleApiError } from "../api/utils";
import {toast} from 'react-hot-toast';

export const getProducts = createAsyncThunk('api/getProducts', async()=>{
    try{
        const res = await API.get("api/product");
        return res.data;
    } catch(err){
        return handleApiError(err);
    }
});

export const getProduct = createAsyncThunk('api/getProduct', async(id)=>{
    console.log('testttt');
    try{
        const res = await API.get(`api/product/${id}`);
        return res.data;
    } catch(err){
        handleApiError(err);
    }
});

export const addProduct = createAsyncThunk('api/addProduct', async(formData)=>{
    try{
        const {productTitle:productName,productSize:size,productGauge:gauge,productImage:images,productColor:color,productMaterial:material,productCoated:powderCoated,productPrice:price} = formData;
        
        const data = {
            productName,size,gauge,color,material,powderCoated,price
        }
        console.log(data,'hhhhh',images[0]);
        const formDatas = new FormData();
        formDatas.append('productDetails',JSON.stringify(data));
        formDatas.append('productImage', images[0]);
        console.log(formDatas);

        const res = await API.post("api/product", formDatas, {
            headers:{
                'Content-Type':'multipart/form-data',
            }
        });
        toast.success("Product added successfully");
        return res.data.newProduct;
    } catch(err){
        toast.error("Some error occured..please try again");
        return handleApiError(err);
    }
});


export const deleteProduct = createAsyncThunk("api/deleteProduct", async(id)=>{
    try{

        const res = await API.delete(`api/product/${id}`);

        toast.success("Product deleted successfully");
        return res.data;
    } catch(err){
        toast.error("Some error occured..please try again");
        return handleApiError(err);
    }
});

export const updateProduct = createAsyncThunk("api/updateProduct", async(formData)=>{
    try{
        const {productTitle:productName,productSize:size,productGauge:gauge,productColor:color,productMaterial:material,productCoated:powderCoated,productPrice:price} = formData;
        
        const data = {
            productName,size,gauge,color,material,powderCoated,price
        }

        const res = await API.put(`api/product/${formData.productId}`, data, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        toast.success("Product updated successfully");
        return res.data;
    } catch(err){
        toast.error("Some error occured..please try again");
        return handleApiError(err);
    }
})