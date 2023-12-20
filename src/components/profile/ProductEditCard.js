import { useState } from "react";
import { Link } from "react-router-dom";

const ProductEditCard = () => {

    return (
        <div className="rounded-md border bg-white p-6 basis-6/12">
            <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center justify-center">

                    <div>
                        <div className="text-sm font-semibold text-gray-700 hover:underline">
                            <Link to="/profile/products">Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEditCard;