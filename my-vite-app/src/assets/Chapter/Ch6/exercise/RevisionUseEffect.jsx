import React, { createContext, useState, useEffect } from "react";


export const ScreenContext = createContext();

export default function ScreenContextProvider({children}){

    const[ScreenSize,setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        function ScreenResize(){
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize',ScreenResize);

        return(() => {
            window.removeEventListener('resize', ScreenResize);
        })
    },[])

    return(
        <ScreenContext.Provider  value={{ScreenSize}}>
            {children}
        </ScreenContext.Provider>
    )
}