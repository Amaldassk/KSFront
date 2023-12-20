import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { FiUserCheck } from "react-icons/fi";
import Tooltip from "../shared/Tooltip";
import { useState } from "react";
import ProfileUpdateModal from "../modals/ProfileUpdateModal";

const OwnProfileCard = ({user}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return(
        <div className="rounded-md border bg-white p-6 basis-6/12">
            <div className="flex cursor-pointer justify-end text-xl" onClick={handleOpenModal}>
                <Tooltip text="Edit profile"><CiEdit /></Tooltip>
            </div>
            <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center justify-center">
                    <div className="">
                        <img className="mr-4 h-28 w-28 rounded-full object-cover" src={user.avatar} alt="Profile"></img>

                        <ProfileUpdateModal
                        user={user}
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        />
                    </div>

                    <div>
                        <h2 className="mt-5 text-center text-lg font-bold">{user.name}</h2>
                        <p className="flex items-center justify-center gap-2 text-gray-600"><MdEmail className="text-gray-500" />{user.email}</p>
                        {user.location ? (
                        <p className="flex items-center justify-center gap-2 text-gray-600"><TiLocation className="text-gray-500" />{user.location}</p>
                        ) : (
                        <p className="flex items-center justify-center gap-2 text-gray-400"><TiLocation className="text-gray-500" />Location not added</p>
                        )}
                        <hr className="mt-3" />
                        <p className="flex items-center justify-center gap-2 text-gray-600"><FiUserCheck className="text-gray-500" />{user.role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnProfileCard;