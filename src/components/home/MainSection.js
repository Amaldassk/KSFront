import { useEffect } from "react";
import BannerSection from "./BannerSection";
import ProductsSection from "./ProductsSection";
import useProducts from "../../hooks/useProducts";
import ContactSection from "./ContactSection";

const MainSection = () => {
 
    useProducts();

    return(
        <>
        <BannerSection/>
        <ProductsSection/>
        <ContactSection/>
        </>
    )
}

export default MainSection;