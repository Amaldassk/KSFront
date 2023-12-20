import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import CommonLoading from "../loader/CommonLoading";
import OwnProfileCard from "./OwnProfileCard";
import ProductEditCard from "./ProductEditCard";

const UserProfile = ({userData}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const user = useSelector(state=>state.user?.user);

    useEffect(()=>{
        setLoading(true);
        (async()=>{
            await dispatch(getUser(userData._id))
        })();
        setLoading(false);
    },[]);

    return(
        <>
            {loading || !user ? (
                <div className="flex justify-center items-center h-screen">
                    <CommonLoading />
                </div>
            ):(
                <>
                    <div className="flex w-full">
                        <OwnProfileCard user={user}/>
                        <ProductEditCard/>
                    </div>
                </>
            )}
        </>
    )
}

export default UserProfile;