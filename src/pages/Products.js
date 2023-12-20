import React from 'react'
import ProductBanner from '../components/products/ProductBanner'
import { useSelector } from 'react-redux'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/shared/ProductCard'

const Products = () => {
    useProducts()
    const products = useSelector(state=>state.product?.productsList);
    console.log(products);

  return (
    <>
        <ProductBanner title="Our Products" mainthread="Home" thread="Products"/>
        <div className="container mx-auto px-4 grid grid-cols-4 gap-3 pb-10 pt-8 bg-white mt-14">
            {products && products.map((product,i)=>{
                return(
                    <ProductCard productData={product} key={product._id}/>
                )
            })}
        </div>
    </>
  )
}

export default Products