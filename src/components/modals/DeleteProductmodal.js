import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import ButtonLoadingSpinner from "../loader/ButtonLoadingSpinner";
import { deleteProduct } from "../../redux/actions/productActions";

const DeleteProductmodal = ({isOpen, onClose, productId}) => {

    const [isDeleting, setIsDeleting] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteProduct = async() => {
        setIsDeleting(true);
        await dispatch(deleteProduct(productId));
        setIsDeleting(false);
        onClose();
    }

    return(
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50 text-center font-ksN" onClose={()=>{}}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30"/>
                </Transition.Child>
                <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div className="inline-block w-full transform overflow-hidden rounded-md bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle md:max-w-xl">
                        <div className="w-full">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Delete Product</Dialog.Title>
                                <hr className="mt-3"/>
                                <p>Are you sure you want to delete?</p>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button type="button" className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${
                                        isDeleting
                                        ? "cursor-not-allowed bg-gray-400"
                                        : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    }`} onClick={handleDeleteProduct}>
                                        {isDeleting ? ( <ButtonLoadingSpinner loadingText={"Canceling..."}/>):(<span>Yes</span>)}
                                    </button>
                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" onClick={onClose}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default DeleteProductmodal;