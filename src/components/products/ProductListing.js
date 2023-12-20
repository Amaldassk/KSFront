import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CommonLoading from '../loader/CommonLoading';
import { MdOutlineDeleteForever } from "react-icons/md";
import DeleteProductmodal from '../modals/DeleteProductmodal';
import { RiEdit2Line } from "react-icons/ri";
import UpdateProductModal from '../modals/UpdateProductModal';
import { getProduct } from '../../redux/actions/productActions';

const ProductListing = () => {

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [productId, setProductId] = useState('');
    const [productData, setProductData] = useState(null);

    const products = useSelector(state=>state.product?.productsList);
    const dispatch = useDispatch();

    const handleDeleteCloseModal = () => {
        setIsDeleteModalOpen(false);
    }

    const handleUpdateCloseModal = () => {
        setIsUpdateModalOpen(false);
    }

    const handleDelete = (id) => {
        setProductId(id);
        setIsDeleteModalOpen(true);
    }

    const handleUpdate = async(id) => {
        setProductId(id);
        const data = await dispatch(getProduct(id));
        setProductData(data);
        setIsUpdateModalOpen(true);
    }

  if(!products) return <CommonLoading/>

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <table className="border-collapse table-auto w-full text-sm">
            <thead>
                <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Product Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Gauge</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Powder Coated</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Color</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Size</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-2 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
                {products && products.map((product,i)=>{
                    return(
                        <tr key={product._id}>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"><img className="h-10 w-10 min-w-[40] rounded-md object-cover" src={product?.images[0]} alt=""/></td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.productName}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.gauge}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.powderCoated === true ? "Yes" : "No"}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.color}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.price}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{product.size}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                <RiEdit2Line className='cursor-pointer hover:text-blue-500 text-lg' onClick={()=>handleUpdate(product._id)}/>
                                {isUpdateModalOpen && <UpdateProductModal isOpen={isUpdateModalOpen} onClose={handleUpdateCloseModal} productData={productData} productId={productId}/>}
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                <MdOutlineDeleteForever className='cursor-pointer hover:text-blue-500 text-lg' onClick={()=>handleDelete(product._id)}/>
                                {isDeleteModalOpen && <DeleteProductmodal isOpen={isDeleteModalOpen} onClose={handleDeleteCloseModal} productId={productId}/>}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductListing