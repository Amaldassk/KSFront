import { useEffect } from "react"

const useHandleOutsideClick = (ref, onClickOutside) => {
    useEffect(()=>{
        const handleOutsideClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
              onClickOutside();
            }
          }
        document.addEventListener("click", handleOutsideClick);
        return()=>{
            document.removeEventListener("click", handleOutsideClick);
        }
    },[ref, onClickOutside]);
}

export default useHandleOutsideClick;