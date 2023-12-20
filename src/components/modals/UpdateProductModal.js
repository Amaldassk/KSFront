import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { PiSubtitlesLight } from "react-icons/pi";
import { IoResizeOutline } from "react-icons/io5";
import { LuGauge } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";
import { LiaDrumSteelpanSolid } from "react-icons/lia";
import { GiPowder } from "react-icons/gi";
import { IoPricetagOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {Controller, useForm} from 'react-hook-form';
import ButtonLoadingSpinner from "../loader/ButtonLoadingSpinner";
import Select from "react-select";
import { updateProduct } from "../../redux/actions/productActions";

const UpdateProductModal = ({isOpen, onClose, productData, productId}) => {

    const {payload} = productData;
    const {productName:productTitle, size:productSize, gauge:productGauge, color:productColor, material:productMaterial, powderCoated:productCoated, price:productPrice} = payload;
    const data ={
        productTitle, productSize, productGauge, productColor, productMaterial, productCoated, productPrice, productId
    }

    const [isSaving, setIsSaving] = useState(false);
    const dialogRef = useRef(null);

    const {reset, register, formState:{errors}, handleSubmit, control} = useForm({mode:'all'});

    const dispatch = useDispatch();

    const handleProductUpdate = async(data) => {
        setIsSaving(true);

        await dispatch(updateProduct(data));
        setIsSaving(false);
        onClose();
    }

    useEffect(()=>{
        defaultValues = data;
        reset({ ...defaultValues });
    },[]);

    // const selectOptions = [
    //     { value: "student", label: "Student" },
    //     { value: "developer", label: "Developer" },
    //     { value: "manager", label: "Manager" }
    //   ];

    return(
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div"  initialFocus={dialogRef} className="fixed inset-0 z-50 text-center font-ksN" static onClose={()=>{}}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30"/>
                </Transition.Child>
                <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div className="inline-block w-full transform overflow-hidden rounded-md bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle md:max-w-xl">
                        <div className="w-full">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Update Product</Dialog.Title>
                                <hr className="mt-3"/>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <PiSubtitlesLight className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Title</label>
                                    </div>
                                    <input
                                        name="productName"
                                        {...register("productTitle",{
                                            required:"Product title is required"
                                        })}
                                        defaultChecked={productData.productName}
                                    type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none" />
                                    <p className="text-ksC1 text-xs mt-1">{errors.productTitle?.message}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <IoResizeOutline className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Size</label>
                                    </div>
                                    <input
                                        {...register("productSize",{
                                            required:"Product size is required"
                                        })}
                                    type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none" />
                                    <p className="text-ksC1 text-xs mt-1">{errors.productSize?.message}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <LuGauge className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Gauge</label>
                                    </div>
                                    <input 
                                        {...register("productGauge",{
                                            required:"Product gauge is required"
                                        })}
                                    type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none" />
                                    <p className="text-ksC1 text-xs">{errors.productGauge?.message}</p>
                                </div>
                                {/* <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <LuGauge className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Gauge</label>
                                    </div>
                                    <input type="text" className="mt-1 block w-full rounded-md border-b border-gray-300 p-2 outline-none" value={gauge} onChange={(e) => setGauge(e.target.value)}/>
                                </div> */}
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <MdOutlineColorLens className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Color</label>
                                    </div>
                                    <select
                                        {...register("productColor",{
                                            required:"Product color is required"
                                        })}
                                     className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none">
                                        <option value="red">Red</option>
                                        <option value="white">White</option>
                                        <option value="olive green">Olive Green</option>
                                        <option value="purple">Purple</option>
                                        <option value="blue">Blue</option>
                                        <option value="black">Black</option>
                                    </select>
                                    <p className="text-ksC1 text-xs">{errors.productColor?.message}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <LiaDrumSteelpanSolid className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Material</label>
                                    </div>
                                    <input 
                                        {...register("productMaterial",{
                                            required:"Product material is required"
                                        })}
                                    type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none"   />
                                    <p className="text-ksC1 text-xs">{errors.productMaterial?.message}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <GiPowder className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Powder Coated</label>
                                    </div>
                                    {/* <Controller name="productCoated" control={control} defaultValue="" rules={{required:"Product powdercoated is required"}}
                                        render={({field})=>(
                                            <Select options={selectOptions} {...field} label="Text field"/>
                                        )}
                                    /> */}
                                    <select
                                        {...register("productCoated",{
                                            required:"Product powdercoated is required",
                                        })}
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none">
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                    <p className="text-ksC1 text-xs">{errors?.productCoated && errors.productCoated?.message}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <IoPricetagOutline className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-500">Price</label>
                                    </div>
                                    <input 
                                        {...register("productPrice",{
                                            valueAsNumber:true,
                                            pattern:{
                                                value: /^(0|[1-9]\d*)(\.\d+)?$/
                                             },
                                            required:"Product price is required"
                                        })}
                                    type="number" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none"/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button type="button" className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${
                                isSaving
                                ? "cursor-not-allowed bg-gray-400"
                                : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            }`} onClick={handleSubmit(handleProductUpdate)}>
                                {isSaving ? ( <ButtonLoadingSpinner loadingText={"Updating..."}/>):(<span>Update</span>)}
                            </button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default UpdateProductModal;