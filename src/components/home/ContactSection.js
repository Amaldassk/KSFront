import { PiUser } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiPhone } from "react-icons/pi";
import { PiChatText } from "react-icons/pi";
import ButtonLoadingSpinner from "../loader/ButtonLoadingSpinner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../redux/actions/emailActions";
import Contact from "../../assets/contact.jpg";

const ContactSection = () => {

    const [isSending, setIsSending] = useState(false);
    const dispatch = useDispatch();

    const {register, formState:{errors}, handleSubmit, reset} = useForm({mode:'all'});

    const handleMessageSend = async(data) => {
        setIsSending(true);
        await dispatch(sendMessage(data));
        setIsSending(false);
        reset();
    }

    return(
        <div className="mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-5 bg-contact-banner bg-center bg-no-repeat bg-cover">
                    <img src={Contact} alt="Contact" className="hidden"/> 
                </div>
                <div className="col-span-7 px-12">
                    <div className="pt-20 pb-10 relative">
                        <h5 className="text-4xl text-ksC2 font-bold">Request <span className="text-ksC6">A Quote?</span></h5>
                        <h3 className="text-base tracking-widest mt-4">GOT A QUESTION?</h3>
                        <span className="absolute bottom-6 -left-1 border-b border-[#4B91F1] w-[10%]"></span>
                    </div>
                    <div className="pb-20">
                        <form onSubmit={handleSubmit(handleMessageSend)}>
                            <div className="grid grid-cols-12 gap-2">
                                <div className="mt-4 col-span-4">
                                    <div className="flex items-center space-x-2 relative">
                                        <PiUser className="absolute top-5 left-2 text-ksC2" />
                                        <label className="text-sm font-medium text-gray-500 hidden">Name</label>
                                    </div>
                                    <input
                                        {...register("contactName",{
                                            required:"Please fill out name field"
                                        })}
                                    type="text" placeholder="Name" className="mt-1 block w-full rounded-sm border border-gray-300 p-1 outline-none h-[50] indent-7" />
                                    <p className="text-ksC1 text-xs mt-1">{errors.contactName?.message}</p>
                                </div>
                                <div className="mt-4 col-span-4">
                                    <div className="flex items-center space-x-2 relative">
                                        <PiEnvelopeSimple className="absolute top-5 left-2 text-ksC2" />
                                        <label className="hidden text-sm font-medium text-gray-500">Email</label>
                                    </div>
                                    <input
                                        {...register("contactEmail",{
                                            required:"Please fill out email field",
                                            pattern: {
                                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                message: "Email is not valid."
                                            }
                                        })}
                                    type="text" placeholder="Email" className="mt-1 block w-full rounded-sm border border-gray-300 p-1 outline-none h-[50] indent-7" />
                                    <p className="text-ksC1 text-xs mt-1">{errors.contactEmail?.message}</p>
                                </div>
                                <div className="mt-4 col-span-4">
                                    <div className="flex items-center space-x-2 relative">
                                        <PiPhone className="absolute top-5 left-2 text-ksC2" />
                                        <label className="hidden text-sm font-medium text-gray-500">Phone</label>
                                    </div>
                                    <input
                                        {...register("contactPhone",{
                                            required:"Please fill out phone field",
                                            pattern: {
                                                value:/^[6-9]\d{9}$/,
                                                message: "Not a valid phone no"
                                            }
                                        })}
                                    type="text" placeholder="Phone" className="mt-1 block w-full rounded-sm border border-gray-300 p-1 outline-none h-[50] indent-7" />
                                    <p className="text-ksC1 text-xs mt-1">{errors.contactPhone?.message}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center space-x-2 relative">
                                    <PiChatText className="absolute top-5 left-2 text-ksC2" />
                                    <label className="hidden text-sm font-medium text-gray-500">Message</label>
                                </div>
                                <textarea
                                    {...register("contactMessage",{
                                        required:"Please fill out message field"
                                    })}
                                type="text" placeholder="Message" className="mt-1 block w-full rounded-sm border border-gray-300 p-1 outline-none indent-8 min-h-[90]" />
                                <p className="text-ksC1 text-xs mt-1">{errors.contactMessage?.message}</p>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row">
                                <button type="submit" className={`inline-flex w-full min-w-[200] justify-center rounded-sm border border-transparent px-4 py-4 text-base outline-none mt-3 font-medium text-white shadow-sm focus:outline-none sm:w-auto sm:text-sm ${
                                    isSending
                                    ? "cursor-not-allowed bg-gray-400"
                                    : "bg-ksC2 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                }`}>
                                    {isSending ? ( <ButtonLoadingSpinner loadingText={"Sending..."}/>):(<span>Send Message</span>)}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;