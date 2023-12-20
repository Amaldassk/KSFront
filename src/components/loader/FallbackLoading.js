import { PulseLoader } from "react-spinners";

const FallbackLoading = () => {
    return(
      <div className="flex justify-center items-center h-screen">
        {/* <PulseLoader color="#008cff" /> */}
        loading....
      </div>
    )
}

export default FallbackLoading;