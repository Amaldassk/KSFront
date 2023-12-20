const ProductCard = ({productData}) => {

    const {productName, images, price, material} = productData;

    return(
        <div className="prod-card flex relative flex-wrap justify-center flex-col items-center overflow-hidden">
            <div>
                <img src={images[0]} className="min-w-[40] min-h-[40] h-[240] w-full" alt="test"/>
            </div>
            <div className="relative bottom-5 left-5 text-center">
                <div className="flex items-center mb-3 justify-center pt-8">
                    <span className="text-ksC1 text-lg">₹ {price}</span>
                </div>
                <h6 className="font-ksN text-xl text-ksC4 capitalize font-semibold">{productName}</h6>
                <span className="font-ksN text-base text-ksC4 capitalize">{material}</span>
            </div>
        </div>
    )
}

export default ProductCard;