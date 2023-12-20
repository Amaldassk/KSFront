import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import useProducts from "../../hooks/useProducts";
import ProductListing from "./ProductListing";
import AddProductModal from "../modals/AddProductModal";
import { useState } from "react";
import ProductBanner from "./ProductBanner";

const ProductDashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    useProducts();

    return(
        <>
        <ProductBanner title="Add Products" mainthread="Home / Profile" thread="Products"/>
        <div className="container mx-auto px-4">
            <div className="flex justify-between my-2 p-2 items-center mt-3">
                <h3 className="text-xl">Products</h3>
                <button className="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={handleOpenModal}>Add product</button>
                {isModalOpen && <AddProductModal isOpen={isModalOpen} onClose={handleCloseModal}/>}
            </div>
            <ProductListing/>
        </div>
        </>
    )
}

export default ProductDashboard;