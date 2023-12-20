import ContactSection from "../components/home/ContactSection";
import ProductBanner from "../components/products/ProductBanner";

const ContactUs = () => {
    return(
        <>
            <ProductBanner title="Contact Us" mainthread="Home" thread="Contact Us"/>
            <div className="container mx-auto px-10 bg-white pb-16">
                <p className="text-center mt-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <ContactSection/>
        </>
    )
}

export default ContactUs;