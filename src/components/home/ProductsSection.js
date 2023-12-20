import { useSelector } from "react-redux";
import ProductCard from "../shared/ProductCard";
import { Link } from "react-router-dom";

const ProductsSection = () => {

    const productsLists = useSelector(state=>state.product?.productsList);
    const products = productsLists?.slice(0,4);

    return(
        <>
        <div className="container mx-auto px-4 bg-white pb-14">
            <div className="pt-36 pb-10 mb-10 relative text-center">
                <h5 className="text-4xl text-ksC2 font-bold">Hand Picked <span className="text-ksC6">Products</span></h5>
                <h3 className="text-base tracking-widest mt-4 uppercase">Current top sellers</h3>
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 border-b border-[#4B91F1] w-[10%]"></span>
            </div>
            <div className="grid grid-cols-4 gap-3 pb-10">
                {products && products.map((product,i)=>{
                    return(
                        <ProductCard productData={product} key={product._id}/>
                    )
                })}
                
            </div>
            <div className="w-full text-center">
                <Link to="/products"><button type="submit" className="bg-ksC2 inline-flex w-full min-w-[200] justify-center rounded-sm border border-transparent px-4 py-4 text-base outline-none mb-10 font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none sm:w-auto sm:text-sm">
                    <span>View More</span>
                </button></Link>
            </div>
        </div>
        </>
    )
}

export default ProductsSection;