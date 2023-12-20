import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const useProducts = () => {
    const dispatch = useDispatch();

    const products = useSelector(state=>state.products?.productsList);

    useEffect(()=>{
        if(!products) dispatch(getProducts());
    },[]);
}

export default useProducts;