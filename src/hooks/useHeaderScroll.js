import { useEffect, useState } from "react";

const useHeaderScroll = () => {
    const [scroll, setScroll] = useState(false);

    const updateScroll = () => {
        console.log(scroll, 'scroll');
        setScroll(window.scrollY > 50);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);

        return ()=>{
            window.removeEventListener('scroll', updateScroll);
        }
    },[]);

    return scroll;
}

export default useHeaderScroll;