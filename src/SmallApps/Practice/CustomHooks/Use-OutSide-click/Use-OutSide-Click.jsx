import { useEffect, useState } from "react";
import useOutsideClick from "../../../CustomHooks/Use-OutSide-Click/Use-OutSide";

const useOutSideClick = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)) {
                return ; 
            }
            handler(event) ; t
        }

        document.addEventListener('mousedown', listener) ; 
        
        return () => {
            document.removeEventListener('mousedown', listener) ; 
        }

        
    }, [ref]) ; 

}

export default useOutsideClick ; 