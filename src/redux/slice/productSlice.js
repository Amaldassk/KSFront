import { createSlice, current } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../actions/productActions";

const initailState = {
    productsList:null,
}

const productSlice = createSlice({
    name:'product',
    initialState: initailState,
    reducers:{

    },
    extraReducers:{
        [getProducts.fulfilled]:(state,action) => {
            action.payload ? state.productsList = action.payload : null;
        },
        [addProduct.fulfilled]:(state, action)=>{
            action.payload ? state.productsList.push(action.payload) : '';
        },
        [deleteProduct.fulfilled]:(state, action) => {
           const updatedProducts = state.productsList.filter((item)=>item._id !== action.payload._id);
           state.productsList = updatedProducts;
        },
        [updateProduct.fulfilled]:(state, action) => {
            const updatedProducts = state.productsList.map((item)=>{
                if(item._id == action.payload._id){
                    item = action.payload;
                }
                return item;
            });
            state.productsList = updatedProducts;
        },
    }
});

export default productSlice.reducer;